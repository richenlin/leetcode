// 利用栈来进行十进制转二进制、八进制、十六进制
const Stack = require('./Stack.js');
/**
 * 十进制转二进制
 * 
 * @param {any} decNumber 
 * @returns 
 */
function divideBy2(decNumber) {
    let remStack = new Stack();
    let rem, binaryString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

console.log(divideBy2(233));

/**
 * 十进制转其他进制
 * 
 * @param {any} decNumber 
 * @param {any} base 
 */
function baseConverter(decNumber, base) {
    let remStack = new Stack();
    let rem, baseString = '', digits = '0123456789ABCDEF';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}

console.log(baseConverter(100, 16))