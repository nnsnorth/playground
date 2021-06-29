let num;
do {
    num = Math.floor(Math.random() * 100);
    console.log("num: ", num);
    if(num >= 5 && num <= 10){
        console.log("STOP!!")
    }
} while(num < 5 || num > 10)