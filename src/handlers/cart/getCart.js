const { getUserCart } = require("../../controllers/cartController/cartController")

const getHandler = async (req, res) => {
 try{ 
    const result = await getUserCart(req.query.userId)
    res.send(result)
 } catch (error) {
   console.log(error);
    res.status(500).send(error.message)
 }
}

module.exports = getHandler