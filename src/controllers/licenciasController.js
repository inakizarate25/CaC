const { validationResult } = require("express-validator");
const model = require("../models/Licences")


// READ
const admin = async (req, res) => {
  try {
    const licencias = await model.findAll();
    res.render("admin/licencias/admin", { licencias });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const create = (req, res) => {
  res.render("admin/licencias/create");
};

// CREATE
const postCreate = async (req, res) => {
  console.log(req.body);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/licencias/create", {
      values: req.body,
      errors: errors.array(),
    });
  }

  try {
    const licencia = await model.create(req.body);
    console.log(licencia);
    
    res.redirect("/admin/licencias");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
const edit = async (req, res) => {
  
  try {
    const licencia = await model.findByPk(req.params.id);
    console.log(licencia);
    if (licencia) {
      res.render("admin/licencias/edit", { values : licencia });
    } else {
      res.status(404).send("No existe la licencia");
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
    return res.render("admin/licencias/edit", {
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
   
    res.redirect("/admin/licencias");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const deletelicencia = async (req, res) => {

 try {
  const destroyed = await model.destroy({
    where: {
      id: req.params.id,
    },
  });
 
res.redirect("/admin/licencias");
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
  deletelicencia,
};
