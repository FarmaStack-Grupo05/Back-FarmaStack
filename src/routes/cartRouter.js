const { Router } = require("express")

const cartRouter = Router()

const getCart = require("../handlers/cart/getCart")
const addProductHandler = require("../handlers/cart/postCartItem")
const deleteProduct = require("../handlers/cart/deleteCartItem")
const putHandler = require("../handlers/cart/putCartItem")

cartRouter.get("/", getCart)
cartRouter.post("/add", addProductHandler)
cartRouter.delete("/remove", deleteProduct)
cartRouter.put("/update", putHandler)

module.exports = cartRouter