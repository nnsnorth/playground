const scanf = require('scanf');

// input
// let base = 4;
// let multiplier = 5;

console.log("Enter Number:");
let base = scanf("%d");

console.log("Enter Multiplier:");
let multiplier = scanf("%d");

let sum = 0;
for(let i = 2; i <= base; i++){
    for(let j = 1; j <= multiplier; j++){
        sum = sum + (i*j);
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
console.log("Sum = ",sum);