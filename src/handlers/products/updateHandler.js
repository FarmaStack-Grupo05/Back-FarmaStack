const updateProductId = require("../../controllers/productUpdate");

const updateProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const result = await updateProductId(id);
		console.log("aqui", result);

		res.status(200).json(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = updateProduct;
