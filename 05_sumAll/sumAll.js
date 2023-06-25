const sumAll = function(number1, number2) {
    if (number1 < 0 || number2 < 0 || typeof(number1) != 'number' || typeof(number2) != 'number') {
        return "ERROR"
    } 
    let firstInteger = 0;
    let secondInteger = 0;
    if (number1 < number2) {
        firstInteger = number1;
        secondInteger = number2;
    }
    else {
        firstInteger = number2;
        secondInteger = number1;
    }
    let sum = 0;
    for (let i = firstInteger; i <= secondInteger; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
