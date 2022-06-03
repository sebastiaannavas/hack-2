/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let idx = 0;
let number = 0;
for(; idx <= 3; idx++) {
    number++;
    number % 2 != 0 ? result[idx] = number : idx--;
}

//export result
module.exports = result;