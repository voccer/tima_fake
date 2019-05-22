/* eslint-disable consistent-return */
const express = require('express');

const passport = require('passport');

const validateLoanProfileInput = require('../../validation/loan.profile');
const validateBorrowProfileInput = require('../../validation/borrow.profile');

const router = express.Router();
const LoanProfile = require('../../models/loan.profile.model');
const BorrowProfile = require('../../models/borrow.profile.model');
const User = require('../../models/user.model');

// Tạo hoặc sửa profile người cho vay tiền
router.post(
  '/loan',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateLoanProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    // Get fields
    const profileFields = {};

    const {
      avatar,
      typeOfCredit,
      CMND,
      DateOfBirth,
      gender,
      email,
      province,
      district,
      ward,
      details,
      packages
    } = req.body;
    profileFields.user = req.user.id;
    profileFields.avatar = avatar;
    profileFields.typeOfCredit = typeOfCredit;
    profileFields.CMND = CMND;
    profileFields.DateOfBirth = DateOfBirth;
    profileFields.gender = gender;
    profileFields.email = email;
    profileFields.address = {
      province,
      district,
      ward,
      details
    };

    profileFields.packages = packages;
    try {
      const oldProfile = await LoanProfile.findOne({ user: req.user.id });
      if (oldProfile) {
        // Update
        const oldProfileUpdate = await LoanProfile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(oldProfileUpdate);
      }
      // Create
      const newProfile = await new LoanProfile(profileFields).save();
      return res.json(newProfile);
    } catch (error) {
      return res.status(500).json('Unknown server error');
    }
  }
);
router.post(
  '/loan/update/packages',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { packages } = req.body;
    try {
      const oldProfile = await LoanProfile.findOne({ user: req.user.id });
      if (oldProfile) {
        // Update
        const oldProfileUpdate = await LoanProfile.findOneAndUpdate(
          { user: req.user.id },
          { $set: { packages } },
          { new: true }
        );
        return res.json(oldProfileUpdate);
      }
    } catch (error) {
      return res.status(500).json('Unknown server error');
    }
  }
);
router.post(
  '/loan/update/reciveDistrict',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { reciveDistrict } = req.body;
    try {
      const oldProfile = await LoanProfile.findOne({ user: req.user.id });
      if (oldProfile) {
        // Update
        const oldProfileUpdate = await LoanProfile.findOneAndUpdate(
          { user: req.user.id },
          { $set: { reciveDistrict } },
          { new: true }
        );
        return res.json(oldProfileUpdate);
      }
    } catch (error) {
      return res.status(500).json('Unknown server error');
    }
  }
);
router.post(
  '/loan/update/censorship',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { identification, portrait } = req.body;
    try {
      const oldProfile = await LoanProfile.findOne({ user: req.user.id });
      if (oldProfile) {
        const censorship = {
          identification,
          portrait
        };
        const oldProfileUpdate = await LoanProfile.findOneAndUpdate(
          { user: req.user.id },
          { $set: { censorship } },
          { new: true }
        );
        return res.json(oldProfileUpdate);
      }
    } catch (error) {
      return res.status(500).json('Unknown server error');
    }
  }
);
router.post(
  '/borrow/update/censorship',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { portrait, identification } = req.body;
    try {
      const oldProfile = await BorrowProfile.findOne({ user: req.user.id });
      if (oldProfile) {
        const censorship = {
          portrait,
          identification
        };
        const oldProfileUpdate = await BorrowProfile.findOneAndUpdate(
          { user: req.user.id },
          { $set: { censorship } },
          { new: true }
        );
        return res.json(oldProfileUpdate);
      }
    } catch (error) {
      return res.status(500).json('Unknown server error');
    }
  }
);
// Tạo hoặc sửa profile người vay tiền
router.post(
  '/borrow',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateBorrowProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    // Get fields
    const profileFields = {};

    const {
      avatar,
      CMND,
      income,
      DateOfBirth,
      gender,
      email,
      province,
      district,
      ward,
      details,
      career,
      comName,
      comAddress,
      comPhone,
      relName,
      whatRels,
      relPhone
    } = req.body;
    profileFields.user = req.user.id;
    profileFields.avatar = avatar;
    profileFields.CMND = CMND;
    profileFields.income = income;
    profileFields.DateOfBirth = DateOfBirth;
    profileFields.gender = gender;
    profileFields.email = email;
    profileFields.address = {
      province,
      district,
      ward,
      details
    };
    profileFields.career = career;
    profileFields.company = {
      comName,
      comAddress,
      comPhone
    };
    profileFields.relatives = {
      relName,
      whatRels,
      relPhone
    };
    try {
      const oldProfile = await BorrowProfile.findOne({ user: req.user.id });
      if (oldProfile) {
        // Update
        const oldProfileUpdate = await BorrowProfile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(oldProfileUpdate);
      }
      // Create
      const newProfile = await new BorrowProfile(profileFields).save();
      return res.json(newProfile);
    } catch (error) {
      return res.status(500).json('Unknown server error');
    }
  }
);

// Xem profile của mình

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const user = req.user.id;
    const { typeOfAcc } = req.user;
    if (typeOfAcc === 'loan') {
      try {
        const thisProfile = await LoanProfile.findOne({ user }).populate(
          'user'
        );
        return res.json(thisProfile);
      } catch (error) {
        return res.status(500).json('Unknown server error');
      }
    } else if (typeOfAcc === 'borrow') {
      try {
        const thisProfile = await BorrowProfile.findOne({ user }).populate(
          'user'
        );
        return res.json(thisProfile);
      } catch (error) {
        return res.status(500).json('Unknown server error');
      }
    }
  }
);
// Xoá tài khoản
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const user = req.user.id;
    const { typeOfAcc } = req.user;
    if (typeOfAcc === 'loan') {
      try {
        const thisProfile = await LoanProfile.findOneAndRemove({ user });
        const thisUser = await User.findByIdAndRemove(user);

        if (!thisProfile) {
          return res.status(404).json('Not Found Profile Error');
        }
        if (!thisUser) {
          return res.status(404).json('Not Found User Error');
        }
        return res.status(204).json({ success: true }); // Status 204 is nocontent
      } catch (err) {
        return res.status(500).json('Unknown server error');
      }
    } else if (typeOfAcc === 'borrow') {
      try {
        const thisProfile = await BorrowProfile.findOneAndRemove({ user });
        const thisUser = await User.findByIdAndRemove(user);

        if (!thisProfile) {
          return res.status(404).json('Not Found Profile Error');
        }
        if (!thisUser) {
          return res.status(404).json('Not Found User Error');
        }
        return res.status(204).json({ success: true }); // Status 204 is nocontent
      } catch (err) {
        return res.status(500).json('Unknown server error');
      }
    }
  }
);
module.exports = router;
