const express = require('express');
const router = express.Router();
const { getImagesByBreedId } = require('../controllers/imageController');

router.get('/imagesbybreedid', getImagesByBreedId);

module.exports = router;
