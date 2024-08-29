const express = require('express');
const cors = require('cors'); // Importa el middleware CORS
const app = express();

// Importar Rutas 
const catRoutes = require('./src/routes/catRoutes');
const imageRoutes = require('./src/routes/imageRoutes');
const userRoutes = require('./src/routes/userRoutes');

// Configura CORS para permitir solicitudes desde tu frontend
app.use(cors({
    origin: 'http://localhost:4200', // Permite solicitudes desde este origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
  }));

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/cats', catRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/users', userRoutes);

// Manejo de rutas no encontradas (404)
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});

// Manejo de errores (500)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
