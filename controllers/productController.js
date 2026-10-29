const productService = require(`../service/productService`);

const allProducts = (req, res)=>{
    const result = productService.getAllProducts();
    res.send(result);
};

const newProduct = (req, res)=>{
    const result = productService.newProduct();
    res.send(result);
};

const productById = (req,res)=>{
    const id = req.params.id;
    const result = productService.getProductById(id);
    res.send(result);
};

module.exports ={
    allProducts,
    newProduct,
    productById
}