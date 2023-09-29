//Logic for getting all products from mongodb

//1. import product collection
const products = require('../models/productSchema')

//2. create a function for getting all products
exports.getAllProducts=async(req,res)=>{
    //get all products from mongodb
    try{
        const allProducts = await products.find()
        res.status(200).json(allProducts) //response send back to client
    }
    catch(error){
        res.status(401).json(error) //error message send back to client
    }
}

//View particular product details
exports.viewProduct = async(req,res)=>{
    //Get product id from the request
    const id = req.params.id;
    try {
        //check product id is present in the db
        const product = await products.findOne({id})
        if(product){
            res.status(200).json(product) //send product details to client
        }
        else{ // if product is not present
            res.status(404).json("product not found")
        }
    } 
    catch (error) {
        res.status(404).json(error)
    }
}
