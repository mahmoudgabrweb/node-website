var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("index");
});

router.get("/about-us", function(req, res, next) {
  res.render("about-us");
});

router.get("/services", function(req, res, next) {
  res.render("services");
});

router.get("/portfolio", function(req, res, next) {
  res.render("portfolio");
});

router.get("/features", function(req, res, next) {
  res.render("features");
});

router.get("/testimonials", function(req, res, next) {
  res.render("testimonials");
});

router.get("/pricing", function(req, res, next) {
  res.render("pricing");
});

router.get("/contact-us", function(req, res, next) {
  res.render("contact-us");
});

module.exports = router;
