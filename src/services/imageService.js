const axios = require('axios');

const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUP';

const getImagesByBreedId = async (breedId) => {
    try {
        const response = await axios.get(`${API_URL}/images/search`, {
            params: { breed_id: breedId }, // Verifica que `breed_ids` sea el parámetro correcto
            headers: {
                'x-api-key': API_KEY
            }
        });
        return response.data; // Verifica los datos devueltos por la API
    } catch (err) {
        console.error('Error fetching images by breed ID:', err.message);
        throw new Error('Error fetching images by breed ID');
    }
};



module.exports = { getImagesByBreedId };
