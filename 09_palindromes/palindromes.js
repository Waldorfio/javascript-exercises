const palindromes = function (a) {
    output = true;
    a = a.replaceAll(',', '');
    a = a.replaceAll('.', '');
    a = a.replaceAll(' ', '');
    a = a.replaceAll('!', '');
    a = a.toUpperCase();
    combinedString = a;
    // Old attempt at checking for space between words.
    // Later switched to using .replaceAll
    // if (a.includes(' ')==true) {
    //   a = a.replaceAll(',', '');
    //   a = a.replaceAll('.', '');
    //   combinedString = '';
    //   splitArray = a.split(' ')
    //   for (i=0; i<splitArray.length; i++) {
    //       combinedString = combinedString + splitArray[i];
    //   }
    // }
    for (i=0; i<combinedString.length-1; i++) {
        if (combinedString[i] != combinedString[combinedString.length-1 - i]) {
          output = false;
          break;
        }
    }
    return output
};

// Do not edit below this line
module.exports = palindromes;
