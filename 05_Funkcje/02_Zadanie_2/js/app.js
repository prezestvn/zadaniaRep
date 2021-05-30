var x = prompt("Podaj liczbę 1");
var y = prompt("Podaj liczbę 2");
var z = prompt("Podaj liczbę 3");

x = parseInt(x);
y = parseInt(y);
z = parseInt(z);

var tablica = [];

tablica.push(x, y, z);

console.log(tablica);

let max = 0;

tablica.forEach(e => {
    if (max < e) {
        max = e;
    }
    return max;
})

console.log(`Max liczba to ${max}`)