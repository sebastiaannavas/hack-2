/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let idx = 0;
let number = 7;
while(idx <= 3) {
    result[idx] = number;
    number -= 2;
    idx++;
}

//export result
module.exports = result;