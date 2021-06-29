const scanf = require('scanf');

// input
// let num = 4;

console.log("Enter Number:");
let num = scanf("%d");

let str = "";
for(let i = 0; i < num; i++){
    for(let j = 0; j < num; j++){
        if(j <= i){
            str += `${j+1} `
        } else{
            str += "X ";
        }
    }
    str += "\n";
}
console.log(str);