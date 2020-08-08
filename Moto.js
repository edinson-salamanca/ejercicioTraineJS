const Auto = require('./Auto');

class Moto extends Auto {
  constructor(opciones) {
    super(opciones);
    this.cilindrada = opciones.cilindrada;
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
