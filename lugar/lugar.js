const axios = require('axios');

const getLugarLatLng = async (direccion) => {
    const encodeURL = encodeURI(direccion);

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {q: `${encodeURL}`, days: '3'},
        headers: {
            'x-rapidapi-key': '1a7f346fa6mshed81480189401bfp1112f7jsn99da35527de0',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

const resp = await axios.request(options);

if (resp.data.location===null){
    throw new Error(`No hay resultados para ${direccion}`);
}

const  {name, lat, lon } = resp.data.location;
  
return {
    name,
    lat,
    lon
}
}

module.exports  = {
    getLugarLatLng
}
