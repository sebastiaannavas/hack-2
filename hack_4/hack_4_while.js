/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let idx = 0;
let number = 0;
while(idx <= 3) {
    number++;
    number % 2 != 0 ? result[idx] = number : idx --;
    idx++;
}

//export result
module.exports = result;