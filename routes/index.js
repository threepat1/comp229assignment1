// index.js
// Threepat Kiatkamol
// 301207863 
// 29 September 2022

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "My Portfolio" }
  )
  ;
});

router.get("/aboutme", function (req, res, next) {
  res.render("aboutme", { title: "About Me" });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

router.get("/project", function (req, res, next) {
  res.render("project", { title: "My Project" });
});

router.get("/services", function (req, res, next) {
  res.render("services", { title: "My services" });
});

router.post("/contact", function (req, res, next) {
  //console.log(request.body);
  res.render("index", { title: "My Portfolio" });
});

module.exports = router;