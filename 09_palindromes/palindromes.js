const palindromes = function (input) {
    return input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split("").filter(item => item !== " ").join("")
    === input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split("").filter(item => item !== " ").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
