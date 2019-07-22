function getMedian(numbers) {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    var median = 0,
     numsLen = numbers.length;
   // number 11 wont work with sort we should provide function sort
   numbers.sort(function(a,b){
       return a-b;
   });
   
   
 
    if (
        numsLen % 2 === 0 // is even
    ) {
        // average of two middle numbers
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        median = numbers[(numsLen / 2 -0.5)];
    }
 
    return median;
 }
module.exports={getMedian};


// function getMedian(values) {
//     values.sort(function(a,b){
//         return a-b;
//     });
    
//     if (values.length % 2 === 0) {
//       const left = values.length / 2;
//       return (values[left - 1] + values[left]) / 2;
//     } else {
//       return values[values.length / 2 - 0.5];
//     }
//   }