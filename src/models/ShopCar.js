const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ShopCar",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      total: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
