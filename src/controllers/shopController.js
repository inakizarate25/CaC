const model = require("../models/Producto");
const shop = async (req, res) => {
  try {
    const items = await model.findAll();
    res.render("shop/product-list", { items });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const cart = (req, res) => {
  res.render("shop/cart");
};
const postCart = (req, res) => {
  res.send("Route for add item to cart");
};
const item = async (req, res) => {
  try {
    const items = model.findByPk(req.params.id);
    const items2 = await model.findAll();
    res.render("shop/product-page", { items2 });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const add = (req, res) => {
  res.send("Route for add item");
};

module.exports = {
  shop,
  cart,
  item,
  add,
  postCart,
};
