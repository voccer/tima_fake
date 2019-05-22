const express = require('express');

const router = express.Router();
const UserModel = require('../../models/user.model');
const PostModel = require('../../models/post.model');

router.get('/count/users', async (req, res) => {
  const loanUser = await UserModel.countDocuments({ typeOfAcc: 'loan' });
  const borrowUser = await UserModel.countDocuments({ typeOfAcc: 'borrow' });

  return res.json({ loan: loanUser, borrow: borrowUser });
});
router.get('/count/money', async (req, res) => {
  const total = await PostModel.aggregate([
    {
      $group: {
        _id: null,
        total: {
          $sum: '$loanNumber',
        },
      },
    },
  ]);

  return res.json({ total });
});

module.exports = router;
