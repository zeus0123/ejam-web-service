const express = require('express');

const router = express.Router();
const weatherService = require('../services/weatherService');


router.get('/get-weather',weatherService.getWeather);
router.get('/get-weather-detail',weatherService.getWeatherDetail);

module.exports = router;