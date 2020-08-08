class Auto {
  constructor(opciones) {
    this.marca = opciones.marca;
    this.modelo = opciones.modelo;
    this.puerta = opciones.puerta;
    this.precio = opciones.precio;
  }

  toString() {
    return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: ${this.precio}`;
  }
}
module.exports = Auto;
