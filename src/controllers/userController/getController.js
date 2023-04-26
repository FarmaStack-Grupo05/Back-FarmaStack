const { User } = require("../../db");
const { Op } = require("sequelize");

const getController = async (req) => {
  if (req.query === "name") {
    const result = await User.findAll({
      where: {
        name: { [Op.iLike]: `%${req.query}%` },
      },
    });
    return result;
  }
  const result = await User.findAll();
  return result;
};

module.exports = getController;
