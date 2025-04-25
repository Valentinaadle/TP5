const productModel = require('../data/productModel');

async function getAllProducts() {
    return await productModel.getAll();
}

async function getProductById(id) {
    return await productModel.getById(id);
}

async function addProduct(productData) {
    // Validaciones de negocio aquí
    return await productModel.create(productData);
}

async function updateProduct(id, productData) {
    // Validaciones de negocio aquí
    return await productModel.update(id, productData);
}

async function deleteProduct(id) {
    return await productModel.delete(id);
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};