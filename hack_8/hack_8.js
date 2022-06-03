/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

// Method 1
result = arr.map( str => {
    switch(str[0]){
        case 'b':
            let fix = [...str];
            fix.splice(fix.indexOf('a'), 1, '@')
            return fix.join('');
        case 'q':
            return str.toUpperCase();  
    }
});
result = result.filter(str => str !== undefined);

// Method 2
// let idx = 0, arrLen = arr.length;
// for(; idx < arrLen; idx++){
//     let str = [... arr[idx]];
//     switch(str[0]){
//         case 'b': 
//             str.splice(str.indexOf('a'), 1, '@');
//             result.push(str.join(''));
//             break;
//         case 'q': 
//             result.push(str.join('').toUpperCase());  
//             break;
//     }
// }

//export result
module.exports = result;