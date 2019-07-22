function reduce(array, fn) {
    let runningValue = array[0];
    for (let i = 1; i < array.length; i++) {
      runningValue = fn(runningValue, array[i]);
    }
    return runningValue;
  }
  
  module.exports = { reduce };