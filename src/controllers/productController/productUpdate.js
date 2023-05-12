const { Products } = require("../../db");

const activateProductId = async (id) => {
	const product = await Products.findByPk(id);
	const result = await product.update(
		{ active: !product.active },
		{
			where: {
				id: id,
			},
		}
	);
	return result;
};

const editProductId = async (id, data) => {
	const { name, price, description, image, category, stock } = data;
	const product = await Products.findByPk(id);
	const result = await product.update(
		{
			name,
			price,
			description,
			image,
			category,
			stock,
		},
		{
			where: {
				id: id,
			},
		}
	);
	return result;
};

module.exports = { activateProductId, editProductId };
