/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = []; 

let arr = [... Array(8).keys()];
arr.map( num => num % 2 == 1 ? result.push(num) : 0);

// Also: for creating not empty arrays
// new Array(8).fill(null); || result.length = 8; result.fill(null);

//export result
module.exports = result;