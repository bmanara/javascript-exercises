const convertToCelsius = function(farenheit) {
  let celsius = (farenheit - 32) * 5 / 9;
  if (celsius % 1 != 0) {
    return parseFloat(celsius.toFixed(1));
  }

  return celsius;
  
};

const convertToFahrenheit = function(celsius) {
  let farenheit = (celsius * 9 / 5) + 32;
  if (farenheit % 1 != 0) {
    return parseFloat(farenheit.toFixed(1));
  }
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
