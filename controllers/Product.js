const getAllProducts = async(req,res) =>{
  res.status(200).json({msg:"i am getallproducts"})
}

const getAllProductsTesting = async(req,res) =>{
    res.status(200).json({msg:"i am getallproductsTesting"})
  }

module.exports = {getAllProducts,getAllProductsTesting}