const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { shoes, categories, user } = require("./src/controllers/saveInDB.js");
const { Products } = require("./src/db.js");

const { SERVER_PORT } = process.env;

conn.sync({ force: false }).then(async () => {
  const products = await Products.findAll();
  if (!products.length) {
    user();
    categories();
    shoes();
  }

  server.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port: ${SERVER_PORT}`);
  });
});
