const scanf = require('scanf');

let input = scanf('%d %d');
let table = [];
let v = [];
let d;

for (let i = 0; i < input[0]; i++) {
    table[i] = [];
    for (let j = 0; j < 3; j++) {
        table[i][j] = scanf('%d');
    }
}

for (let i = 0; i < input[0]; i++) {
    v[i] = table[i].reduce((total, num) => total * num);
}

v.sort((a, b) => b - a);
d = v[0] - input[1];
console.log(d);