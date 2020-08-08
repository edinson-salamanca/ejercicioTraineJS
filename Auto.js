class Auto {
  constructor(opciones) {
    this.marca = opciones.marca;
    this.modelo = opciones.modelo;
    this.puerta = opciones.puerta;
    this.precio = opciones.precio;
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
    return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: ${this.precio}`;
  }
}

module.exports = Auto;
