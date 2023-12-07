const axios = require("axios");
const sendEmail = require("../config/mailer.js");
// const { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET }= process.env;

const PAYPAL_API = "https://api-m.sandbox.paypal.com";
const PAYPAL_API_CLIENT = "AaHhTpPS12nRr6xYKtC1ON5uepgecESSzzVPZ-GF91aq-hIqPC-_Qs6csNxmCxl4-pI5SmPMZeB-aHV6"
const PAYPAL_API_SECRET = "EAbiJOvD1WyHZ3kGeDdP3gKReovmZ_urdMRuMtDS2jF3dw1UYPmrTXkQIIyfGNzjd9dTzdvCsS0Agh8f"


const createOrder = async (req, res) => {
  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "300.00",
          },
          description: "shoes sales application",
        },
      ],
      application_context: {
        payment_method: {
          payer_selected: "PAYPAL",
          payee_preferred: "IMMEDIATE_PAYMENT_REQUIRED",
        },
        brand_name: "shoesOnTrack.com",
        landing_page: "LOGIN",
        user_action: "PAY_NOW",
        shipping_preference: "NO_SHIPPING",
        return_url: "http://localhost:3001/payment/capture-order",
        cancel_url: "http://localhost:3001/payment/cancel-order",
      },
    };

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const {
      data: { access_token },
    } = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );
    console.log(access_token);

    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      order,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Something goes wrong");
  }
};

const captureOrder = async (req, res) => {
  const { token } = req.query;

  try {
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );
    console.log(response.data);
    // Verifico si fue exitosa la captura
    if (response.data.status === "COMPLETED") {
      //Enviaremos la notificacion del pago
      const emailResult = await sendEmail(
        "sergiovelezhernandez11@gmail.com", // Cambia por la dirección de correo a la que deseas enviar la notificación
        "Notificación de Pago",
        "Has realizado con éxito la compra del siguiente ticket :"
      ); 
    }

    return res.redirect("http://localhost:3000/");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Something goes wrong");
  }
};

const cancelOrder = (req, res) => {
  res.redirect("http://localhost:3000/");
};

module.exports = {
  createOrder,
  captureOrder,
  cancelOrder,
};
