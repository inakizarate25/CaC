const shop = (req, res) => {
  res.render("shop/product-list");
};

const cart = (req, res) => {
  res.render("shop/cart");
};
const postCart = (req, res) => {
  res.send("Route for add item to cart");
};
const item = (req, res) => {
  res.render("shop/product-page");
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
