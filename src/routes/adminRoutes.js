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
  // licence
  body("licence_name").not().isEmpty().withMessage("La Licencia es obligatorio"),
];

// CRUD
// read
router.get("/", adminController.admin);
router.get("/create", adminController.create);
// create
router.post(
  "/create",
  upload.single("imagen"),
  validations,
  adminController.postCreate
);

// update
router.get("/edit/:id",  adminController.edit);
router.put("/:id",validations, adminController.update);
// delete
router.delete("/delete/:id", adminController.deleteItem);

module.exports = router;
