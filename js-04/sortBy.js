function sortBy(array, sortByFn) {
    return array.sort((element1, element2) => {
      return sortByFn(element1) > sortByFn(element2);
    });
  }
  
  module.exports = { sortBy };