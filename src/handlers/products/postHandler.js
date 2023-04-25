const { postProducts } = require("../../controllers/productsControl");

const postHandler = async (req, res) => {
	try {
		let results = await postProducts(req.body);
		res.status(200).json(results);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = postHandler;
