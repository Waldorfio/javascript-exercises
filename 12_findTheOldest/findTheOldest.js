const findTheOldest = function(arrInput) {
    newArr = [];
    newArr2 = [];
    for (i=0; i<(arrInput.length); i++) {
        if (arrInput[i].yearOfDeath == undefined) {
            newArr.push(2022 - arrInput[i].yearOfBirth);
            continue
        }
        newArr.push(arrInput[i].yearOfDeath - arrInput[i].yearOfBirth);
        newArr2.push(arrInput[i].name);
    }

    maxVal = Math.max(...newArr);
    maxIdx = newArr.indexOf(maxVal);
    oldPerson = arrInput[maxIdx];

    return oldPerson
}

// Do not edit below this line
module.exports = findTheOldest;
