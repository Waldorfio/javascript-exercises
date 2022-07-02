function reverseString(string) {
    let output = '';
    let j = 0;
    for (let i=0; i<string.length; i++) {
        j = string.length-1 - i;
        output = output + string[j];
    }
    return(output); 
}

// Do not edit below this line
module.exports = reverseString;
