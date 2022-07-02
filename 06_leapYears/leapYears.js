const leapYears = function(inp) {
    output = false;
    if (inp%4==0) {
        output = true;
    }
    if (inp%100==0) {
      output = false;
      if (inp%400==0) {
        output = true;
      }
    }
    return output
};

// Do not edit below this line
module.exports = leapYears;
