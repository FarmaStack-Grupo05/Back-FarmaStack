const idController = require("../../controllers/sales/getIdController");

const getIdHandler = async (req, res) => {
  try {
    const fil = await idController(req);
    fil ? res.status(200).json(fil) : res.status(404).send("Not found id");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getIdHandler;
