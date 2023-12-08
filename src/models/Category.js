const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Category = sequelize.define("Category", {
 category_name: {
   type: DataTypes.STRING,
   allowNull: false,
 },
 category_description: {
   type: DataTypes.STRING,
   allowNull: true,
 }

});


module.exports = Category;
