const path = require("path");
const items = require("../../data.json");

const index = (req, res) => {
  res.render(path.resolve(__dirname, "../views/main/index.ejs"), { items });
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
