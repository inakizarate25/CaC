const path = require("path");

const shop = (req, res) => {
  res.render(path.resolve(__dirname, "../views/pags/product-list.ejs"));;
};

const cart = (req, res) => {
    res.render(path.resolve(__dirname, "../views/pags/cart.ejs"));;
};

const item = (req, res) => {
    res.render(path.resolve(__dirname, "../views/pags/product-page.ejs"));;
};


module.exports = {
    shop,
    cart,
    item,
};