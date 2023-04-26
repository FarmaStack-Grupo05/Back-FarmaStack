const {
	getProducts,
} = require("../../controllers/productController/productsControl");

const getHandler = async (req, res) => {
	try {
		const result = await getProducts(req);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = getHandler;
