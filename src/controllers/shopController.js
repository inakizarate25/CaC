const path = require("path");

const shop = (req, res) => {
  res.render(path.resolve(__dirname, "../views/product-list.ejs"));;
};

const cart = (req, res) => {
    res.render(path.resolve(__dirname, "../views/cart.ejs"));;
};

const item = (req, res) => {
    res.render(path.resolve(__dirname, "../views/product-page.ejs"));;
};


module.exports = {
    shop,
    cart,
    item,
};