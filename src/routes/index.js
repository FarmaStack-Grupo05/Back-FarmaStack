const { Router } = require("express");

const router = Router();

const productsRouter = require("./productsRouters");
const userRouter = require("./userRouters")
const salesRouter = require("./salesRouter")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", productsRouter);
router.use("/user", userRouter)
router.use("/sales", salesRouter)

// router.get("/user", (req:any,res:any)=>{
//     res.send('Prueba archivo route')
// })

module.exports = router;
