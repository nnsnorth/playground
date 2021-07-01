const scanf = require('scanf');

// input
// let num = 5;

console.log("Enter Size:");
let size = scanf("%d");

let width;
width = size%2 > 0 ? width = size : width = size-1;

let isOdd = size%2 > 0 ? true : false;

let str = "";
for(let i = 0; i < size; i++){
    for(let j = 0; j < width; j++){
        if(isOdd){
            if( i + j == Math.floor(width/2) ||
                j - i == Math.floor(width/2) ||
                i - j == Math.floor(width/2) ||
                i + j == Math.floor(width/2) * 3
            ){
                str += "* "
            } else{
                str += "- "
            }
        } else{
            if( i + j == Math.floor(width/2) ||
                j - i == Math.floor(width/2) ||
                (i-1) - j == Math.floor(width/2) ||
                (i-1) + j == Math.floor(width/2) * 3
            ){
                str += "* "
            } else{
                str += "- "
            }
        }
    }
    str += "\n";
}
console.log(str);