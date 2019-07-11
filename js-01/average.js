function getAverage(array) {


    return array.reduce((a, b) => a + b) / array.length;

}
module.exports = { getAverage };


// function getAverage(values) {
//     let sum = 0;
//     for (let i = 0; i < values.length; i++) {
//       sum += values[i];
//     }
//     return sum / values.length;
//   }
  