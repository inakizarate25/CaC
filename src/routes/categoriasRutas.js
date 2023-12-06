const express = require("express");
const router = express.Router();
const categoriasController = require("../controllers/categoriasController");

const { body } = require("express-validator");

const validations = [
 body("nombre")
   .not()
   .isEmpty()
   .withMessage("La categoria es obligatoria"),
];

// CRUD
// read
router.get("/", categoriasController.admin);
router.get("/create", categoriasController.create);
// create
router.post(
  "/create",
  validations,
  categoriasController.postCreate
);

// update
router.get("/edit/:id",  categoriasController.edit);
router.put("/:id", validations, categoriasController.update);
// delete
router.delete("/delete/:id", categoriasController.deletecategoria);

module.exports = router;
