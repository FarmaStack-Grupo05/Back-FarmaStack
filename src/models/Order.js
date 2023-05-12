const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Order",
    {
      payment_id: { // viene de paypal
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      // Mientras solo usemos auth0 y no nuestra propia bd, este relaciona el carrito con el usuario
      user_auth0_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    }
  );
};
