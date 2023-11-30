const sharp = require("sharp");
const path = require("path");
const { validationResult } = require("express-validator");
const items = require("../../data.json");

admin = (req, res) => {
  res.render("admin/admin", { items });
};
const create = (req, res) => {
  res.render("admin/create");
};

const postCreate = (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("admin/create", {
      values: req.body,
      errors: errors.array(),
    });
  }
  if (req.file) {
    console.log(req.body, req.file, req.file.buffer);
    sharp(req.file.buffer)
      .resize(300)
      .toFile(
        path.resolve(
          __dirname,
          "../../public/multimedia/uploads/",
          req.file.originalname
        )
      );
  }
  res.send("Ruta para crear item");
};
const edit = (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.render("admin/edit");
};
const putEdit = (req, res) => {
  res.send("Route for edit item");
};
const deleteItem = (req, res) => {
  res.send("Route for delete item");
};

module.exports = {
  admin,
  create,
  postCreate,
  edit,
  putEdit,
  deleteItem,
};
