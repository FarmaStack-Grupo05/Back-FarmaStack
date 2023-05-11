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

const { Products, User, Cart, CartItem, Order, OrderItem, Address } = sequelize.models;

//  Un usuario tiene un carro y un carro pertenece a un solo usuario
User.hasOne(Cart)
Cart.belongsTo(User)

// Un carrito tiene muchos items de carrito
Cart.hasMany(CartItem, { as: 'products' })
CartItem.belongsTo(Cart)

// Un producto tiene muchos items de carrito
Products.hasMany(CartItem)
CartItem.belongsTo(Products)

// Un usuario tiene muchas orders
User.hasMany(Order)
Order.belongsTo(User)

// Una order tiene muchos items de orden
Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)

// Una orden tiene una dirección de envío
Order.hasOne(Address)
Address.belongsTo(Order)

module.exports = {
  sequelize,
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
