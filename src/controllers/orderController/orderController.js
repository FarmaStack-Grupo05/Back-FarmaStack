const { sequelize: { models: { Order, OrderItem, Cart, CartItem, Products } } } = require("../../db");

const getOrderById = async (orderId) => {
  if (!orderId) throw new Error('No id provided')

  const order = await Order.findByPk(orderId, {
    include: [{
      model: OrderItem,
      include: [{
        model: Products,
      }]
    }]
  })

  return order
}

const getOrderByPaymentId = async (paymentId) => {
  if (!paymentId) throw new Error('No id provided')

  const order = await Order.findOne({
    where: {
      payment_id: paymentId
    },
    include: [{
      model: OrderItem,
      include: [{
        model: Products,
      }]
    }]
  })

  return order
}

const getUserOrders = async (userId) => {
  if (!userId) throw new Error('No id provided')

  const orders = await Order.findAll({
    where: {
      UserId: userId
    },
    include: [{
      model: OrderItem,
      include: [{
        model: Products,
      }]
    }]
  })

  return orders
}

const createOrder = async (userId, auth0Id, paymentId) => {
  if (!userId || !auth0Id) throw new Error('No id provided')

  const cart = await Cart.findOne({
    where: {
      user_auth0_id: auth0Id,
    },
    include: [{
      model: CartItem,
      as: 'products'
    }]
  })

  if (!cart) throw new Error('Cart not found')

  // const address = await Address.findByPk(addressId)

  // if (!address) throw new Error('Address not found')

  const order = await Order.create({
    payment_id: paymentId,
    total_price: cart.total_price,
    UserId: userId,
    user_auth0_id: auth0Id,
  })

  const orderItems = cart.products.map(product => ({
    ProductId: product.ProductId,
    quantity: product.quantity,
    price: product.price,
    subtotal: product.subtotal
  }))

  const orderItemsInstances = await OrderItem.bulkCreate(orderItems)
  
  // Adds relation between order and order items
  await order.setOrderItems(orderItemsInstances)

  await cart.destroy()

  return order
}

module.exports = { getOrderById, getUserOrders, getOrderByPaymentId, createOrder };