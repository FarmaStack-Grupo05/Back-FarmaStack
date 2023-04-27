const {Sales} = require("../../db")

const getIdController = async(req) => {
const {id} = req.params
const filtered = await Sales.findByPk(id)
 return filtered
}

module.exports = getIdController