const {Review} = require("../../db")

const getController = async (id) => {
  const db = await Review.findByPk(id);
  console.log(db);
  return db;
};

module.exports = getController;