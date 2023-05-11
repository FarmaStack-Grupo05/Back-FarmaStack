const app = require("./src/app");
const { conn } = require("./src/db.js");
const { Products } = require("./src/db");
const seeders = require("./seeders/seeders.json");

const fillDataBase = () => {
	seeders.products.forEach((product) => {
		// esta funcion carga la base de datos
		Products.create(product);
	});
};

conn.sync({ force: false }).then(() => {
	app.listen(3001, () => {
		fillDataBase();
		console.log("listening at 3001");
	});
});
