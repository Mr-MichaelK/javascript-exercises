const reverseString = function(str) {
    resultStr = "";
    for (let i = str.length-1; i > -1; i--) {
        resultStr += str[i];
    }
    return resultStr;
};

// Do not edit below this line
module.exports = reverseString;
