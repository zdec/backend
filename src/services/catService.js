const axios = require('axios');

const API_URL = 'https://api.thecatapi.com/v1'; // Asegúrate de usar la URL correcta
const API_KEY = 'live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC 31mOJp4yJz5TsOUP'; // Clave API 

// Obtener todas las razas de gatos
const getBreeds = async () => {
    const response = await axios.get(`${API_URL}/breeds`, {
        headers: {
            'x-api-key': API_KEY
        }
    });
    return response.data;
};

// Obtener una raza de gato específica por ID
const getBreedById = async (breedId) => {
    const response = await axios.get(`${API_URL}/breeds/${breedId}`, {
        headers: {
            'x-api-key': API_KEY
        }
    });
    return response.data;
};

// Buscar razas de gatos
const searchBreeds = async (query) => {
    try {
        console.log("searchBreeds:",query)
        const response = await axios.get(`${API_URL}/breeds/search`, {
            params: query, 
            headers: {
                'x-api-key': API_KEY
            }
        });
        console.log("response:",response.data)
        return response.data;
    } catch (err) {
        console.error('Error searching breeds:', err);
        throw new Error('Error searching breeds');
    }
};

module.exports = { getBreeds, getBreedById, searchBreeds };
