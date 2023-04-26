const { Products } = require("../../db");
const { Op } = require("sequelize");

const getProducts = async (req) => {
	if (req.query === "name") {
		let result = await Products.findAll({
			where: {
				name: { [Op.iLike]: `%${req.query}%` },
			},
		});
		return result;
	}

	const result = await Products.findAll();
	return result;
};

const getProductsId = async (id) => {
	let result = await Products.findByPk(id);
	return result;
};

const postProducts = async (product) => {
	const res = await Products.create(product);
	return res;
};

module.exports = { getProducts, postProducts, getProductsId };
