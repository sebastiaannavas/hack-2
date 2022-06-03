/**
 * mediante el loop for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a,"n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a,"n"]
 */
let str = "fooziman";
let result = [];

let idx = 0;
let strLen = str.length;
for(; idx < strLen; idx++){
    result[idx] = str[idx];
}

//export result
module.exports = result;