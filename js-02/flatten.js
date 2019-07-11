function flatten(array1) {
    return array1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
 }
 module.exports={flatten};