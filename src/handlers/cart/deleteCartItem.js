const { removeCartItem } = require("../../controllers/cartController/cartController")

const deleteCartItem = async (req, res) => {
  const { productId, userId } = req.query
  try {
    const result = await removeCartItem(userId, productId)
    res.send(result)
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message)
  }
}

module.exports = deleteCartItem