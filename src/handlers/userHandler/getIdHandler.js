const getIdUser = require("../../controllers/userController/getIdUser")

const getIdHandler = async(req, res)=>{
    const {id} = req.params
    try {
        const result = await getIdUser(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json(error.message)
    }
}

module.exports = getIdHandler;