const filter = (array, filterFn) => {

    let filteredArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (filterFn(element) ===true) {
            filteredArray.push(element)
        }

    }
    return filteredArray;
}


module.exports = { filter };
