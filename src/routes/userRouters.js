const { Router } = require("express");

const userRouters = Router();

const getUsers = require("../handlers/userHandler/getHandler");
const postUsers = require("../handlers/userHandler/postHandler");
const getIdUser = require("../handlers/userHandler/getIdHandler");
const deleteUser = require("../handlers/userHandler/deleteHandler");
const {
	activateUser,
	editUser,
} = require("../handlers/userHandler/updateHandler");

userRouters.get("/", getUsers);
userRouters.post("/", postUsers);
userRouters.get("/:id", getIdUser);
userRouters.delete("/:id", deleteUser);
userRouters.put("/:id", activateUser);
userRouters.put("/edit/:id", editUser);

module.exports = userRouters;
