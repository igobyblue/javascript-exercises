const leapYears = function(years) {
 //let n = Number.isInteger(years)
  //let wholeYear = years[n];
  //let lastNumber = years[n-1];
  //let secondLastNumber = years[n-2];
 if ((years % 4 == 0 && years % 100 != 0) || (years % 400 == 0)) {
    return true;
 }

 else {
    return false;
 }
};

// Do not edit below this line
module.exports = leapYears;
