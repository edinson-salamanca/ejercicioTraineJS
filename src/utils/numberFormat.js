module.exports = (value) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'decimal',
    currencyDisplay: 'symbol',
    minimumFractionDigits:2
  }).format(value);
};
