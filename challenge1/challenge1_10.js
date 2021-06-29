const scanf = require('scanf');

// input
// let num = 5;

console.log("Enter Number:");
let num = scanf("%d");

let str = "";
for(let i = 0; i < num + (num-1); i++){
    for(let j = 0; j < num + (num-1); j++){
        if( i + j >= num-1 &&
            j - i <= num-1 &&
            i - j <= num-1 &&
            i + j <= (num-1) * 3
        ){
            str += "O "
        } else{
            str += "  "
        }
    }
    str += "\n";
}
console.log(str);