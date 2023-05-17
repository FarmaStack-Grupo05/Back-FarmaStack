const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"User",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			address: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			phone: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			rol: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			active: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
		},
		{
			timestamps: false,
		}
	);
};
