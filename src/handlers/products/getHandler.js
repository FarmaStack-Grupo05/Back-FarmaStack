const { getProducts } = require("../../controllers/productsControl");

const getHandler = async (req, res) => {
	let results = await getProducts(req.body);
	try {
		res.status(200).json(req.body);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = getHandler;
