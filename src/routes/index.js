const { Router } = require("express");
const productRouter = require("./productsRouter");
const categoryRouter = require("./categoryRouter");
const userRouter = require("./userRouter");
const paymentRouter = require("./paymentRouter");
const favsRouter = require("./favoritesRoute");
const cartRouter = require("./cartRouter");

const router = Router();

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/payment", paymentRouter);
router.use("/users", userRouter);
router.use("/favs", favsRouter);
router.use("/cart", cartRouter);

module.exports = router;
