const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

router.get("/", shopController.shop);
router.get("/cart", shopController.cart);
router.post("/Cart", shopController.postCart);
router.get("/item/:id", shopController.item);
router.post("/item/:id/add", shopController.add);

module.exports = router;
