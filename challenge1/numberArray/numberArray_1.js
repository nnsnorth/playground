const scanf = require('scanf');

let dimention = [11, 11];
while(dimention[0] > 10 || dimention[1] > 10){
    console.log("Enter size (max 10*10): ")
    dimention = scanf('%d %d');
}



let A = [];
let B = [];
let sum = [];

for(let i = 0; i < dimention[0]; i++){
    for(let j = 0; j < dimention[1]; j++){
        console.log(`A[${i}][${j}] = `);
        if(!A[i]){
            A[i] = [];
        }
        A[i][j] = scanf('%d');
    }
}

for(let i = 0; i < dimention[0]; i++){
    for(let j = 0; j < dimention[1]; j++){
        console.log(`B[${i}][${j}] = `);
        if(!B[i]){
            B[i] = [];
        }
        B[i][j] = scanf('%d');
    }
}

let str = "";
for(let i = 0; i < dimention[0]; i++){
    for(let j = 0; j < dimention[1]; j++){
        if(!sum[i]){
            sum[i] = [];
        }
        sum[i][j] = A[i][j] + B[i][j];
        str += `${sum[i][j]} `;
    }
    str += "\n"
}

console.log("\nAnswer:");
console.log(str);