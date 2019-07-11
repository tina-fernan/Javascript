
function getProperty(object, selector) {
    const selectors = selector.split(".");
    console.log(selectors);
    return getPropertyRecursive(object, selectors);
  }
  
  function getPropertyRecursive(object, selectors) {
    const nestedObject = object[selectors[0]];
    if (nestedObject === null || nestedObject === undefined) {
      return null;
    } else if (selectors.length > 1) {
      return getPropertyRecursive(nestedObject, selectors.slice(1));
    } else {
      return nestedObject;
    }
  }
  
  
module.exports={getProperty};