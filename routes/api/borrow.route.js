const express = require('express');
const passport = require('passport');

const PostModel = require('../../models/post.model');
const ProfileModel = require('../../models/borrow.profile.model');
const { Post1, Post2, Post3, Post4, Post5 } = require('../../validation/post');

const router = express.Router();

//  Lấy danh sách các đơn hiện tại của bản thân
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const user = req.user.id;
    PostModel.find({ user })
      .populate('user')
      .then(val => res.json(val))
      .catch(err => console.log(err));
  },
);

// Đăng bài bước 1
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = Post1(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    const personalFields = {};

    const {
      typeOfLoan,
      loanNumber,

      duration,
      province,
      district,
    } = req.body;
    personalFields.user = req.user.id;
    personalFields.state = 'PENDING';
    // purchser, price don't set
    if (typeOfLoan) personalFields.typeOfLoan = typeOfLoan;
    if (loanNumber) personalFields.loanNumber = parseInt(loanNumber, 10);
    personalFields.date = {
      fromDate: Date.now(),
      duration,
    };
    personalFields.address = {
      province,
      district,
    };
    try {
      // Create
      const newProfile = await new PostModel(personalFields).save();
      return res.json(newProfile);
    } catch (error) {
      return res.status(500).json('Unknown server error', error);
    }
  },
);

// Đăng bài bước 2
router.post(
  '/:id/:profileID/1',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = Post2(req.body);
    const { id, profileID } = req.params;
    const { gender, CMND, DateOfBirth, email } = req.body;

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    try {
      ProfileModel.findByIdAndUpdate(
        profileID,
        { gender, CMND, DateOfBirth, email },
        { new: true },
      )
        .then(async () => {
          const updatePost = await PostModel.findByIdAndUpdate(
            id,
            {
              'personalInfo.gender': gender,
              'personalInfo.CMND': CMND,
              'personalInfo.DateOfBirth': DateOfBirth,
              'personalInfo.email': email,
            },
            { new: true },
          );
          return res.json(updatePost);
        })
        .catch(err => res.status(500).json('Unknown server error', err));
    } catch (error) {
      return res.status(500).json('Unknown server error', error);
    }
  },
);
// Đăng bài bước 3
router.post(
  '/:id/:profileID/2',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = Post3(req.body);
    const { id, profileID } = req.params;
    const {
      career,
      income,
      comName,
      comAddress,
      comPhone,
      bankName,
      bankID,
    } = req.body;

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    const data = {
      careerInfo: {
        career,
        income,
        comName,
        comAddress,
        comPhone,
      },
      bank: {
        bankName,
        bankID,
      },
    };
    try {
      ProfileModel.findByIdAndUpdate(profileID, data, {
        new: true,
      })
        .then(async () => {
          const Post = await PostModel.findByIdAndUpdate(id, data, {
            new: true,
          });

          return res.json(Post);
        })
        .catch(err => res.status(500).json('Unknown server error', err));
    } catch (error) {
      return res.status(500).json('Unknown server error', error);
    }
  },
);
// Đăng bài bước 4
router.post(
  '/:id/:profileID/3',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = Post4(req.body);
    const { id, profileID } = req.params;
    const { property1, residence, originalDocs, borrowing } = req.body;
    console.log('HELLO', req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    const data = {
      property1: [...property1],

      property2: {
        residence,
        originalDocs,
        borrowing,
      },
    };
    try {
      const Post = await PostModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return res.json(Post);
    } catch (error) {
      return res.status(500).json('Unknown server error', error);
    }
  },
);
// Đăng bài bước 5
router.post(
  '/:id/:profileID/4',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = Post5(req.body);
    console.log('sdfhkhdsàk', req.body);

    const { id, profileID } = req.params;
    const { relName, whatRels, relPhone } = req.body;

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    try {
      ProfileModel.findByIdAndUpdate(
        profileID,
        {
          'relatives.relName': relName,
          'relatives.whatRels': whatRels,
          'relatives.relPhone': relPhone,
        },
        { new: true },
      )
        .then(async () => {
          const updatePost = await PostModel.findByIdAndUpdate(
            id,
            {
              'relatives.relName': relName,
              'relatives.whatRels': whatRels,
              'relatives.relPhone': relPhone,
            },
            { new: true },
          );
          return res.json(updatePost);
        })
        .catch(err => res.status(500).json('Unknown server error', err));
    } catch (error) {
      return res.status(500).json('Unknown server error', error);
    }
  },
);
// Đăng ảnh
router.post(
  '/image/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { id } = req.params;

    const {
      identification,
      householdPhoto,
      propertyPhoto,
      incomePhoto,
    } = req.body;
    let data = {};
    if (identification) {
      data = {
        'censorship.identification': identification,
      };
    } else if (householdPhoto) {
      data = {
        'censorship.householdPhoto': householdPhoto,
      };
    } else if (propertyPhoto) {
      data = {
        'censorship.propertyPhoto': propertyPhoto,
      };
    } else if (incomePhoto) {
      data = {
        'censorship.incomePhoto': incomePhoto,
      };
    }

    try {
      const updatePost = await PostModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return res.json(updatePost);
    } catch (error) {
      return res.status(500).json('Unknown server error', error);
    }
  },
);

// Update state cho bài đăng
router.post(
  '/state/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { id } = req.params;
    const { state } = req.body;
    try {
      const perUpdate = await PostModel.findOneAndUpdate(
        { _id: id },
        { state },
        { new: true },
      );
      if (!perUpdate) {
        return res.status(404).json('PersonalModel not found for this ID');
      }
      return res.status(200).json(perUpdate);
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send('Duplicate key', err);
      }
      res.status(500).send(err);
    }
  },
);

module.exports = router;
