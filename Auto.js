const numberFormat = require('./numberFormat');

class Auto {
  constructor({ marca, modelo, puerta, precio }) {
    this.marca = marca;
    this.modelo = modelo;
    this.puertas = puerta;
    this.precio = precio.toFixed(2);
  }

  get getMarca() {
    return this.marca;
  }

  get getModelo() {
    return this.modelo;
  }

  get getPuerta() {
    return this.puerta;
  }

  get getPrecio() {
    return this.precio;
  }

  toString() {
    return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${
      this.puertas
    } // Precio: ${numberFormat(this.precio)}`;
  }
}

module.exports = Auto;
