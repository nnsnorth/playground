const scanf = require('scanf');

let num = 0;
while(num < 5 || num > 10){
    // num = Math.floor(Math.random() * 100);
    // console.log("num: ", num);
    console.log("Enter Number:");
    num = scanf("%d");
}
console.log("STOP!!");