class Auto {
  constructor({ marca, modelo, puertas, precio }) {
    this.marca = marca;
    this.modelo = modelo;
    this.puertas = puertas;
    this.precio = precio;
  }

  get getMarca() {
    return this.marca;
  }

  get getModelo() {
    return this.modelo;
  }

  get getPuerta() {
    return this.puertas;
  }

  get getPrecio() {
    return this.precio;
  }

  toString() {
    return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: ${this.precio}`;
  }
}

module.exports = Auto;
