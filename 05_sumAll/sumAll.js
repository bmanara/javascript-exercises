const sumAll = function(start, end) {
    // Check if arguments given is a negative number, or an invalid data type. If so, return "ERROR"
    if (start < 0 || end < 0 || typeof(start) != "number" || typeof(end) != "number") {
        return "ERROR";
    }

    let sum = 0;
    // Check if first argument is larger then second. If so, swap the 2 numbers
    if (start > end) {
        let number = start;
        start = end;
        end = number;
    }

    // Loop through all numbers between start and end, including end
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
