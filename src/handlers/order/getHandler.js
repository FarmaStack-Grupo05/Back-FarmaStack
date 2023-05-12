const { getOrderById, getUserOrders, getOrderByPaymentId } = require("../../controllers/orderController/orderController");

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

    res.status(400).send("Missing params");
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
}

module.exports = getHandler;