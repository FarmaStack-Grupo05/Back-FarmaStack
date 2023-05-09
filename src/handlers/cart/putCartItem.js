const { modifyCartItem } = require("../../controllers/cartController/cartController")

const putHandler = async (req, res) => {
  const { userId, productId, quantity } = req.body

  const missingFields = []
  if (!userId) missingFields.push("userId")
  if (!productId) missingFields.push("productId")
  if (!quantity) missingFields.push("quantity")

  if (missingFields.length > 0) {
    res.status(400).send({
      error: `Missing ${missingFields.join(", ")}`
    })
    return
  }

  try {
    const result = await modifyCartItem(userId, productId, Number.parseInt(quantity))
    res.send(result)
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message)
  }
}

module.exports = putHandler