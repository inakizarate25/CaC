const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const { body } = require("express-validator");

const validations = [
  body("nombre")
    .not()
    .isEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Tiene que Tener 3 Caracteres"),
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
