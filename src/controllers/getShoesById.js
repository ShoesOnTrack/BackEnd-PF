const { shoes } = require("../db")

const getShoesById = async (req, res) => {
    const { shoesId: id } = req.params
  
    try {
      const response = await shoes.findOne({
        where: {
          id
        },
      })
      res.status(200).json(response)
    } catch (error) {
      res.status(404).json({error: error.message});
    }
}

module.exports = { getShoesById }