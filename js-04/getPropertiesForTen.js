function getPropertiesForTen(object) {
    let result = [];

    for (const key in object) {
        if (parseInt(key) + parseInt(object[key]) === 10 && typeof object[key] !== "string") {
            result.push(key);
        }
    }

    return result;
   
}
module.exports = { getPropertiesForTen };