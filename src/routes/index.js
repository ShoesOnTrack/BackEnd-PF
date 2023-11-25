const { Router } = require("express");
const productRouter = require("./productsRouter");
const categoryRouter = require("./categoryRouter");
const userRouter = require("./userRouter");

const router = Router();

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/users", userRouter);

module.exports = router;
