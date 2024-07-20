const sumAll = function(start, end) {
    if (
        typeof(start) != "number"  || typeof(end) != "number" ||
        start != Math.floor(start) || end != Math.floor(end) ||
        start < 0                  || end < 0
    ) {
        return "ERROR";
    }
    if (end > start) end++;
    else             start++;
    return Math.abs(start * (start - 1) / 2 - end * (end - 1) / 2);
};

// Do not edit below this line
module.exports = sumAll;
