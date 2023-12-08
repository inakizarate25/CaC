const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const { body } = require("express-validator");

const validations = [
  // nombre
  body("product_name")
    .not()
    .isEmpty()
    .withMessage("El nombre es obligatorio"),
  // sku
  body("product_sku").not().isEmpty().withMessage("El SKU es obligatoria"),
  // categoria
  body("CategoryId")
    .not()
    .isEmpty()
    .withMessage("La categoria es obligatoria"),
  // licencia
  body("LicenceId")
    .not()
    .isEmpty()
    .withMessage("La licencia es obligatoria"),
];

// CRUD
// read
router.get("/", adminController.admin);
router.get("/create", adminController.create);
// create
router.post(
  "/create",
  upload.single("img_front"),
  validations,
  adminController.postCreate
);

// update
router.get("/edit/:id",  adminController.edit);
router.put("/:id",upload.single("img_front"), validations, adminController.update);
// delete
router.delete("/delete/:id", adminController.deleteItem);

module.exports = router;
