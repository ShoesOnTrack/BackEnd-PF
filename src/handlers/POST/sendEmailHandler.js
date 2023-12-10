const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Configuración del transporte de nodemailer
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "shoesontrack@gmail.com",
      pass: "tdel wlzu hchj dyur",
    },
  });

  // Construcción del contenido HTML del correo electrónico utilizando la información del formulario
  const emailContent = `
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>Mensaje:</strong> ${message}</p>
  `;

  const emailSubject = `Nueva reseña de ${name}`;

  // Configuración del correo electrónico que se enviará
  const mailOptions = {
    from: "shoesontrack@gmail.com",
    to: "shoesontrack@gmail.com",
    subject: emailSubject,
    html: emailContent,
  };

  try {
    // Envío del correo electrónico
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo electrónico enviado:", info.response);

    res.status(200).json({ success: true, message: "Correo electrónico enviado exitosamente." });
  } catch (error) {
    console.error("Error en el envío del correo electrónico:", error);
    res.status(500).json({ success: false, error: "Hubo un problema al enviar el correo electrónico." });
  }
};
