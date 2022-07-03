const fibonacci = function(a) {
    let fibArr = [1, 1, 2];

    for (i=0; i<a; i++) {
      j = parseInt(i);
      if (j==0 || j==1 || j==2) {
        continue
      }
      finalFib = fibArr[fibArr.length-1] + fibArr[fibArr.length-2];
      fibArr.push(finalFib);
    }

    finalFib = fibArr[fibArr.length-1];
    if (parseInt(a) < 3) {finalFib = 1};
    if (a < 0) {finalFib = "OOPS"}

    return finalFib
  };

// Do not edit below this line
module.exports = fibonacci;
