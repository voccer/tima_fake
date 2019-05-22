/* eslint-disable consistent-return */
/* eslint-disable no-console */
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = require('../models/user.model');
const BorrowProfile = require('../models/borrow.profile.model');
const LoanProfile = require('../models/loan.profile.model');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const SecretKey = require('../configs/server.config');

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
});

/* Tạo tài khoản. */
router.post('/register', (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { fullname, phone, password, province, district, typeOfAcc } = req.body;
  User.findOne({ phone: req.body.phone }).then(user => {
    if (user) {
      errors.phone = 'Phone already exists';
      return res.status(400).json(errors);
    }
    const newUser = new User({
      fullname,
      phone,
      password,
      typeOfAcc
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err3, hash) => {
        if (err3) next(err3);
        newUser.password = hash;
        newUser
          .save()
          .then(user_ => {
            if (typeOfAcc === 'loan') {
              const newProfile = new LoanProfile({
                user: user_.id,
                address: {
                  province,
                  district,
                  ward: '',
                  details: ''
                }
              });
              newProfile
                .save()
                .then(() => res.json({ success: true }))
                .catch(err1 => console.log('PROFILE LOAN ERROR: ', err1));
            } else if (typeOfAcc === 'borrow') {
              const newProfile = new BorrowProfile({
                user: user_.id,
                address: {
                  province,
                  district
                }
              });
              newProfile
                .save()
                .then(() => res.json({ success: true }))
                .catch(err1 => console.log('PROFILE BORROW ERROR: ', err1));
            }
          }) // fix trả về user
          .catch(err2 => console.log(err2));
      });
    });
  });
});

// Login
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { phone, password } = req.body;

  // Find User by phone
  User.findOne({ phone }).then(user => {
    if (!user) {
      errors.login = 'Tài khoản hoặc mật khẩu không chính xác';
      return res.status(404).json(errors);
    }
    // Check password
    bcrypt.compare(password, user.password, (err, same) => {
      errors.login = 'Tài khoản hoặc mật khẩu không chính xác';
      if (!same) return res.status(400).json(errors);
      // User matched
      const payload = {
        id: user.id,
        typeOfAcc: user.typeOfAcc,
        fullname: user.fullname,
        role: user.role,
      }; // Create JWT Payload
      // Sign Token
      jwt.sign(
        payload,
        SecretKey.secretOfKey,
        { expiresIn: 86400 },
        (err__, token) => {
          res.json({
            success: true,
            token: `Bearer ${token}`
          });
        }
      );
    });
  });
});

module.exports = router;
