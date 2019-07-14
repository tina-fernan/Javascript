function getDifference(array1, array2) {
    const getterFn = function(array1, array2) {
      const differences = [];
      for (i = 0; i < array1.length; i++) {
        const currentElement = array1[i];
        let hasElement = false;
        for (j = 0; j < array2.length; j++) {
          if (array2[j] === currentElement) {
            hasElement = true;
          }
        }
        if (!hasElement) {
          differences.push(currentElement);
        }
      }
  
      return differences;
    };
  
    return getterFn(array1, array2)
      .concat(getterFn(array2, array1))
      .sort(sort);
  }

module.exports={getDifference};