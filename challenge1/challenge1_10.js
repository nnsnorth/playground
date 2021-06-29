// there are 2 cases: odd & even input

// input
let num = 4;

let str = "";
for(let i = 0; i < num + (num-1); i++){
    for(let j = 0; j < num + (num-1); j++){
        if( j == num-1 ||
            i == num-1 ||
            (   i + j >= num-1 &&
                j - i <= num-1 &&
                i - j <= num-1 &&
                i + j <= (num-1) * 3
            )
        ){
            str += "O "
        } else{
            str += "  "
        }
    }
    str += "\n";
}
console.log(str);