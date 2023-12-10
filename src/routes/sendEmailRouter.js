const { Router } = require("express");
const { sendEmail } = require("../handlers/POST/sendEmailHandler");

const sendEmailRouter = Router();

sendEmailRouter.post("/send", sendEmail);

module.exports = sendEmailRouter;
