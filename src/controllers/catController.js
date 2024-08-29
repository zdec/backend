const catService = require('../services/catService');

// Obtener todas las razas de gatos
const getBreeds = async (req, res) => {
    try {
        const breeds = await catService.getBreeds();
        res.json(breeds);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener una raza de gato específica por ID
const getBreedById = async (req, res) => {
    try {
        const breed = await catService.getBreedById(req.params.breed_id);
        if (breed) {
            res.json(breed);
        } else {
            res.status(404).json({ error: 'Breed not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Buscar razas de gatos
const searchBreeds = async (req, res) => {
    try {
        const query = req.query.name; // Obtén los parámetros de consulta
        if (!query) {
            return res.status(400).json({ error: 'Name parameter is required' });
        }
        console.log('Query:', query); // Agrega un log para verificar los parámetros
        const breeds = await catService.searchBreeds(query);
        console.log('Breeds found:', breeds); // Agrega un log para verificar los datos devueltos
        res.json(breeds);
    } catch (err) {
        console.error('Error in searchBreeds controller:', err.message);
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getBreeds, getBreedById, searchBreeds };
