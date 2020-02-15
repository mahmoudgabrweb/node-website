var express = require("express");
var router = express.Router();

const HomeController = require("../app/controllers/HomeController");
const AboutController = require("../app/controllers/AboutController");
const ServiceController = require("../app/controllers/ServiceController");
const PortfolioController = require("../app/controllers/PortfolioController");
const FeatureController = require("../app/controllers/FeatureController");
const TestimonialController = require("../app/controllers/TestimonialController");
const PricingController = require("../app/controllers/PricingController");
const ContactController = require("../app/controllers/ContactController");

router.get("/", HomeController.index);

router.get("/about-us", AboutController.index);

router.get("/services", ServiceController.index);

router.get("/portfolio", PortfolioController.index);

router.get("/features", FeatureController.index);

router.get("/testimonials", TestimonialController.index);

router.get("/pricing", PricingController.index);

router.get("/contact-us", ContactController.index);

module.exports = router;
