const { addCartItem } = require("../../controllers/cartController/cartController")

const addProductHandler = async (req, res) => {
  const { productId, userId, quantity } = req.body

  try {
    const result = await addCartItem(userId, productId, quantity ? Number.parseInt(quantity) : 1)
    res.status(200).json(result)
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message)
  }
}

module.exports = addProductHandler