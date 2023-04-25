const { Router } = require("express");
const productsRouter = Router();

const getProducts = require("../handlers/products/getHandler");
const postProducts = require("../handlers/products/postHandler");

productsRouter.get("/", getProducts);
productsRouter.post("/", postProducts);

module.exports = productsRouter;
