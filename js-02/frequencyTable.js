// const getFrequencyTable= array =>{
//   return array.reduce((previous, current) => (previous[current] = ++previous[current] || 1, previous), {})
// }
module.exports={getFrequencyTable};

function getFrequencyTable(values) {
  const frequencyTable = {};
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (frequencyTable[value]) {
      frequencyTable[value]++;
    } else {
      frequencyTable[value] = 1;
    }
  }

  return frequencyTable;
}