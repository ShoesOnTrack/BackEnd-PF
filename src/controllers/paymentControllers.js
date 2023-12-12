const axios = require("axios");
const sendEmail = require("../config/mailer.js");

const PAYPAL_API = "https://api-m.sandbox.paypal.com";
const PAYPAL_API_CLIENT = "AaHhTpPS12nRr6xYKtC1ON5uepgecESSzzVPZ-GF91aq-hIqPC-_Qs6csNxmCxl4-pI5SmPMZeB-aHV6";
const PAYPAL_API_SECRET = "EAbiJOvD1WyHZ3kGeDdP3gKReovmZ_urdMRuMtDS2jF3dw1UYPmrTXkQIIyfGNzjd9dTzdvCsS0Agh8f";

let userEmail; // Variable para almacenar userEmail

const createOrder = async (req, res) => {
  userEmail = req.body.userEmail; // Asigna el valor de userEmail

  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: req.body.totalPrice.toString(),
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
    }

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const {
      data: { access_token },
    } = await axios.post(
      `${PAYPAL_API}/v1/oauth2/token`,
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
    console.error("Error en createOrder:", error.message);
    res.status(500).send("Something went wrong");
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

    if (response.data.status === "COMPLETED" && userEmail) {
      const emailResult = await sendEmail(
        userEmail,
        "Notificación de Pago",
        "Te informamos que tu pago ha sido procesado con éxito. Gracias por tu compra.",
      );

      if (emailResult) {
        console.log("Correo electrónico enviado con éxito:", emailResult);
      } else {
        console.error("Error al enviar el correo electrónico");
      }
    }

    return res.redirect("http://localhost:3000/purchase");
  } catch (error) {
    console.error("Error en captureOrder:", error);
    return res.status(500).send("Something went wrong");
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
