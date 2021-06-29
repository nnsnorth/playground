const scanf = require('scanf');

let size;
do{
    console.log("Enter Number:");
    size = scanf("%d");
} while(size < 0);

for(let i = 0; i <= size; i++){
    let str = `${i}! = `;
    let fac = 1;
    if(i == 0){
        console.log("0! = 1");
    } else if(i == 1){
        console.log("1! = 1");
    } else{
        for(let j = i; j > 0; j--){
            str += `${j}`
            if(j != 1){
                str += ` x `
            } else{
                str += ` = `
            }
            fac *= j;
        }
        str += `${fac}`
        console.log(str);
    }
}