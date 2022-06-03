/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [];

let idx = 0;
let number = 5;
for(; idx < 5; idx++) {
    result[idx] = number--;
}

//export result
module.exports = result;