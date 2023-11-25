const { Router } = require("express");
const { createUser } = require("../handlers/POST/createUser");
const { getAllUsers } = require("../controllers/GET/getAllUsersController");
const { getUserById } = require("../controllers/GET/getUserByIdController");
const { updateUser } = require("../controllers/PUT/updateUserController");
const { deleteUser } = require("../controllers/DELETE/deleteUserController");
// GET Handlers

// POST Handlers

// PUT Handlers

const userRouter = Router();

//Rutas
userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/edit/:id", updateUser);
userRouter.delete("/delete/:id", deleteUser);

module.exports = userRouter;
