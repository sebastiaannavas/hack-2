/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];

let idx = 0;
while(idx < 5) {
    result[idx] = idx + 1;
    idx++;
}

//export result
module.exports = result;