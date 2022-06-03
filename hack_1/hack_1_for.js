/**
 * mediante el loop for agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let result = [];

let idx = 0;
for(; idx <= 5; idx++) {
    result[idx] = idx;
}

//export result
module.exports = result;