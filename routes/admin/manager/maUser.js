var express = require("express");
var router = express.Router();
const User = require("../../../models/user.model");
const borrowProfile = require("../../../models/borrow.profile.model");
const loanProfile = require("../../../models/loan.profile.model");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SecretKey = require('../../../configs/server.config');

const validateLoginInput = require('../../../validation/login');
// const Authentication = require("../../../configs/middleware");




router.get("/login", (req, res, next) => {
  return res.render("admin/login", { message: "" });
});


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
      errors.phone = 'Phone not found!';
      return res.render("admin/login", { message: "account or password don't correct" });
    }
    // Check password
    bcrypt.compare(password, user.password, (err, same) => {
      // errors.password = 'Password incorrect!';
      if (!same) return res.render("admin/login", { message: "account or password don't correct" });
      // User matched
      const payload = {
        id: user.id,
        typeOfAcc: user.typeOfAcc,
        fullname: user.fullname,
        role: user.role,
      };

      return res.redirect("/admin/manager/borrow");
      // Create JWT Payload
      // Sign Token
      // jwt.sign(
      //   payload,
      //   SecretKey.secretOfKey,
      //   { expiresIn: 86400 },
      //   (err__, token) => {
      //     res.json({
      //       success: true,
      //       token: `Bearer ${token}`
      //     });
      //   }
      // );
    });
  });
});

// const Authentication = require("../../../configs/middleware");
router.get("/borrow", (req, res, next) => {
  borrowProfile.find()
    .populate("user")
    .then(profile => {
      // console.log(profile.map(HEHE=>HEHE.CMND));
      return res.render("admin/listUser", {
        profiles: profile,
        total: profile.length
      });
    })
    .catch(err =>
      res.status(404).json({ noFindFounds: "No find posts found." })
    );
});
// const Authentication = require("../../../configs/middleware");
router.get("/loan", (req, res, next) => {
  loanProfile.find()
    .populate("user")
    .then(profile => {
      return res.render("admin/listUser", {
        profiles: profile,
        total: profile.length
      });
    })
    .catch(err =>
      res.status(404).json({ noFindFounds: "No find posts found." })
    );
});
//@route  GET admin/manager
//@desc   Get all finds
//@access Public
// router.get("/:id", (req, res, next) => {
//   User.findById(req.params.id)
//     .then(find => {
//       if (find.length === 0) {
//         res.status(404).json({ noFindPost: "No find post found." });
//       }
//       res.json(find);
//     })
//     .catch(err =>
//       res.status(404).json({ noFindFounds: "No find posts found." })
//     );
// });
// const ROLE = require("../../../constants/roleConstrants");
// //@route  GET admin/manager
// //@desc   Get all finds
// //@access Public
// router.post("/up/:id", (req, res, next) => {
//   //Update
//   User.findOneAndUpdate(
//     { _id: req.params.id },
//     { $set: { role: ROLE.REQUIRE_ADMIN } },
//     { new: true }
//   ).then(() => res.redirect("/admin/manager/all"));
// });
// router.post("/down/:id", Authentication.ADMIN, (req, res, next) => {
//   //Update
//   User.findOneAndUpdate(
//     { _id: req.params.id },
//     { $set: { role: ROLE.REQUIRE_MEMBER } },
//     { new: true }
//   ).then(() => res.redirect("/admin/manager/all"));
// });
// //@route  DELETE admin/manager/:id
// //@desc   DELETE find by id
// //@access Public
// router.post("/delete/:id", Authentication.ADMIN, (req, res, next) => {
//   Profile.findOneAndRemove({ user: req.params.id }).then(() => {
//     User.findOneAndRemove({ _id: req.params.id }).then(() => {
//       res.redirect("/admin/manager/all");
//     });
//   });
// });

module.exports = router;

