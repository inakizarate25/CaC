const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Category = require("./Category");
const Licence = require("./Licences");


const Product = sequelize.define("Product", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_price: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  product_description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  product_sku: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dues: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

});
Product.belongsTo(Category);
Product.belongsTo(Licence);
module.exports = Product;
