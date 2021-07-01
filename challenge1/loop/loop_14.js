const scanf = require('scanf');

let count = 0;
let even = 0;
let odd = 0;
while(count < 3){
    console.log("Enter number:");
    let num = scanf('%d');

    if(num%2 == 0 && num > 0){
        //even
        even += num;
    } else if(num%2 > 0 && num > 0){
        //odd
        odd += num;
    }

    if(num < 0){
        count++;
    } else{
        count = 0;
    }
}

console.log("Sum of odd number = ", odd);
console.log("Sum of even number = ", even);