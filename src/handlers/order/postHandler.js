const { createOrder } = require("../../controllers/orderController/orderController");

const postHandler = async (req, res) => {
  try {
    const { paymentId, userAuth0Id, userId } = req.body;

    // const createdAddress = await createAddress(address)
    // const addressId = createdAddress.id

    const order = await createOrder(userId, userAuth0Id, paymentId)

    res.status(201).json(order)
  } catch (error) {
    console.log(error)
    res.status(400).json(error.message)
  }
}

module.exports = postHandler;