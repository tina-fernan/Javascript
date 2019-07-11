function getMinMaxNumber(values) {
  let maxNumber = values[0];
  let minNumber = values[0];
  for (let i = 0; i < values.length; i++) {
    const value = values[i];

    if (value > maxNumber) {
      maxNumber = value;
    }
    if (value < minNumber) {
      minNumber = value;
    }
  }

  return [minNumber, maxNumber];
}
module.exports={getMinMaxNumber};