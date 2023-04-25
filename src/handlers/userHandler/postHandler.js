const  postControl  = require("../../controllers/userController/postController")

const postHandler = async(req, res)=>{
    try {
        const results = await postControl(req.body)
        res.status(201).json(results)
    } catch (error) {
        console.log(error)
        res.status(400).json(error.message)
    }
}

module.exports = postHandler