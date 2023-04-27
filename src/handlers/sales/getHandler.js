const getController = require("../../controllers/sales/getController")

const getHandler = async(req,res) => {
try {
const getSales = await getController(req)
res.status(200).json(getSales)
} catch (error) {
    res.status(400).json({error: error.message})
}
}

module.exports = getHandler