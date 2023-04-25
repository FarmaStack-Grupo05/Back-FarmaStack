const { getProducts } = require("../../controllers/productsControl");

const getHandler = async (req, res) => {
	try {
		const result = await getProducts();
		res.status(200).json(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = getHandler;
