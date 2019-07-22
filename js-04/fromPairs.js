function fromPairs(array){
    const object = {};

    for (const subArray of array) {        
         object[subArray[0]] = subArray[1];
    }
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    //     object[element[0]] = element[1];
    // }
    
    return object;
    
}


module.exports={fromPairs};