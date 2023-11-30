const { Router } = require("express");
const {
  createOrder,
  captureOrder,
  cancelOrder,
} = require("../controllers/paymentControllers.js");

const paymentRouter = Router();

paymentRouter.post("/create-order", createOrder);
paymentRouter.get("/capture-order", captureOrder);
paymentRouter.get("/cancel-order", cancelOrder);

module.exports = paymentRouter;
