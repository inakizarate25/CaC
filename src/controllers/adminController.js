const path = require("path");

const admin = (req, res) => {
  res.render(path.resolve(__dirname, "../views/pags/admin.ejs"));;
};


module.exports = {
    admin,
};