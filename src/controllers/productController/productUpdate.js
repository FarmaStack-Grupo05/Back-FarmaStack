const { Products } = require("../../db");

const updateProductId = async (id) => {
  const product = await Products.findByPk(id);
  const result = await product.update(
    { active: !product.active },
    {
      where: {
        id: id,
      },
    }
  );
  return result;
};

module.exports = updateProductId;
