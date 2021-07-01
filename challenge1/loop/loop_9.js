const scanf = require('scanf');

// input
// let num = 10;

console.log("Enter Number:");
let num = scanf("%d");

let str = "";
for(let i = 0; i < num + (num-1); i++){
    for(let j = 0; j < num; j++){
        if(j == i || j == ((num-1) - i) + (num-1)){
            str += "O "
        } else if(j > i || j > ((num-1) - i) + (num-1)){
            //do nothing
        } else{
            str += "X ";
        }
    }
    str += "\n";
}
console.log(str);