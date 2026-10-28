const allProducts = (req, res)=>{
    res.send('Fetching all products');
};

const newProduct = (req, res)=>{
    res.send('Adding a new product');
};

const productById = (req,res)=>{

    const id = req.params.id;
    res.send(`Fetching product with ID: ${id}`)
};

module.exports ={

    allProducts,
    newProduct,
    productById
}
