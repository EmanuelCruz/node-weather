const axios = require('axios');

const config = require("../config");
const logger = require('../loaders/logger')

class WeatherRepository {
    constructor() {
        this.units = "metric";
        this.lang = "es";
        this.pathBase = config.openweathermap.pathBase;
        this.apiKey = config.openweathermap.apiKey;
    }

    async weatherByCoordinates(lon, lat) {
        try {
            const instance = axios.create({
                baseURL: this.pathBase,
                params: {
                    appid: this.apiKey,
                    units: this.units,
                    lang: this.lang,
                    lon,
                    lat,
                },
            });
            const response = await instance.get();
            logger.info(response);
            return response.data;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = WeatherRepository;
