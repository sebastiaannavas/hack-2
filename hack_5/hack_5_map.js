/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let arr = [... Array(8).keys()];
arr.reverse().map( num => num % 2 == 1 ? result.push(num) : 0);

//export result
module.exports = result;