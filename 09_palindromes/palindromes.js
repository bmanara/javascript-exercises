const palindromes = function (string) {
    let arr = string.toLowerCase().split("");
    arr = arr.filter((letter) => {
        return /^[a-z0-9]$/.test(letter);
    })

    let arr2 = [...arr].reverse();
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr2[i]) {
            return false;
        }
    }
    return true;

    // Second try after seeing solution,
    // let processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    // return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;
