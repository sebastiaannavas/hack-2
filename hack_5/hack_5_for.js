/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let idx = 0;
let number = 7;
for(; idx <= 3; idx++) {
    result[idx] = number;
    number -= 2;
}

//export result
module.exports = result;