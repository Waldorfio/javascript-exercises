const getTheTitles = function(arrInput) {
    titleArr = [];
    for (i=0; i<(arrInput.length); i++) {
        arrInput[i]
        titleArr.push(arrInput[i].title);
    }
    return titleArr
};

// Do not edit below this line
module.exports = getTheTitles;
