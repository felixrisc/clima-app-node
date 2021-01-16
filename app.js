const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.75,-74)
//     .then(console.log)
//     .catch(err => console.log(err));

const getInfo = async (direccion) => {

   try {
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat,coords.lon);
    return `El clima de ${coords.name} es de ${temp} grados centigrados`;
   } catch (error) {
    return `No de pudo determinar el clima de ${direccion}`;
   }

   
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
