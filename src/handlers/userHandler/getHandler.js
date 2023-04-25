const getController = require("../../controllers/userController/getController")

const getHandler = async (req, res)=>{
    try {
        const result = await getController(req)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = getHandler