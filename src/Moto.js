const Auto = require('./Auto');
const Vehiculo = require('./Vehiculo');

class Moto extends Vehiculo {
  constructor({ marca, modelo, cilindrada, precio }) {
    super({ marca, modelo, precio });
    this.cilindrada = cilindrada;
  }

  get getCilindrada() {
    return this.cilindrada;
  }

  toString() {
    return super.toString().concat(`Cilindrada: ${this.getCilindrada}`);
  }
}
module.exports = Moto;
