const tablica = [10, 10, 10, 70];
let sum = 0;

function sumuj(tab) {
    for (let t of tab) {
        sum = sum + t;
    }
    return sum;
}

console.log(sumuj(tablica))