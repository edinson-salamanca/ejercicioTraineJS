class Utilidades {
  static getVehiculoMasCaro = ([...vehiculos]) => {
    vehiculos.sort((a, b) => a.getPrecio - b.getPrecio);
    const TAM = vehiculos.length;
    return vehiculos[TAM - 1];
  };

  static getVehiculoMasBarato = ([...vehiculos]) => {
    vehiculos.sort((a, b) => a.getPrecio - b.getPrecio);
    return vehiculos[0];
  };

  static getModelosConY = ([...vehiculos]) => {
    const vehiculosConY = vehiculos.filter((vehiculo) =>
      vehiculo.getModelo.includes('Y')
    );
    return [...vehiculosConY];
  };

  static getOrdenadosPorPrecio = ([...datos]) => {
    const ordenados = datos.sort((a, b) => b.getPrecio - a.getPrecio);
    return [...ordenados];
  };
}

module.exports = Utilidades;
