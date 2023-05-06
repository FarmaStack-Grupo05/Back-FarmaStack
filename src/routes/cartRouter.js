const { Router } = require("express");
const cartRouter = Router();
const { definitiveCart } = require ("../controllers/productController/cartController")

cartRouter.post("/create/:id", definitiveCart)

module.exports = cartRouter;
