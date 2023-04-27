const {Sales} = require("../../db")

const getController = async (req) => {
const {name} = req.query
const findSale = name ? {name} : {}

return await Sales.findAll({
    where:findSale
})
}

module.exports = getController 