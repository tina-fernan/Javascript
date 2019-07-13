function permutate(array) {
    const permutations = [];
    for (let i = 0; i < array.length; i++) {
      const arrayBeforeI = array.slice(0, i);
      const arrayAfterI = array.slice(i + 1);
      const reducedArray = arrayBeforeI.concat(arrayAfterI);
      const permutation = [array[i]];
      if (reducedArray.length > 0) {
        const subPermutations = permutate(reducedArray);
        for (let j = 0; j < subPermutations.length; j++) {
          permutations.push(permutation.concat(subPermutations[j]));
        }
      } else {
        permutations.push(permutation);
      }
    }
    return permutations;
  }
  
  module.exports = {
    permutate
  };