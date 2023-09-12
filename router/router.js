const express = require("express");

const router = express.Router();

const userInfo = {
  userName: "admin@123",
  passWord: "password",
};
router.post("/login", (req, res) => {
  if (
    req.body.userName === userInfo.userName &&
    req.body.password === userInfo.passWord
  ) {
    req.session.aflu = req.body.userName;
    req.session.logged = true;
    res.redirect("/home");
  } else {
    res.render("login", { data: "invalid username or password" });
  }
});
router.get("/home", (req, res) => {
  if (req.session.logged) {
    res.render("home");
  } else {
    res.redirect("/");
  }
});

router.get("/", (req, res) => {
  if (req.session.logged) {
    res.redirect("/home");
  } else {
    res.render("login", { data:false });
  }
});
router.get("/logOut", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("logged out successfully");
    }
  });
  res.redirect("/");
});

module.exports = { router };
