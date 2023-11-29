const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");

router.get('/home', controller.index);
router.get('/contact', controller.contact);
router.get('/about', controller.about);
router.get('/faqs', controller.faqs);


module.exports = router;