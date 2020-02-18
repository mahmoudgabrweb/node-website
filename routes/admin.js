var express = require("express");
var router = express.Router();

const UserController = require("../app/controllers/admin/UserController");
const SliderController = require("../app/controllers/admin/SliderController");

router.get("/", UserController.login);

router.get("/sliders", SliderController.index);
router.get("/sliders/create", SliderController.create);
router.post("/sliders", SliderController.store);
router.get("/sliders/edit", SliderController.edit);
router.put("/sliders/:id", SliderController.update);
router.delete("/sliders/:id", SliderController.destroy);

module.exports = router;
