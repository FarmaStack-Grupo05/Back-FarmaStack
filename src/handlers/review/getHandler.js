const getController = require("../../controllers/reviewController/getController");

const getHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const inf = await getController(id);
    res.status(200).json(inf);
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
  }
};
module.exports = getHandler;