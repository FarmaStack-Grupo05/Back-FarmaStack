const { getProductsId } = require("../../controllers/productsControl");

const getProductsById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getProductsId(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = getProductsById;
