/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];

let idx = 0;
let number = 5;
while(idx < 5) {
    result[idx] = number--;
    idx++;
}

//export result
module.exports = result;