const deleteProductId = require("../../controllers/productDeleteControl.js");

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteProductId(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

module.exports = deleteProduct;
