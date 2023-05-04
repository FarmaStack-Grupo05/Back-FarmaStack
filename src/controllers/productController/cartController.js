const { Products, User, Cart, Productbox } = require("../../db");


const cartCreation = async (id, products) => {
  const userId = id;
  let dbUser = await User.findOne({ where: { id: id } });
  let total_price = 0;
  var productsId = [];
  for (let i = 0; i < products.length; i++) {
    console.log(products)
    let quantity = products[i].quantity;
    let productId = products[i].id;
    console.log(products, productId)
    const dbProduct = await Products.findOne({
      where: {
        id: productId,
      },
    });
    if (quantity > dbProduct.stock)
      throw new Error(
        `Tu producto: ${dbProduct.name} exede la cantidad del stock`
      );
    let price = dbProduct.price * quantity;
    total_price = total_price + price;
    if (i === 0) var dbCart = await Cart.create({ total_price, userId });
    if (i !== 0) dbCart.total_price = total_price;
    await dbCart.save({ fields: ["total_price"] });
    const cartId = dbUser.cartId ? dbUser.cartId : dbCart.id;
    let details = await Productbox.create({
      quantity,
      price,
      productId,
      cartId,
    });
    let productdetailId = details.id;
    productsId.push(productdetailId);
    //details.push(await Productbox.create({quantity, price, productId}));

    dbCart.addProductbox(productdetailId);
  }

  dbUser.cartId = dbCart.id;
  await dbUser.save({ fields: ["cartId"] });
  let dbProducts = [];
  for (let i = 0; i < productsId.length; i++) {
    dbProducts.push(
      await Productbox.findOne({
        where: { id: productsId[i] },
        include: { model: Products },
      })
    );
  }
  const result = {
    id: dbUser.id,
    name: dbUser.name,
    nickname: dbUser.nickname,
    email: dbUser.email,
    birthday: dbUser.birthday,
    country: dbUser.country,
    number: dbUser.number,
    banned: dbUser.banned,
    active: dbUser.active,
    cartId: dbUser.cartId,
    cart_price: dbCart.total_price,
    cart: dbProducts,
  };
  return result;
};


const definitiveCart = async (req, res) => {
  try {
    //    console.log(req.params)
    //  console.log(req.body)
    const { id } = req.params;
    const { products } = req.body;
    let dbUser = await User.findOne({ where: { id: id } });
    let dbCart = await Cart.findOne({
      where: { id: dbUser.cartId, active: true },
      include: { model: Productbox, include: { model: Products } },
    });
    if (!dbCart) {
      const result = await cartCreation(id, products);
      res.status(200).send(result);
    } else {
      let dbProductdetail = await Productbox.findAll({
        where: { cartId: dbCart.id },
      });
      for (let i = 0; i < dbProductdetail.length; i++) {
        await dbCart.removeProductbox(dbProductdetail[i]);
      }
      dbCart.save();

      let total_price = 0;
      var productsId = [];
      for (let i = 0; i < products.length; i++) {
        let quantity = products[i].quantity;
        let productId = products[i].id;
        const dbProduct = await Products.findOne({
          where: {
            id: productId,
          },
        });
        if (quantity > dbProduct.stock)
          return res
            .status(400)
            .send(`Tu producto: ${dbProduct.name} exede la cantidad del stock`);
        let price = dbProduct.price * quantity;
        total_price = total_price + price;
        dbCart.total_price = total_price;
        await dbCart.save({ fields: ["total_price"] });
        const cartId = dbUser.cartId ? dbUser.cartId : dbCart.id;
        let details = await Productbox.create({
          quantity,
          price,
          productId,
          cartId,
        });
        let productdetailId = details.id;
        productsId.push(productdetailId);
        //details.push(await Productbox.create({quantity, price, productId}));

        dbCart.addProductbox(productdetailId);
      }

      dbUser.cartId = dbCart.id;
      await dbUser.save({ fields: ["cartId"] });
      let dbProducts = [];
      for (let i = 0; i < productsId.length; i++) {
        dbProducts.push(
          await Productbox.findOne({
            where: { id: productsId[i] },
            include: { model: Products },
          })
        );
      }
      const result = {
        id: dbUser.id,
        name: dbUser.name,
        nickname: dbUser.nickname,
        email: dbUser.email,
        birthday: dbUser.birthday,
        country: dbUser.country,
        number: dbUser.number,
        banned: dbUser.banned,
        active: dbUser.active,
        cartId: dbUser.cartId,
        cart_price: dbCart.total_price,
        cart: dbProducts,
      };
      res.status(200).send(result);
    }
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message);
  }
};

module.exports = { definitiveCart } 