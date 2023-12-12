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
    console.log("Texto:", text);

    const info = {
      from: '"ShoesOnTrack" <shoesontrack@gmail.com>',
      to,
      subject,
      text,
      html: `
        <html>
        <head>
            <style>
                .body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
        
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                }
        
                h1 {
                    color: #007bff;
                }
        
                p {
                    font-size: 16px;
                    line-height: 1.5;
                    color: #333;
                }
        
                ul {
                    list-style-type: none;
                    margin-left: 20px;
                }
        
                li {
                    margin-bottom: 5px;
                }
        
                strong {
                    font-weight: bold;
                }
        
                .contact {
                    margin-top: 20px;
                    font-size: 14px;
                }
            </style>
        </head>
        <body>
            ${html}
        </body>
        </html>
      `,
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
