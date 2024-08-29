const imageService = require('../services/imageService');

const getImagesByBreedId = async (req, res) => {
    try {
        const breedId = req.query.breed_id; // Obtén el parámetro de consulta
        console.log('Breed ID:', breedId); // Verifica el parámetro recibido
        const images = await imageService.getImagesByBreedId(breedId);
        console.log('Images found:', images); // Verifica las imágenes recibidas
        res.json(images);
    } catch (err) {
        console.error('Error in getImagesByBreedId controller:', err.message);
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getImagesByBreedId };
