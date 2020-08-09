const Auto = require('./Auto');
const Moto = require('./Moto');

module.exports = [
  new Auto({
    marca: 'Peugeot',
    modelo: '206',
    puertas: 4,
    precio: 200000,
  }),
  new Moto({
    marca: 'Honda',
    modelo: 'Titan',
    cilindrada: '125c',
    precio: 60000,
  }),
  new Auto({
    marca: 'Peugeot',
    modelo: '208',
    puertas: 5,
    precio: 250000,
  }),
  new Moto({
    marca: 'Yamaha',
    modelo: 'YBR',
    cilindrada: '160c',
    precio: 80500.5,
  }),
];
