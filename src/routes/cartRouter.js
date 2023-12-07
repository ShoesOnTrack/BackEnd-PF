cartRouter = require("express").Router();

const {getAllCart, postCart, deleteCart} = require("../handlers/GET/cartHandler");

cartRouter.get("/:id", getAllCart);

cartRouter.post("", postCart);

cartRouter.put("", deleteCart);

module.exports = cartRouter;