const postController = require("../../controllers/reviewController/postController");
const postHandler = async (req, res) => {
  try {
    const { rating, productId, userID  } = req.body;
    

    
    const resFeed = await postController(
      rating,
      productId,
      userID, 

      
    );
    
    res.status(200).json(resFeed);
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
  }
};

module.exports = postHandler;