const { Router } = require("express")

const cartRouter = Router()

const getCart = require("../handlers/cart/getCart")
const addProductHandler = require("../handlers/cart/postCartItem")
const deleteProduct = require("../handlers/cart/deleteCartItem")

cartRouter.get("/", getCart)
cartRouter.post("/add", addProductHandler)
cartRouter.delete("/remove", deleteProduct)

module.exports = cartRouter