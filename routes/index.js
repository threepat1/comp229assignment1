var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "My Portfolio" });
});

router.get("/aboutme", function (req, res, next) {
  res.render("aboutme");
});

router.get("/contact", function (req, res, next) {
  res.render("contact");
});

router.get("/project", function (req, res, next) {
  res.render("project");
});

router.get("/services", function (req, res, next) {
  res.render("services");
});

router.post("/contact", function (req, res, next) {
  //console.log(request.body);
  res.render("index", { title: "My Portfolio" });
});

module.exports = router;