const removeFromArray = function() {
    let array = arguments[0];

    // Loop through all arguments after first argument (array)
    for (let i = 1; i < arguments.length; i++) {
        // Find element in the array and get the index of said element
        let element = arguments[i];
        let index = array.indexOf(element);

        // If element is found in the array, remove from array
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
