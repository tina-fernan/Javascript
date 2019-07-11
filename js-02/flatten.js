function flatten(array1) {
    return array1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
 }
 module.exports={flatten};
 
//  function flatten(currentArray, flattenedArray = []) {
//     for (let i = 0; i < currentArray.length; i++) {
//       const currentElement = currentArray[i];
//       if (Array.isArray(currentElement)) {
//         flattenedArray = flatten(currentElement, flattenedArray);
//       } else {
//         flattenedArray.push(currentElement);
//       }
//     }
  
//     return flattenedArray;
//   }