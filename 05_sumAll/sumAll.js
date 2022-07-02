function sumAll(int1, int2) {
    output = 0;

    int1New = int1;
    int2New = int2;
    if (int1 > int2) {
        int1New = int2;
        int2New = int1;
    }

    for (i=int1New; i<int2New+1; i++) {
      output = output + i;
    }

    if (typeof(int1) != "number" || typeof(int2) != "number" || int1 < 0 || int2 < 0) {
        output = "ERROR"
    }

    return output
  }

// Do not edit below this line
module.exports = sumAll;
