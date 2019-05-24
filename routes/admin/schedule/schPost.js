var express = require("express");
var router = express.Router();
const Post = require("../../../models/post.model");
const User = require("../../../models/user.model");
//const Authentication = require("../../../middlewares/Authentication");
var currentDiscount = 0;



router.post("/decreaseDiscount/:id", async (req, res) => {

  // console.log(req.params.id);

  await Post.findById(req.params.id).then(post => {
    const discount = post.price.discount;
    post.price.discount = discount === 0.1 ? 0 : discount - 0.1;
    post.save();
  });

  return res.redirect("/admin/schedule/post");


});

router.post("/increaseDiscount/:id", async (req, res) => {

  // console.log(req.params.id);

  await Post.findById(req.params.id).then(post => {
    const discount = post.price.discount;
    post.price.discount = discount === 1 ? 0 : discount + 0.1;
    post.save();
  });


  return res.redirect("/admin/schedule/post");  

});

router.get("/post", (req, res, next) => {
  Post.find()
    .populate("user")
    .then(post => {
      return res.render("admin/listPost", {
        posts: post,
        total: post.length
      });
    })
    .catch(err =>
      res.status(404).json({ noFindFounds: "No find posts found." })
    );
});

//@route  GET admin/manager
//@desc   Get all finds
// //@access Public
// router.get("/:id", (req, res, next) => {
//   Sell.findById(req.params.id)
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
// const STATE = require("../../../constants/state");
// //@route  DELETE admin/manager/:id
// //@desc   DELETE find by id
// //@access Public
// router.post("/delete/:id",  (req, res, next) => {
//   Sell.findByIdAndRemove(req.params.id).then(() => {
//     return res.redirect("/admin/schedule/sells/all");
//   });
// });
// router.post("/new/:id", Authentication.ADMIN, (req, res, next) => {
//   //Update
//   Sell.findOneAndUpdate(
//     { _id: req.params.id },
//     { $set: { state: STATE.NEW } },
//     { new: true }
//   ).then(() => res.redirect("/admin/schedule/sells/all"));
// });
// router.post("/storage/:id", Authentication.ADMIN, (req, res, next) => {
//   //Update
//   Sell.findOneAndUpdate(
//     { _id: req.params.id },
//     { $set: { state: STATE.STORAGE } },
//     { new: true }
//   ).then(() => res.redirect("/admin/schedule/sells/all"));
// });
// router.post("/post/:id", Authentication.ADMIN, (req, res, next) => {
//   //Update
//   Sell.findOneAndUpdate(
//     { _id: req.params.id },
//     { $set: { state: STATE.POSTED } },
//     { new: true }
//   ).then(() => res.redirect("/admin/schedule/sells/all"));
// });
module.exports = router;
