exports.index = (req, res) => {
  res.render("admin/sliders/index");
};

exports.create = (req, res) => {
  res.render("admin/sliders/create");
};

exports.store = (req, res) => {
  let data = [{ title: req.body.title, description: req.body.description }];
  let data_parsed = JSON.stringify(data);
  res.status(200).send(data_parsed);
};

exports.edit = (req, res) => {
  res.render("admin/sliders/edit");
};

exports.update = (req, res) => {};

exports.destroy = (req, res) => {};
