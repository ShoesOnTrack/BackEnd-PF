const { Products } = require("../../db");
const { Op } = require("sequelize");

const paginateAllProducts = async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const startIndex = (page - 1) * limit;
    const results = {};
  
    // Obtén los parámetros de consulta de la URL
    const { name, brand, color, sale, size, price, gender, category } = req.query;
    // Crea un objeto de condiciones vacío
    const whereConditions = {};
  
    // Agrega condiciones al objeto según los parámetros de consulta
    if (name) {
      whereConditions.name = {
        [Op.iLike]: `%${name}%`,
      };
    }
    if (gender) {
      if (gender) {
        whereConditions.gender = gender;
      }
    }
    if (category) {
      whereConditions.category = {
        [Op.iLike]: `%${category}%`,
      };
    }
    if (color) {
      whereConditions.color = [color]
    }
    if (sale === "sale") {
      whereConditions.sale = {
        [Op.gt]: 0, // Filtra los productos con descuento (sale mayor que 0)
      };
    }
    if (sale === "no-sale") {
      whereConditions.sale = 0; // Filtra los productos sin descuento (sale igual a 0)
    }
    if (size) {
       whereConditions.sizes = [size]
   }
    
    try {
      const order = [];
      if (price === "highest") {
        order.push(["price", "DESC"]);
      } else if (price === "lowest") {
        order.push(["price", "ASC"]);
      }
      console.log(whereConditions)
      const count = await Products.count({
          where: whereConditions, // Aplica las condiciones de filtro
        });
        results.info = {
            page: page,
            limit: limit,
            total: count,
        };
  
      const products = await Products.findAll({
        where: whereConditions, // Aplica las condiciones de filtro
        order: order, // Aplica el ordenamiento por precio
        limit: limit,
        offset: startIndex,
      });
  
      results.results = products;
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
  
  module.exports = paginateAllProducts;