function groupBy(array, fn) {
    const grouped = {};
  array.map(el => [el, fn(el)]).map(([original, country]) => {
    (!grouped[country]) ? grouped[country] = [] : '';
    (fn(original) === country) ? grouped[country].push(original) : '';
  });
  return grouped;
};

//     let object = {};
//     let keys = [];
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         const elementFunction = fn(element);
//         if(keys.indexOf(elementFunction) === -1) {
//             keys.push(elementFunction);
//             object[elementFunction] = [];
//         }
//     }
//     for (let index = 0; index < array.length; index++) {
//         const key = keys[keys.indexOf(fn(array[index]))]
//         if(fn(array[index]) === key) {
//             object[key].push(array[index]);
//         }
//     }
    

//     return object;
// }
// const cities = [
//     { name: "Vienna", country: "Austria" },
//     { name: "Beijing", country: "China" },
//     { name: "München", country: "Germany" },
//     { name: "Xi'an", country: "China" },
//     { name: "Mannheim", country: "Germany" },
//     { name: "Lübeck", country: "Germany" }
// ];
// groupBy(cities, city => city.country.toLowerCase());
module.exports = { groupBy };