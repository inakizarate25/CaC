const { validationResult } = require("express-validator");
const model = require("../models/Category");


// READ
const admin = async (req, res) => {
  try {
    const categorias = await model.findAll();
    res.render("admin/categorias/admin", { categorias });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const create = (req, res) => {
  res.render("admin/categorias/create");
};

// CREATE
const postCreate = async (req, res) => {
  console.log(req.body, req.file);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/categorias/create", {
      values: req.body,
      errors: errors.array(),
    });
  }

  try {
    const categorias = await model.create(req.body);
    console.log(categorias);

    res.redirect("/admin/categorias");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
const edit = async (req, res) => {
  
  try {
    const categoria = await model.findByPk(req.params.id);
    console.log(categoria);
    if (categoria) {
      res.render("admin/categorias/edit", { values : categoria });
    } else {
      res.status(404).send("No existe la categoria");
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
    return res.render("admin/categorias/edit", {
      values: {...req.params, ...req.body},
      errors: errors.array(),
    });
  }
  try {
 const count = await model.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    console.log(count);

    res.redirect("/admin/categorias");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const deletecategoria = async (req, res) => {

 try {
  const destroyed = await model.destroy({
    where: {
      id: req.params.id,
    },
  });
 
res.redirect("/admin/categorias");
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
  deletecategoria,
};
