
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function greeting(name) {
    return "Hello " + name;
  }
  
  function isAdult(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  function getMaxNumbers(values) {
    let maxNumber = values[0];
    for (let i = 0; i < values.length; i++) {
      if (values[i] > maxNumber) {
        maxNumber = values[i];
      }
    }
  
    return maxNumber;
  }
  
  function getMultiplyFn() {
    return function(number) {
      return number * 5;
    };
  }
  
  module.exports = {
    add: add,
    subtract: subtract,
    greeting: greeting,
    isAdult: isAdult,
    getMaxNumbers: getMaxNumbers,
    getMultiplyFn: getMultiplyFn
  };
