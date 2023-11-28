const nodemailer = require("nodemailer");
const process = require("process");

const env = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  tls: { rejectUnauthorized: false },
  auth: {
    user: env.mailer_user,
    pass: env.mailer_pass,
    clientId: env.mailer_clientId,
    clientSecret: env.mailer_clientSecret,
  },
});

const sendEmail = async (to, subject, text, html) => {
  try {
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

    const result = await transporter.sendMail(info);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = sendEmail;
