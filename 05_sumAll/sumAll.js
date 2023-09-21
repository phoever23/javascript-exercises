const sumAll = function(m,n) {
    if (m < 0 || n < 0){return "ERROR"};

    if (Number.isInteger(m) && Number.isInteger(n)) {
        let sum = 0;
        const biggerNum = Math.max(m,n);
        const smallerNUm = Math.min(m,n);
        for (let i = smallerNUm; i <= biggerNum; i++) {
            sum += i;        
        }
        return sum
    } else {return "ERROR"};
}
// Do not edit below this line
module.exports = sumAll;
