const app = require("./src/app");
const { conn } = require("./src/db.js");
const { Products, User } = require("./src/db");
const seeders = require("./seeders/seeders.json");

const fillDataBase = () => {
	seeders.products.forEach((product) => {
		// esta funcion carga la base de datos
		Products.findOrCreate({
			where: {
				name: product.name,
			},
			defaults: {
				...product,
			},
		});
	});
};

const setUserAdmin = () => {
	User.findOrCreate({
		where: {
			email: "farmastackdrogueria@gmail.com",
		},
		defaults: {
			name: "Farmastack",
			image: "",
			address: "cll falsa 123",
			phone: "3224566789",
			rol: "admin",
			active: true,
		},
	});
};

conn.sync({ force: true }).then(() => {
	app.listen(3001, () => {
		fillDataBase();
		setUserAdmin();
		console.log("listening at 3001");
	});
});
