const { Review, Products, User } = require("../../db");


const postController = async (
  rating,
  productId,
  userID,
) => {
  console.log( `User: ${userID} || Product : ${productId}`)


const product = await Products.findOne({
    where: {
        id: productId,
    }
})

  console.log(`cosa de productos ${product}`)


  const newReview = await Review.create({
    rating,
    productId: product.id
  });
  await newReview.setUser(userID)

  return  newReview
};

module.exports = postController;