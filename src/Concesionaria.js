const numberFormat = require('./utils/numberFormat');
class Concesionaria {
  constructor([...vehiculos]) {
    this.vehiculos = vehiculos;
    this.utilidades = require('./utils/utilidades');
  }

  mostrar() {
    this.vehiculos.forEach((vehiculo) => {
      console.log(
        vehiculo
          .toString()
          .concat(` Precio: $${numberFormat(vehiculo.getPrecio)}`)
      );
    });
  }

  mostratMasCaro() {
    const vehiculoMasCaro = this.utilidades.getVehiculoMasCaro(this.vehiculos);
    console.log(
      `Vehículo más caro: ${vehiculoMasCaro.getMarca} ${vehiculoMasCaro.getModelo}`
    );
  }

  mostrarMasBarato() {
    const vehicuMasBarato = this.utilidades.getVehiculoMasBarato(
      this.vehiculos
    );
    console.log(
      `Vehículo más barato: ${vehicuMasBarato.getMarca} ${vehicuMasBarato.getModelo}`
    );
  }

  mostrarConY() {
    const modelosConLetra = this.utilidades.getModelosConY(this.vehiculos);
    modelosConLetra.forEach((dato) =>
      console.log(
        `Vehículo que contiene en el modelo la letra ‘Y’: ${dato.getMarca} ${
          dato.getModelo
        } $${numberFormat(dato.getPrecio)}`
      )
    );
  }

  mostrarOrdenado() {
    const ordenados = this.utilidades.getOrdenadosPorPrecio(this.vehiculos);
    ordenados.forEach((dato) =>
      console.log(`${dato.getMarca} ${dato.getModelo}`)
    );
  }
}

module.exports = Concesionaria;
