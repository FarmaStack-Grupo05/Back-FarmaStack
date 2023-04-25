const { Products } = require("../db");

const getProducts = async () => {
	const res = await Products.findAll();
	return res;
};

const postProducts = async (product) => {
	const res = await Products.create(product);
	return res;
};

module.exports = { getProducts, postProducts };
