const { Products } = require("../../db");

const deleteProductId = async (id) => {
	console.log("Acá llego controller");
	let result = await Products.destroy({ where: { id: id } });
	return "Successfully erased!";
};

module.exports = deleteProductId;
