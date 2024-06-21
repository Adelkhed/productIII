const Product = require("../models/product.model");

module.exports.findAllProducts = (req,res) => {
    Product.find()
        .then((allDataProducts) => {
            res.json({allDataProducts})
        })
        .catch((err) => { 
            res.json({message :"Something went wrong",error:err})
        });
}

module.exports.createNewProduct = (req,res) =>{
    Product.create(req.body)
    .then( (newlyCreateProduct) => {
         res.json({newlyCreateProduct})
     })
     .catch((err)=>{console.log("Something went wrong",err)})

}

module.exports.findOneProduct = (req,res) =>{
    Product.findOne({_id:req.params.id})
    .then( (product) => res.json({message: "Get One Product",product:product}))
    
    .catch( err => console.log("Something went wrong",err))
}

module.exports.updateProduct = (req,res) =>{
    Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
   .then( (product) => res.json({message: "Update Product",product:product}))
 }

 module.exports.deleteProduct = (req,res) =>{
    Product.findOneAndDelete({_id:req.params.id})
   .then( (product) => res.json({message: " Delete One Product",product:product}))
 }