const { shoes } = require("../db.js")

// const getShoesByName = async (name) => {
  
//    const shoes = await shoes.findOne({ 
//       where: { name: name },
//       include: [
//           {
//               model: shoes,
//               attributes: ["name"],
        
//           }]
//   })
 
//   if (shoes) {
//       return shoes
//     }   
// } 

const getShoesByName = async(req,res) =>{
    try{
        const {name}= req.query
        const response = await shoes.findOne({
            where: { name: name },
            include: [
                {
                    model: shoes,
                    attributes: ["name"],
                }
            ]
        })
        res.status(200).json(shoes)
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

module.exports = { getShoesByName }