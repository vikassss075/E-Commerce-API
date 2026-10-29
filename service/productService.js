const getAllProducts = () => {
    return "Fetching all products";
};

const getProductById = (id) => {
    return `Fetching product with ID: ${id}`;
};

const createProduct = () => {
    return "Adding a new product";
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct
};