// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output:  321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

var num = 123;
// var num = -123;
// var num = 1563847412;
function reverse(x) {
    let y = Math.abs(x);
    let result = 0;
    while(y > 0) {
        result = result * 10 + y % 10;
        y = parseInt(y / 10);
    }
    result = x < 0 ? -result : result;
    return result >= -Math.pow(2, 31) && result <= Math.pow(2, 31) -1 ? result : 0;
    
}

function reverse2(x) {
    let symbol = '+';
    let arr = (x + '').split('');
    if(arr[0] == '-'){
        symbol = arr.shift(); 
    }
    arr = arr.reverse();
    while(arr[0] == 0){
        arr.shift();
    }
    arr.unshift(symbol);
    let y = parseInt(arr.join(''));
    return y >= -Math.pow(2,31) && y <= Math.pow(2,31) - 1 ? y : 0;
}

console.log(reverse(num))
console.log(reverse2(num))