const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"Products",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			image: {
				type: DataTypes.TEXT,
				allowNull: true,
				defaultValue:
					"https://previews.123rf.com/images/bsd555/bsd5551709/bsd555170901502/87239039-mano-abierta-con-icono-lineal-de-drogas-ilustraci%C3%B3n-de-l%C3%ADnea-delgada-suministro-de-medicamentos.jpg",
			},
		},
		{
			timestamps: false,
		}
	);
};
