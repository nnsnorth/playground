const scanf = require('scanf');

let input = scanf('%d');

let ans = hail(input, []);
console.log("result array: ", ans);

let sum = ans.reduce((total, num) => total + num);
console.log("sum: ", sum)

function hail(n, arr) {
    arr.push(n);
    if (n == 1) {
        n = 1;
    } else if (n % 2 == 0) {
        n = n / 2;
        hail(n, arr);
    } else if (n % 2 == 1) {
        n = (3 * n) + 1;
        hail(n, arr);
    }
    return arr;
}