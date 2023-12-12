const nodemailer = require("nodemailer");
const process = require("process");

const env = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: env.MAILER_USER,
    pass: env.MAILER_PASS,
    clientId: env.AUTH0_CLIENT_ID,
    clientSecret: env.AUTH0_CLIENT_SECRET
  },
});

// Manejo de errores en el transporte
transporter.on("error", (error) => {
  console.error("Error en el transporte del correo electrónico:", error);
});

const sendEmail = async (to, subject, text, html) => {
    try {
      // Log de información sobre el correo electrónico
      console.log("Enviando correo electrónico a:", to);
      console.log("Asunto:", subject);
      console.log("Texto:", text || "No se proporcionó texto.");
  
      const info = {
        from: '"ShoesOnTrack" <shoesontrack@gmail.com>',
        to,
        subject,
        text: text || "", // Asegúrate de tener un valor predeterminado
        html: html || "", // Asegúrate de tener un valor predeterminado
      };
  
      // Envío del correo electrónico
      const result = await transporter.sendMail(info);
  
      // Log del resultado del envío de correo electrónico
      console.log("Resultado del envío de correo electrónico:", result);
  
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  module.exports = sendEmail;