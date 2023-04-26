const deleteUser = require("../../controllers/userController/deleteController")

const deleteHandler = async (req,res) => {
    const {id} = req.params
    try {
        const result = deleteUser(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json(error.message)
    }
}

module.exports = deleteHandler