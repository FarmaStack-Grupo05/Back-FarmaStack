const { Router } = require("express");

const router = Router();

const productsRouter = require("./productsRouters");
const userRouter = require("./userRouters");
const cartRouter = require("./cartRouter");
const reviewRouter = require("./reviewRouter")
const orderRouter = require("./orderRouter");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", productsRouter);
router.use("/cart", cartRouter)
router.use("/user", userRouter)
router.use("/review", reviewRouter)
router.use("/order", orderRouter)


// router.get("/user", (req:any,res:any)=>{
//     res.send('Prueba archivo route')
// })

module.exports = router;
