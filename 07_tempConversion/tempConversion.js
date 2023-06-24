const convertToCelsius = function(tempInF) {
  const convertedTemp = (tempInF - 32) * (5 / 9);
  return Number(convertedTemp.toFixed(1));
};

const convertToFahrenheit = function(tempInC) {
  const convertedTemp = (tempInC * (9 / 5) + 32);
  return Number(convertedTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
