const model = require("../models/Producto");
const modelCategory = require("../models/Category");





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
    const item = await  model.findByPk(req.params.id,{
      include: "Category",
    });
    const items = await model.findAll();
    console.log(item);
    if(item){
      const categoria = await modelCategory.findByPk(item.CategoryId);
      res.render("shop/product-page", {item, categoria, items});
    }else{
      res.status(404).send("No existe el producto");
    }
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
