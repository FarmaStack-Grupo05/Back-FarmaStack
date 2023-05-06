const { Products } = require("../../db");

const getProducts = async (req) => {
	const result = await Products.findAll();
	return result;
};

const getProductsWithFilters = async ({
	name = "",
	minPrice = "all",
	maxPrice = "all",
	sortName = "default",
	sortPrice = "default",
	category = "default",
}) => {
	let products = await getProducts();
	console.log(sortPrice);

	if (name) {
		products = products.filter((c) =>
			c.name.toLowerCase().includes(name.toLowerCase())
		);
	}
	if (category !== "default") {
		products = products.filter((c) =>
			c.category.toLowerCase().includes(category.toLowerCase())
		);
	}

	if (minPrice !== "all") {
		products = products.filter((c) => c.price >= minPrice);
	}

	if (maxPrice !== "all") {
		products = products.filter((c) => c.price <= maxPrice);
	}

	if (sortName !== "default") {
		products = products.sort((a, b) => {
			if (a.name > b.name) {
				return sortName === "asc" ? 1 : -1;
			}
			if (a.name < b.name) {
				return sortName === "asc" ? -1 : 1;
			}
			return 0;
		});
	}

	if (sortPrice !== "default") {
		products = products.sort((a, b) => {
			if (a.price > b.price) {
				return sortPrice === "asc" ? 1 : -1;
			}
			if (a.price < b.price) {
				return sortPrice === "asc" ? -1 : 1;
			}
			return 0;
		});
	}
	return products;
};
const getProductsId = async (id) => {
	let result = await Products.findByPk(id);
	return result;
};

const postProducts = async (product) => {
	const res = await Products.create(product);
	return res;
};

module.exports = {
	getProducts,
	postProducts,
	getProductsId,
	getProductsWithFilters,
};
