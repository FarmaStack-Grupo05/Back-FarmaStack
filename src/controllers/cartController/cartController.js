const { sequelize: { models: { Cart, CartItem, Products } } } = require("../../db");

const getUserCart = async (userId) => {
  let [cart] = await Cart.findOrCreate({
    where: { user_auth0_id: userId },
    defaults: {
      total_price: 0
    },
    include: [{
      model: CartItem,
      as: 'products',
      // Adds the product data to the cart item
      include: [Products]
    }]
  })

  if (!cart.products) {
    cart.setDataValue('products', []);
  } else {
    // Actualizar el precio total del carrito cada vez que se consulta
    cart.total_price = 0
  
    cart.products.forEach((item) => {
      cart.total_price += item.subtotal
    })
  
    cart = await cart.save()
  }

  return cart
}

const addCartItem = async (userId, productId, quantity = 1) => {
  const cart = await Cart.findOne({
    where: { user_auth0_id: userId }
  })
  const product = await Products.findOne({
    where: { id: productId }
  })

  if (!product) {
    throw new Error("Producto no encontrado")
  }

  const [item, created] = await CartItem.findOrCreate({
    where: {
      CartId: cart.id,
      ProductId: productId,
    },
    defaults: {
      quantity: 0,
      subtotal: 0,
      price: product.price, // El precio del producto en el momento de agregarlo al carrito
    },
  })

  if (created) {
    item.quantity = quantity
  } else {
    item.quantity += quantity
  }

  // Actualiza el subtotal del item
  item.subtotal = item.quantity * item.price

  // Actualizar el precio total del carrito
  cart.total_price += item.price * quantity

  await item.save()
  await cart.save()

  const updatedCart = await getUserCart(userId)

  return updatedCart
}

const removeCartItem = async (userId, productId) => {
  let cart = await Cart.findOne({
    where: { user_auth0_id: userId }
  })

  const rowsAffected = await CartItem.destroy({
    where: {
      ProductId: productId,
      CartId: cart.id
    }
  })

  if (rowsAffected === 0) {
    throw new Error("Producto no encontrado en el carrito")
  }

  const updatedCart = await getUserCart(userId)

  return updatedCart
}

const modifyCartItem = async (userId, productId, newQuantity) => {
  const cart = await Cart.findOne({
    where: { user_auth0_id: userId }
  })
  const product = await CartItem.findOne({
    where: {
      ProductId: productId,
      CartId: cart.id
    }
  })
  
  if (!product) {
    throw new Error("Producto no encontrado")
  }
  
  await product.update({
    quantity: newQuantity,
    subtotal: newQuantity * product.price
  })

  const updatedCart = await getUserCart(userId)

  return updatedCart
}

module.exports = { getUserCart, addCartItem, removeCartItem, modifyCartItem }