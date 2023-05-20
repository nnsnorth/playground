const scanf = require('scanf');

console.log("Enter string separated by single space:");
let y = scanf("%s");
let p = scanf("%s");
let ans;

if (y.endsWith("ex")) {
    ans = y.concat(p);
} else if (y.endsWith("e")) {
    ans = y.concat("x", p);
} else if (y.charAt(y.length - 1).match(/[aiou]/)) {
    ans = y.slice(0, y.length - 1).concat("ex", p);
} else {
    ans = y.concat("ex", p);
}

console.log("y: ", y);
console.log("p: ", p);
console.log("ans: ", ans);