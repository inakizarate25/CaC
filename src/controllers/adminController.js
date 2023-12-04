const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");
const model = require("../models/Producto");
const admin = async (req, res) => {
  try {
    const items = await model.findAll();
    res.render("admin/admin", { items });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const create = (req, res) => {
  res.render("admin/create");
};

const postCreate = async (req, res) => {
  console.log(req.body);
  // const originalname = req.file.originalname;
  const errors = validationResult(req);
  // const buffer = req.file.buffer;
  if (!errors.isEmpty()) {
    return res.render("admin/create", {
      values: req.body,
      errors: errors.array(),
    });
  }

  // CREATE
  try {
    const producto = await model.create(req.body);
    console.log(producto);

    // if (req.file) {
    //   console.log(req.body, req.file, buffer);
    //   sharp(buffer)
    //     .resize(300)
    //     .toFile(
    //       path.resolve(
    //         __dirname,
    //         `../../public/multimedia/uploads/productos/producto_${producto.id}.webp`
    //       )
    //     );
    // }
    res.redirect("/admin");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const edit = async (req, res) => {
  
  try {
    const item = await model.findByPk(req.params.id);
    console.log(item);
    if (item) {
      res.render("admin/edit", { values : item });
    } else {
      res.status(404).send("No existe el producto");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const update = async (req, res) => {
  console.log(req.params, req.body)

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/edit", {
      values: req.body,
      errors: errors.array(),
    });
  }
  try {
 const count = await model.update(req.body, {
      where: {
        product_id: req.params.id,
      },
    })
    console.log(count);
    res.redirect("/admin");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const deleteItem = async (req, res) => {

 try {
  const destroyed = await model.destroy({
    where: {
      product_id: req.params.id,
    },
  });
res.redirect("/admin");
 } catch (error) {
  console.log(error);
  res.status(500).send(error);
 }
};

module.exports = {
  admin,
  create,
  postCreate,
  edit,
  update,
  deleteItem,
};
