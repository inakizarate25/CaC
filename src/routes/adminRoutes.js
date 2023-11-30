const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.admin);
router.get("/create", adminController.create);
router.post("/create", adminController.postCreate);
router.get("/edit/:id", adminController.edit);
router.put("/edit/:id", adminController.putEdit);
router.delete("/delete/:id", adminController.deleteItem);

module.exports = router;
