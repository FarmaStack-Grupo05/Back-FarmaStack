const { sequelize: { models: { Cart, CartItem, Product } } } = require("../../db");

const getUserCart = async (userId) => {
  const [cart] = await Cart.findOrCreate({
    where: { user_auth0_id: userId },
    defaults: {
      total_price: 0
    },
    include: [{
      model: CartItem,
      as: 'products',
    }]
  })

  if (!cart.products) {
    cart.setDataValue('products', []);
  }

  return cart
}

module.exports = { getUserCart }