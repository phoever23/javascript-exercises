const removeFromArray = function(array,...r) {
    let newArray = array
    r.forEach(element => {
        newArray = newArray.filter(item => item !== element)
    });
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
