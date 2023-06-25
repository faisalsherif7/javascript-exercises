const removeFromArray = function() {

    let array = arguments[0];

    for (let j = 1; j <= arguments.length; j++) {
        let currentArgument = arguments[j];
        for (let i = 0; i < array.length; i++) {
            let currentItem = array[i];
            if (currentItem === currentArgument) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
