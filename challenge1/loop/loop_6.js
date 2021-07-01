const scanf = require('scanf');

// input
// let num = 4;

console.log("Enter Number:");
let num = scanf("%d");

let str = "";
for(let i = 0; i < num + 2; i++){
    for(let j = 0; j < num + 2; j++){
        if(i == 0 || i == num + 1){
            str += "O "
        } else if(j == 0 || j == num + 1){
            str += "O "
        } else{
            str += "X ";
        }
    }
    str += "\n";
}
console.log(str);