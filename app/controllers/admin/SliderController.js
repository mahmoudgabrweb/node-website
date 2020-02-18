const Slider = require("../../models/Slider");

exports.index = (req, res) => {
  Slider.find()
    .then(sliders => {
      res.render("admin/sliders/index", {
        sliders: sliders,
        message: req.flash("success")
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving sliders."
      });
    });
};

exports.create = (req, res) => {
  res.render("admin/sliders/create");
};

exports.store = (req, res) => {
  const slider = new Slider({
    title: req.body.title,
    description: req.body.description
  });
  slider
    .save()
    .then(data => {
      req.flash("success", "Slider added successfully.");
      res.redirect("/admin/sliders");
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the slider."
      });
    });
};

exports.edit = (req, res) => {
  res.render("admin/sliders/edit");
};

exports.update = (req, res) => {};

exports.destroy = (req, res) => {};
