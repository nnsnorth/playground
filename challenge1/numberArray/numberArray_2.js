const scanf = require('scanf');

console.log("Enter number of element(s):");
let element = scanf('%d');

let input = [];
console.log("Input number:")
for(let i = 0; i < element; i++){
    input[i] = scanf("%d");
}

console.log("Minus:");
let minus = scanf("%d");

let result = input.map(num => num-minus);
let str = result.join(" ");
console.log("Number in array: ", str);

let closeZero = Number.MAX_SAFE_INTEGER;
for(let i = 0; i < result.length; i++){
    if(Math.abs(result[i]) < Math.abs(closeZero)){
        closeZero = result[i];
    } else if(Math.abs(result[i]) == Math.abs(closeZero)){
        closeZero = "ERROR";
    }
}

if(closeZero !== "ERROR"){
    console.log("Most approximate to zero: ", closeZero);
} else{
    console.log("Error to find most approximate to zero");
}
