const { getOrderById, getUserOrders, getOrderByPaymentId, getAllOrders } = require("../../controllers/orderController/orderController");

const getHandler = async (req, res) => {
  try {
    const { orderId, userId, paymentId } = req.query;

    if (userId) {
      const orders = await getUserOrders(userId);
      return res.status(200).send(orders);
    }

    if (orderId) {
      const order = await getOrderById(orderId);
      return res.status(200).send(order);
    }

    if (paymentId) {
      const order = await getOrderByPaymentId(paymentId);
      return res.status(200).send(order);
    }

    const allOrders = await getAllOrders();
    res.status(200).send(allOrders)
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
}

module.exports = getHandler;