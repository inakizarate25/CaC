const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const { body } = require("express-validator");

const validations = [
  // nombre
  body("nombre")
    .not()
    .isEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Tiene que Tener 3 Caracteres"),
  // descripcion
  body("descripcion")
    .not()
    .isEmpty()
    .withMessage("La descripción es obligatoria"),
  // sku
  body("sku").not().isEmpty().withMessage("El SKU es obligatorio"),
  // stock
  body("stock")
    .not()
    .isEmpty()
    .withMessage("El Stock es obligatorio")
    .bail()
    .isNumeric()
    .withMessage("El StockTiene que ser un numero"),
  // precio
  body("precio")
    .not()
    .isEmpty()
    .withMessage("El Precio es obligatorio")
    .bail()
    .isNumeric()
    .withMessage("El Precio tiene que ser un numero"),
];

router.get("/", adminController.admin);
router.get("/create", adminController.create);
router.post(
  "/create",
  upload.single("imagen"),
  validations,
  adminController.postCreate
);
router.get("/edit/:id", adminController.edit);
router.put("/edit/:id", adminController.putEdit);
router.delete("/delete/:id", adminController.deleteItem);

module.exports = router;
