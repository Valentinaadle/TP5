const express = require('express');
const router = express.Router();
const productService = require('../business/productService');

// GET /productos - Listar todos los productos
router.get('/', async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /productos - Agregar un nuevo producto
router.post('/', async (req, res) => {
    try {
        const newProduct = await productService.addProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// (Opcional) GET /productos/:id - Obtener un producto por ID
router.get('/:id', async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// (Opcional) PUT /productos/:id - Actualizar un producto
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await productService.updateProduct(req.params.id, req.body);
        if (updatedProduct) {
            res.json(updatedProduct);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// (Opcional) DELETE /productos/:id - Eliminar un producto
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await productService.deleteProduct(req.params.id);
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;