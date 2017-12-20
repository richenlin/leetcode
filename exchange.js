// Do not create new variables, exchange the value of two variables

// var a = 1, b = 2 ==> b = 1, a = 2

//es6解构
function exchange(x, y) {
    [y, x] = [x, y];
    return [x, y];
}

// 位运算 利用 a ^ b ^ b == a
function exchange2(x, y){
    x ^= y;
    y ^= x;
    x ^= y;
    return [x, y];
}

console.log(exchange(1, 2))
console.log(exchange2(1, 2))