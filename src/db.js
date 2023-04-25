const { Sequelize } = require("sequelize");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME /* usar cuando se haga deploy */,
} = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    /* usar cuando se haga deploy */
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Products, User, ShopCar, Sales } = sequelize.models;

// Aca vendrian las realciones
//    User
User.hasMany(Sales, { foreignKey: "user_id" });
User.hasMany(ShopCar, { foreignKey: "user_id" });
//     Sales
Sales.belongsTo(User, { foreignKey: "user_id" });
Sales.belongsToMany(Products, {
  through: "sale_product",
  foreignKey: "sale_id",
  otherKey: "product_id",
});
//   ShopCar
ShopCar.belongsTo(User, { foreignKey: "user_id" });
ShopCar.belongsToMany(Products, {
  through: "shopcar_product",
  foreignKey: "shopcar_id",
  otherKey: "product_id",
});
// Products
Products.belongsToMany(Sales, {
  through: "sale_product",
  foreignKey: "product_id",
  otherKey: "sale_id",
});
Products.belongsToMany(ShopCar, {
  through: "shopcar_product",
  foreignKey: "product_id",
  otherKey: "shopcar_id",
});

module.exports = {
  sequelize,
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
