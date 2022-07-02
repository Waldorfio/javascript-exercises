const add = function(a, b) {
	return (a+b);
};

const subtract = function(a, b) {
	return (a-b);
};

const sum = function(a) {
  output = 0;
  for (i=0; i<a.length; i++) {
    output = output + a[i];
  }
 	return (output);
};

const multiply = function(a) {
  output = 1;
  for (i=0; i<a.length; i++) {
    output = output * a[i];
  }
 	return (output);
};

const power = function(a, b) {
	return (a**b);
};

const factorial = function(a) {
  output = 1;
  for (i=1; i<a+1; i++) {
    output = output * i;
  }
	return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
