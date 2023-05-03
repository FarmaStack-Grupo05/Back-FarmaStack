const { Router } = require("express");
const productsRouter = Router();
const getProductId = require("../handlers/products/getHandlerId");
const getProducts = require("../handlers/products/getHandler");
const postProducts = require("../handlers/products/postHandler");
const deleteProduct = require("../handlers/products/deleteHandler");
const updateProduct = require("../handlers/products/updateHandler");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const fs = require("fs");

const upload = multer({ dest: "uploads/" });

productsRouter.get("/", getProducts);
productsRouter.get("/:id", getProductId);
productsRouter.post("/", postProducts);
productsRouter.delete("/:id", deleteProduct);
productsRouter.put("/:id", updateProduct);

productsRouter.post("/upload", upload.single("image"), async (req, res) => {
	try {
		const result = await cloudinary.uploader.upload(req.file.path);
		res.json(result);
		fs.unlinkSync(req.file.path);
	} catch (error) {
		console.log(error);
		res.status(500).json(error.message);
	}
});

module.exports = productsRouter;
