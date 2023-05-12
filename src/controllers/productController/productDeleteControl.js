const { Products } = require("../../db");

const deleteProductId = async (id) => {
	let result = await Products.destroy({ where: { id: id } });
	return "Successfully erased!";
};

module.exports = deleteProductId;
