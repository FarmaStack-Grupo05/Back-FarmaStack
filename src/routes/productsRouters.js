const { Router } = require("express");
const productsRouter = Router();
const getProductId = require("../handlers/products/getHandlerId");
const getProducts = require("../handlers/products/getHandler");
const postProducts = require("../handlers/products/postHandler");
const deleteProduct = require("../handlers/products/deleteHandler");
const updateProduct = require("../handlers/products/updateHandler");

productsRouter.get("/", getProducts);
productsRouter.get("/:id", getProductId);
productsRouter.post("/", postProducts);
productsRouter.delete("/:id", deleteProduct);
productsRouter.put("/:id", updateProduct);


module.exports = productsRouter;
