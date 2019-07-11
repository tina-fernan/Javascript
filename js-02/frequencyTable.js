const getFrequencyTable= array =>{
  return array.reduce((previous, current) => (previous[current] = ++previous[current] || 1, previous), {})
}
module.exports={getFrequencyTable};

// let frequencyNumber={};
// array.forEach(number => {
  
// (frequencyNumber[number]){
//   if(frequencyNumber[number]===1){
//     frequencyNumber[number]+=1;
//   }else{
//     frequencyNumber[number]=1;
//   }
//   return frequencyNumber;
// }
// }