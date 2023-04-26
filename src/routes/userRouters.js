const { Router } = require("express")

const userRouters = Router()

const getUsers = require("../handlers/userHandler/getHandler")
const postUsers = require("../handlers/userHandler/postHandler")
const getIdUser = require("../handlers/userHandler/getIdHandler")
const deleteUser = require("../handlers/userHandler/deleteHandler")

userRouters.get("/", getUsers)
userRouters.post("/", postUsers)
userRouters.get("/:id", getIdUser)
userRouters.delete("/:id", deleteUser)

module.exports = userRouters