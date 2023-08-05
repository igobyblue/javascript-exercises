const convertToCelsius = function(fahrenheit) {
  let roundedF = fahrenheit;
  let numberF = (roundedF - 32) * 5/9;

  return parseFloat(numberF.toFixed(1));

};

const convertToFahrenheit = function(celsius) {
  let roundedC = celsius;
  let numberC = (roundedC * 9/5) + 32 
  
  return parseFloat(numberC.toFixed(1));
  
  
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
