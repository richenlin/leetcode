// 首先，学习一下罗马数字，参考https://zh.wikipedia.org/wiki/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97

// 罗马数字是最古老的数字表示方式，比阿拉伯数字早2000多年，起源于罗马

// 罗马数字有如下符号：

// 基本字符	I	V	X	L	C	D	M
// 对应阿拉伯数字	1	5	10	50	100	500	1000

// 计数规则：
// 相同的数字连写，所表示的数等于这些数字相加得到的数，例如：III = 3
// 小的数字在大的数字右边，所表示的数等于这些数字相加得到的数，例如：VIII = 8
// 小的数字，限于（I、X和C）在大的数字左边，所表示的数等于大数减去小数所得的数，例如：IV = 4
// 正常使用时，连续的数字重复不得超过三次（本题为输入罗马数字，假定输入合法）
// 在一个数的上面画横线，表示这个数扩大1000倍（本题只考虑3999以内的数，所以用不到这条规则）

// 其次，罗马数字转阿拉伯数字规则（仅限于3999以内）：
// 从前向后遍历罗马数字，如果某个数比前一个数小，则加上该数。反之，减去前一个数的两倍然后加上该数

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (sc) {
    let match = function (c) {
        switch (c) {
            case 'I':return 1;
            case 'V':return 5;
            case 'X':return 10;
            case 'L':return 50;
            case 'C':return 100;
            case 'D':return 500;
            case 'M':return 1000;
        }
        return 0;
    }
    let ans = match(sc[0]), pre, cur;
    console.log("ans=" + ans)
    for (let i = 1; i < sc.length; i++) {
        ans += match(sc[i]);
        if (match(sc[i - 1]) < match(sc[i])) {
            ans -= match(sc[i - 1]) * 2;
        }
    }
    return ans;
};


console.log(romanToInt('IV'))