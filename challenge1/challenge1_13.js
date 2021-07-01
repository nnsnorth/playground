const scanf = require('scanf');

let num;
console.log("Enter Number of Bricks:");
num = scanf("%d");

let sum = 0;
let level = 0;
let remain = 0;
let i = 1;
do{
    sum += i*i;
    level = i;
    remain = num - sum;
    i++;
    if(remain == i*i){
        level += 1;
        remain = 0;
    }
}while(sum + (i*i) < num)

console.log(`Pyramid high ${level} level(s), reamain ${remain} brick(s)`);