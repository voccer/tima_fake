const express = require('express');
const passport = require('passport');

const UserModel = require('../../models/user.model');
const PostModel = require('../../models/post.model');
const BorrowProfileModel = require('../../models/borrow.profile.model');
const LoanProfileModel = require('../../models/loan.profile.model');

const router = express.Router();
// lọc những đơn khả thi trong những đơn của bản thân
// tiêu chí :Thành phố, quận huyện, thộc trong page đơn
router.get(
  '/foryou',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const user = req.user.id;
    const Profile = LoanProfileModel.findOne({ user }).then(userProfile => {
      if (!userProfile) {
        return null;
      }
      return userProfile;
    });
    Profile.then(value => {
      if (!value) return res.status(404).json('This user not found');
      const { packages } = value;
      const { province, district } = value.address;
      console.log({ packages, province, district });

      PostModel.find({
        typeOf: { $in: [...packages.mortgage] },
        state: 'PENDING',
        'address.province': province,
        'address.district': district
      })
        .populate('user')
        .then(val => {
          const overviewMor = val[0].map(mor => ({
            info: {
              fullname: mor.user.fullname,
              phone: mor.user.phone,
              loan: mor.loan,
              duration: mor.date.duration,
              address: mor.address,
              typeOf: mor.typeOf,
              CMND: mor.personalInfo.CMND
            },
            price: {
              ...mor.price
            },
            property: [...mor.property],
            careerInfo: mor.careerInfo
          }));

          return res.json(overviewMor);
        })
        .catch(err => console.log(err));
    });
  }
);

// Tìm tất cả các bài viết và cho xem tổng quan
router.get('/', (req, res) => {
  PostModel.find({ state: 'PENDING' })
    .populate('user')
    .then(val => {
      const overviewMor = val.map(mor => ({
        id: mor.id,
        fullname: mor.user.fullname,
        phone:
          // eslint-disable-next-line operator-linebreak
          mor.user.phone &&
          `${mor.user.phone.substr(0, 3)}*****${mor.user.phone.substr(7)}`,
        loanNumber: mor.loanNumber,
        date: mor.date,
        address: mor.address,
        typeOfLoan: mor.typeOfLoan,
        CMND:
          mor.personalInfo.CMND && `********${mor.personalInfo.CMND.substr(6)}`,
        price: mor.price,
        property1: mor.property1,
        property2: mor.property2,
        careerInfo: mor.careerInfo
      }));

      return res.json(overviewMor);
    })
    .catch(err => console.log(err));
});

// get list những bài đã mua
router.get(
  '/waspurchased',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const purchaser = req.user.id;
    console.log(req.user.id);

    PostModel.find({ purchaser })
      .populate('user')
      .then(val => res.json(val))
      .catch(err => console.log(err));
  }
);
// huỷ đơn đã mua => chuyển thành pending và giá giảm còn 80%.
// (Chú ý: khác với người tạo huỷ đơn do họ tạo => state => canceled)
router.post(
  '/cancel/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { id } = req.params;
    const purchaser = req.user.id;
    try {
      const mortUpdate = await PostModel.findOneAndUpdate(
        { _id: id, purchaser },
        {
          state: 'PENDING',
          purchaser: null,
          'price.discount': 0.8
        },
        { new: true }
      );
      if (!mortUpdate) {
        return res.status(404).json('PostModel not found for this ID');
      }
      return res.status(200).json(mortUpdate);
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send('Duplicate key', err);
      }
      res.status(500).send(err);
    }
  }
);
// Xem chi tiết bài đăng
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { id } = req.params;
    try {
      const seeMortgage = await PostModel.findById(id);
      if (!seeMortgage) {
        return res.status(404).json('PostModel not found for this ID');
      }
      return res.status(200).json(seeMortgage);
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send('Duplicate key', err);
      }
      res.status(500).send(err);
    }
  }
);

// mua một bài đăng
router.post(
  '/purchase/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { id } = req.params;
    const purchaser = req.user.id;
    try {
      const Profile = await LoanProfileModel.findOne({ user: purchaser });
      const temp = await Profile.balance;
      if (temp < 25000) {
        return res.status(404).json('Mày không có đủ tiền để mua bài đâu e');
      }
      Profile.balance = temp - 25000;
      Profile.save().then(async () => {
        const mortUpdate = await PostModel.findOneAndUpdate(
          { _id: id },
          {
            purchaser,
            state: 'PURCHASED'
          },
          { new: true }
        );
        if (!mortUpdate) {
          return res.status(404).json('PostModel not found for this ID');
        }
        return res.status(200).json(mortUpdate);
      });
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send('Duplicate key', err);
      }
      res.status(500).send(err);
    }
  }
);
// Giải ngân ( chỉ có người đã mua mới có quyền đc giải ngân bài đăng)
router.post(
  '/disburse/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { id } = req.params;
    const purchaser = req.user.id;
    try {
      const mortUpdate = await PostModel.findOneAndUpdate(
        { _id: id, purchaser },
        {
          state: 'DISBURSED'
        },
        { new: true }
      );
      if (!mortUpdate) {
        return res.status(404).json('PostModel not found for this ID');
      }
      return res.status(200).json(mortUpdate);
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send('Duplicate key', err);
      }
      res.status(500).send(err);
    }
  }
);

// fake chuyển tiền

router.post(
  '/recharge/fake',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const user = req.user.id;
    const amount = parseInt(req.body.amount, 10);
    console.log('haha:', amount);

    try {
      const profile = await LoanProfileModel.findOne({ user });

      const temp = profile.balance;
      console.log(temp);

      profile.balance = temp + amount;
      const mortUpdate = await profile.save();
      if (!mortUpdate) {
        return res.status(404).json('LoanProfileModel not found for this ID');
      }
      return res.status(200).json(mortUpdate);
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send('Duplicate key', err);
      }
      res.status(500).send(err);
    }
  }
);
// filter bài viết

// tra cứu người cần thuê dựa trên số điện thoại hoặc số CMND
router.post(
  '/lookup/:field',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const user = req.user.id;
    const { field } = req.params;
    const { data } = req.body;
    const Profile = await LoanProfileModel.findOne({ user });
    const temp = await Profile.balance;
    if (temp < 10000) {
      return res.status(404).json('Mày không có đủ tiền để mua bài đâu e');
    }
    Profile.balance = temp - 10000;
    Profile.save().then(async () => {
      if (field === 'PHONE') {
        UserModel.findOne({ phone: data }).then(val => {
          if (!val) {
            return res.json({});
          }

          PostModel.find({ user: val.id })
            .populate('user')
            .then(posts => {
              const overview = posts.map(mor => ({
                fullname: mor.user.fullname,
                phone: `${mor.user.phone.substr(
                  0,
                  3
                )}*****${mor.user.phone.substr(7)}`,
                loanNumber: mor.loanNumber,
                date: mor.date,
                address: mor.address,
                typeOfLoan: mor.typeOfLoan,
                CMND: `********${mor.personalInfo.CMND.substr(6)}`,
                price: mor.price,
                property1: mor.property1,
                property2: mor.property2,
                careerInfo: mor.careerInfo
              }));
              return res.json(overview);
            })
            .catch(err => console.log(err));
        });
      }
      if (field === 'CMND') {
        BorrowProfileModel.findOne({ CMND: data }).then(val => {
          if (!val) {
            return res.json({});
          }
          PostModel.find({ user: val.user })
            .populate('user')
            .then(posts => {
              const overview = posts.map(mor => ({
                fullname: mor.user.fullname,
                phone: mor.user.phone,
                loanNumber: mor.loanNumber,
                date: mor.date,
                address: mor.address,
                typeOfLoan: mor.typeOfLoan,
                CMND: mor.personalInfo.CMND,
                price: mor.price,
                careerInfo: mor.careerInfo
              }));

              return res.json(overview);
            })
            .catch(err => console.log(err));
        });
      }
    });
  }
);

module.exports = router;
