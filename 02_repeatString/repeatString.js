const repeatString = function(string,num) {
    let outcome = "";
    if (num < 0) {return "ERROR"};
    for (let i = 0; i < num; i++) {
        outcome +=string;        
    }
    return outcome
};

// Do not edit below this line
module.exports = repeatString;
