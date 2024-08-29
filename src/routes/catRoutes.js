const express = require('express');
const router = express.Router();
const { getBreeds, getBreedById, searchBreeds } = require('../controllers/catController');

// Ruta para obtener todas las razas de gatos
router.get('/breeds', getBreeds);

// Ruta para obtener una raza de gato específica por ID
router.get('/breeds/:breed_id', getBreedById);

// Ruta para buscar razas de gatos
router.get('/breeds/search', searchBreeds);

module.exports = router;
