const express = require('express');
const app = express();
const productRoutes = require('./presentation/productRoutes');


// Middleware para parsear JSON
app.use(express.json());

// Rutas de productos
app.use('/productos', productRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API REST corriendo en http://localhost:${PORT}`);
});