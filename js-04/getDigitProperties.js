function getDigitProperties(object) {

    let result = [];
    let elementProperty = Object.keys(object);
    let regexp = /[0-9]/;
    elementProperty.forEach(e => {
        if (regexp.test(e)) {
         result.push(e);
        }
 
    });
 
    return result;
 }
  
 module.exports = {getDigitProperties};

//for (let key of Object.keys(tempObj))