const express = require("express");
const router = express.Router();
const controller = require("../controllers/shopController");

router.get('/shop', controller.shop);
router.get('/shop/cart', controller.cart);
router.get('/shop/item', controller.item);

module.exports = router;