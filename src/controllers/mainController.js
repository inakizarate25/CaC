const path = require("path");
const model = require("../models/Producto");
const index = async (req, res) => {
  try {
    const items = await model.findAll();
    res.render(path.resolve(__dirname, "../views/main/index.ejs"), { items });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const contact = (req, res) => {
  res.send("contact page");
};

const about = (req, res) => {
  res.send("about page");
};

const faqs = (req, res) => {
  res.send("faqs page");
};

module.exports = {
  index,
  contact,
  about,
  faqs,
};
