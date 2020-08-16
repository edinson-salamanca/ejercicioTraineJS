class Vehiculo {
  constructor({ marca, modelo, precio }) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }
  get getMarca() {
    return this.marca;
  }
  get getModelo() {
    return this.modelo;
  }

  get getPrecio() {
    return this.precio;
  }
  toString() {
    return `Marca: ${this.marca} // Modelo: ${this.modelo} `;
  }
}
module.exports = Vehiculo;
