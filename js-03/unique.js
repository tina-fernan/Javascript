function getUnique(values) {
    const uniques = {};
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      if (!uniques[value]) {
        uniques[value] = true;
      }
    }
  
    const uniqueArray = [];
    for (let value in uniques) {
      uniqueArray.push(parseInt(value));
    }
    uniqueArray.sort(sort);
  
    return uniqueArray;
  }
  
  module.exports = { getUnique };