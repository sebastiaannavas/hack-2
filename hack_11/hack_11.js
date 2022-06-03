/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

let parseArray = ['one', 'two', 'three', 'four', 'five']
numberArray = numberArray.map( (num, idx) => idx % 2 == 0 ? num = parseArray[idx] : num);

let strKeys = ['o', 'b', 'a', 'x', 'e'];
let strValues = ['0', 'B', '@', 'X', '3'];

stringArray = stringArray.map( str => {
    let chars = [...str];
    let newStr = chars.map( char => {
        let fix = strKeys.indexOf(char);
        return fix != -1 ? char = strValues[fix] : char;
    });
    if(newStr[0] == 'B') {
        switch(newStr[newStr.length - 1]){
            case 'r': newStr.splice(newStr.indexOf('@'), 1, 'a');
                break;
            case 'z': newStr.splice(newStr.indexOf('B'), 1, 'b');
                break;
        }
    }
    return newStr.join('');
});

result = ['h@ck', ...numberArray, 'h@ck', ...stringArray, 'h@ck'];

// Method 2
// let idx = 0, strArrLen = stringArray.length;
// for(; idx < strArrLen; idx++) {
//     let i = 0, chars = [...stringArray[idx]], strLen = chars.length;
//     for(; i < strLen; i++){
//         switch(chars[i]){
//             case 'o':
//                 chars[i] = '0';
//                 break;
//             case 'b':
//                 chars[strLen - 1] == 'r'
//                 ? chars[i] = 'B'
//                 : chars[chars.indexOf('a')] = '@';
//                 break;
//             case 'x':
//                 chars[i] = 'X';
//                 break;
//             case 'e':
//                 chars[i] = '3';
//                 break;
//         }
//         stringArray[idx] = chars.join('');
//     }
// }

//export result
module.exports = result;