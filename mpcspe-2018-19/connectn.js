const scanf = require('scanf');

let input = scanf('%d %d %d');
let table = [];

for (let i = 0; i < input[0]; i++) {
    table[i] = [];
    for (let j = 0; j < input[1]; j++) {
        table[i][j] = scanf('%s');
    }
}

for (let i = input[0] - 1; i >= 0; i--) {
    for (let j = 0; j < input[1]; j++) {
        let [count_hori, count_verti, count_diag_r, count_diag_l] = [1, 1, 1, 1];
        if (table[i][j] != "O") {
            for (let k = 1; k <= input[2]; k++) {
                if (table[i][j] == table[i][j + k]) {
                    count_hori++;
                }
                if (i - k >= 0 && table[i][j] == table[i - k][j]) {
                    count_verti++;
                }
                if (i - k >= 0 && table[i][j] == table[i - k][j + k]) {
                    count_diag_r++;
                }
                if (i - k >= 0 && j - k >= 0 && table[i][j] == table[i - k][j - k]) {
                    count_diag_l++;
                }
            }
            if (count_hori == input[2] || count_verti == input[2] || count_diag_r == input[2] || count_diag_l == input[2]) {
                if (table[i][j] == "R") {
                    console.log("RED WINS");
                    throw "STOP";
                } else if (table[i][j] == "B") {
                    console.log("BLUE WINS");
                    throw "STOP";
                }
            }
        }
    }
}

console.log("NONE");