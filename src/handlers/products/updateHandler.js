const {
	activateProductId,
	editProductId,
} = require("../../controllers/productController/productUpdate");

const activateProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const result = await activateProductId(id);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const editProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const result = await editProductId(id, req.body);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = { activateProduct, editProduct };
