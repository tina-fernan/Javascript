function objectToArrays(object) {
    const arrays = [];
    Object.keys(object).forEach(property => {
        const value = object[property];
        if (typeof value === "object") {
            objectToValue(value).forEach(arrayOfNestedObject =>
                array.push([property, ...arrayOfNestedObject]));
        } else {
            arrays.push([property, value]);
        }
        return arrays;
    });
}
module.exports = { objectToArrays };