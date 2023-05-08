const { Router } = require("express")

const cartRouter = Router()

const getCart = require("../handlers/cart/getCart")

cartRouter.get("/", getCart)

module.exports = cartRouter