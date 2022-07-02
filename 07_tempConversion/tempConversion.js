const ftoc = function(fInput) {
  output = (fInput - 32) * (5/9);
  output = parseFloat(output.toFixed(1));
  return output
};

const ctof = function(cInput) {
  output2 = (cInput * 9/5) + 32;
  output2 = parseFloat(output2.toFixed(1));
  return output2
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
