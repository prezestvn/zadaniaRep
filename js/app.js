var liczba = prompt("Podaj liczbę");
liczba = parseInt(liczba);
var i = 1;
var result = 1;

for (i; i <= liczba; i++) {
    result = i * result
}

console.log(result);