// Determine whether an integer is a palindrome. Do this without extra space.
// 题目翻译: 给定一个数字，要求判断这个数字是否为回文数字. 比如121就是回文数字，122就不是回文数字.

// 解题思路: 这道题很明显是一道数学题,计算一个数字是否是回文数字，我们其实就是将这个数字除以10，保留他的余数，下次将余数乘以10，加上这个数字再除以10的余数.

// 需要注意的点:

// 负数不是回文数字.
// 小于10的数字是回文数字.
// 时间复杂度: logN
function palindrome(x) {
    if (x < 0) { return false }
    if (x < 10) { return true }
    let temp = 0;
    let y = x;
    while (y > 0) {
        temp = temp * 10 + y % 10;
        y = parseInt(y / 10);
    }
    return temp === x ? true : false;
}

function palindrome1(x) {
    if (x < 0) { return false }
    if (x < 10) { return true }
    let str = x.toString(); //>Number.MAX_SAFE_INTEGER,  (12345678987654321).toString() = 12345678987654320 (⊙﹏⊙)b
    let len = str.length, flag = 0;
    for (let i = 0; i < len; i++) {
        console.log(str[i], str[len - (i + 1)], i, str[i] == str[len - (i + 1)])
        if (str[i] == str[len - (i + 1)]) {
            flag ++;
        } else {
            flag --;
        }
    }
    return flag === str.length;
}

console.log(palindrome(12321))
console.log(palindrome1(12321))

