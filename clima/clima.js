const axios = require('axios');

const getClima = async (lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1b85b93b4d370a87a5b935bb6c28325b&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}