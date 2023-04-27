const { Router } = require("express")
const salesRouter = Router()

const getSales = require("../handlers/sales/getHandler")
const getIdSales = require("../handlers/sales/getIdHandler")
/*const postSales = require("")
const putSales = require("")
const deleteSales = require("")*/

salesRouter.get("/", getSales)
salesRouter.get("/:id",getIdSales)
/*salesRouter.post("/",postSales)
salesRouter.put("/",putSales)
salesRouter.delete("/",deleteSales)*/


module.exports = salesRouter