var tablica = [];
for (var i = 0; i < 10; i++) {
    tablica[i] = losuj();
}

console.log(`Tablica = ${tablica}`)

for (var i = 0; i < tablica.length; i++) {
    if (tablica[i] % 2) {
        tablica.splice(i, 1, parzysta(tablica[i]));
    }
}

console.log(`Zmieniona tablica = ${tablica}`)

function losuj() {
    var los = Math.floor(Math.random() * 60 + 1);
    return los;
}

function parzysta(liczba) {
    var dodaj = liczba + 1;
    return dodaj;
}




