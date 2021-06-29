const scanf = require('scanf');

// input
// let base = 9;

console.log("Enter Number:");
let base = scanf("%d");

for(let i = 1; i <= 12; i++){
    console.log(`${base} x ${i} = ${base*i}`);
}