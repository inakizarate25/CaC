const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");
const model = require("../models/Producto");
const Producto = require("../models/Producto");


// READ
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

// CREATE
const postCreate = async (req, res) => {
  console.log(req.body, req.file);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/create", {
      values: req.body,
      errors: errors.array(),
    });
  }

  try {
    const producto = await model.create(req.body);
    console.log(producto);

    if (req.file) {
      sharp(req.file.buffer)
        .resize(300)
        .toFile(
          path.resolve(
            __dirname +
            `../../../public/multimedia/uploads/producto_${producto.product_id}.webp`
          )
        );
    }

    res.redirect("/admin");
  } catch (error) {
    console.log(error);
    res.send(error);
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
    if (req.file) {
      sharp(req.file.buffer)
        .resize(300)
        .toFile(
          path.resolve(
            __dirname + 
            `../../../public/multimedia/uploads/producto_${req.params.id}.webp`
          )
        );
    }
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
  if (destroyed == 1) {
    fs.unlink(
      path.resolve(
        __dirname +
        `../../../public/multimedia/uploads/producto_${req.params.id}.webp`
      ),
      (error) => {
        if (error) {
          console.log(error);
        }
      }
    );
  }
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
