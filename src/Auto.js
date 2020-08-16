const Vehiculo = require('./Vehiculo');

class Auto extends Vehiculo {
  constructor({ marca, modelo, puertas, precio }) {
    super({ marca, modelo, precio });
    this.puertas = puertas;
  }
  
  toString() {
    return super.toString().concat(`Puertas: ${this.puertas}`);
  }
}

module.exports = Auto;
