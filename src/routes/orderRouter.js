const { Router } = require("express");

const orderRouter = Router();

const getHandler = require("../handlers/order/getHandler");
const postHandler = require("../handlers/order/postHandler");

orderRouter.get("/", getHandler);
orderRouter.post("/", postHandler);

module.exports = orderRouter;