const removeFromArray = function(arr, ...unwanted) {
    const resultArr = [];
    for (const element of arr) {
        let wanted = true;
        for (const temp of unwanted) {
            if (element === temp) {
                wanted = false;
                break;
            }
        }
        if (wanted) {
            resultArr.push(element);
        }
    }
    return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
