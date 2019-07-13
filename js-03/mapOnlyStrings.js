function mapOnlyStrings(array, fn) {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const elementFunction = fn(element);
        if (typeof elementFunction === "string") {
            result.push(elementFunction)
        } else {
            result.push(element);
        }
    }
    
    return result;
}

module.exports = { mapOnlyStrings };