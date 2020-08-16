const vehiculos = require('./src/data/vehiculos');
const Concesionaria = require('./src/Concesionaria');

const concesionaria = new Concesionaria(vehiculos);

concesionaria.mostrar();
console.log('=============================');
concesionaria.mostratMasCaro();
concesionaria.mostrarMasBarato();
concesionaria.mostrarConY();

console.log('=============================');
console.log('Vehículos ordenados por precio de mayor a menor:');
concesionaria.mostrarOrdenado();
