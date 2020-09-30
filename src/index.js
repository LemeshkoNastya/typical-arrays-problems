
exports.min = function min (array) {
  if (!array || array.length === 0){
    return 0;
  } else {
    let minNumber = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < minNumber) {
        minNumber = array[i];
      }
    }
    return minNumber;
  }
}

exports.max = function max (array) {
  if (!array || array.length === 0){
    return 0;
  } else {
    let maxNumber = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxNumber) {
        maxNumber = array[i];
      }
    }
    return maxNumber;
  }
}

exports.avg = function avg (array) {
  if (!array || array.length === 0){
    return 0;
  } else {
    let avgNumber = 0;
    for(let i = 0; i < array.length; i++) {
      avgNumber += array[i];
    }
    avgNumber /= array.length;
    return avgNumber;
  }
}