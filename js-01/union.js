const getUnion=function(array1, array2){
    const unions = [];
    for (i = 0; i < array1.length; i++) {
      const currentElement = array1[i];
      for (j = 0; j < array2.length; j++) {
        if (array2[j] === currentElement) {
          unions.push(currentElement);
          break;
        }
      }
    } 
    unions.sort(sort);
    return unions;
  }
module.exports={getUnion};      
    
    
 