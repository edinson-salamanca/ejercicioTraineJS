const Auto = require('./Auto');

class Moto extends Auto {
  constructor({ marca, modelo, cilindrada, precio }) {
    super({ marca, modelo, precio });
    this.cilindrada = cilindrada;
  }

  get getCilindrada() {
    return this.cilindrada;
  }

  toString() {
    return super
      .toString()
      .replace(`Puertas: ${undefined}`, `Cilindrada: ${this.cilindrada}`);
  }
}
module.exports = Moto;
