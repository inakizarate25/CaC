const express = require("express");
const router = express.Router();
const licenciasController = require("../controllers/licenciasController");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const { body } = require("express-validator");

const validations = [
 body("licence_name")
   .not()
   .isEmpty()
   .withMessage("La licencia es obligatoria"),
];

// CRUD
// read
router.get("/", licenciasController.admin);
router.get("/create", licenciasController.create);
// create
router.post(
  "/create",
  validations,
  licenciasController.postCreate
);

// update
router.get("/edit/:id",  licenciasController.edit);
router.put("/:id",
 validations, licenciasController.update);
// delete
router.delete("/delete/:id", licenciasController.deletelicencia);

module.exports = router;
