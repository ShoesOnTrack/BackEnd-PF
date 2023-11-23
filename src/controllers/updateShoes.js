const { shoes } = require("../db")

const updateShoes = async (req, res) => {
    const { shoes: id } = req.params
    const { price,name,stock,img,waist } = req.body
  
    try {
      const shoe = await shoes.findByPk(id)
      if (!shoe) return res.status(400).send({msg: `El producto ${id} no existe en la base de datos.`})
  
      await shoes.update(
        propertys,
        {
          where: {
            id
          }
        }
      )
  
      if (price) {
        const existsPrice = await Promise.all(price.map(value => shoes.findByPk(value)))
        if (!existsPrice) return res.status(400).send({msg: 'El producto fué actualizado.'})
        shoe.setPrice(price)
      }

      if (name) {
        const existName = await Promise.all(name.map(value => shoes.findByPk(value)))
        if (!existName) return res.status(400).send({msg: 'El producto fué actualizado.'})
        shoe.setName(name)
      }

      if (stock) {
        const existStock = await Promise.all(stock.map(value => shoes.findByPk(value)))
        if (!existStock) return res.status(400).send({msg: 'El producto fué actualizado.'})
        shoe.setStock(stock)
      }

      if (img) {
        const existImg = await Promise.all(img.map(value => shoes.findByPk(value)))
        if (!existImg) return res.status(400).send({msg: 'El producto fué actualizado.'})
        shoe.setImg(img)
      }

      if (waist) {
        const existWaist = await Promise.all(waist.map(value => shoes.findByPk(value)))
        if (!existWaist) return res.status(400).send({msg: 'El producto fué actualizado.'})
        shoe.setWaist(waist)
      } 
    
      res.status(200).send({msg: `El producto ${id} fué actualizado correctamente.`})
    } catch (error) {
      res.status(500).send({ msg: 'Error', error }) 
    }
  }

module.exports = { updateShoes }