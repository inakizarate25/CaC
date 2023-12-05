const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Producto = sequelize.define("producto", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  licence_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category_name: {
    type: DataTypes.STRING,
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

(async () => {
  //   await sequelize.sync({ force: true });
  await sequelize.sync({ alter: true });
})();
module.exports = Producto;
