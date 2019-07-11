function toPairs(object) {
    return Object.keys(object)
      .sort()
      .map(key => [key, object[key]]);
  }
  
  module.exports = { toPairs };