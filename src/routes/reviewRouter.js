const { Router } = require("express");
const reviewRouter = Router();

const getHandler = require("../handlers/review/getHandler");
const postHandler = require("../handlers/review/postHandler");

//Protegida
reviewRouter.get("/:id", getHandler);
reviewRouter.post("/", postHandler)

module.exports = reviewRouter;