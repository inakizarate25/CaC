const path = require("path");

const admin = (req, res) => {
  res.render(path.resolve(__dirname, "../views/admin/admin"));;
};


module.exports = {
    admin,
};