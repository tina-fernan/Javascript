function transform(array, mapFn) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      result.push(mapFn(element));
    }
    return result;
  }
  
  module.exports = { transform };