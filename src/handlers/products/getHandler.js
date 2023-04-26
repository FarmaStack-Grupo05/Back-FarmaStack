const { getProducts } = require("../../controllers/productsControl");
const { Products } = require("../../db");
const seeders = require("./seeders/seeders.json");

const fillDataBase = () => {
	seeders.products.forEach((product) => {
		Products.create(product);
	});
};

const getHandler = async (req, res) => {
	try {
		const result = await getProducts(req);
		result.length === 0 && fillDataBase();
		res.status(200).json(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = getHandler;
