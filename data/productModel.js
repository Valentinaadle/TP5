const fs = require('fs').promises;
const path = require('path');
const productsPath = path.join(__dirname, 'products.json');

async function readProductsFile() {
    try {
        const data = await fs.readFile(productsPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(productsPath, '[]');
            return [];
        }
        throw error;
    }
}

async function getAll() {
    return await readProductsFile();
}

async function getById(id) {
    const products = await readProductsFile();
    return products.find(p => p.id === id);
}

async function create(product) {
    const products = await readProductsFile();
    const newProduct = {
        id: Date.now().toString(),
        ...product,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    products.push(newProduct);
    await fs.writeFile(productsPath, JSON.stringify(products, null, 2));
    return newProduct;
}

async function update(id, productData) {
    const products = await readProductsFile();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        const updatedProduct = {
            ...products[index],
            ...productData,
            updatedAt: new Date().toISOString()
        };
        products[index] = updatedProduct;
        await fs.writeFile(productsPath, JSON.stringify(products, null, 2));
        return updatedProduct;
    }
    return null;
}

async function remove(id) {
    const products = await readProductsFile();
    const initialLength = products.length;
    const filteredProducts = products.filter(p => p.id !== id);
    
    if (initialLength !== filteredProducts.length) {
        await fs.writeFile(productsPath, JSON.stringify(filteredProducts, null, 2));
        return true;
    }
    return false;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};