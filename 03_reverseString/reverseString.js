const reverseString = function(string) {
    let arrayString = string.split("");
    arrayString = arrayString.reverse();

    let reversedString = arrayString.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
