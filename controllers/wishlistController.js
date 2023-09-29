//logic for wishlist

//1. import wishlist form model
const wishlists = require('../models/wishlistSchema')

//logic for add wishlist
exports.addTowishlist=async(req,res)=>{
    //get product details
    //Destructuring
    try{
        const {id, title, price, image} = req.body;
    //logic
    //check if product is already availabe in wishlist
    const item = await wishlists.findOne({id})
    if(item){
        res.status(403).json("Product is already added in wishlist")
    }
    else{
        //Add a new product to the wishlists
        const newProduct = new wishlists({id, title, price, image})
        //To store the new product in the wishlists
        await newProduct.save()
        //send response back to the client
        res.status(200).json("Product added successfully")
    }
    }
    catch(error){
        res.status(401).json(error)
    }
}

//get all wishlists products
exports.getWishlistItems = async(req,res)=>{
    //logic
    try{
        const allWishlist = await wishlists.find()
        res.status(200).json(allWishlist) //wishlists products details
    }
    catch(error){
        res.status(404).json(error)
    }
}

//Delete a particular product from the wishlist
exports.deleteProduct=async(req,res)=>{
    //logic - id get - delete to fetch remaining products details
    //get id from path parameter
    const {id}=req.params

    try{
        const removedProduct=await wishlists.deleteOne({id})
        //get remaining product details after deleting a particular product
        if(removedProduct){
            const allItems = await wishlists.find()
            res.status(200).json(allItems)
        }
    }
    catch(error){
        res.status(404).json(error)
    }
}
