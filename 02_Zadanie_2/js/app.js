var x = prompt("Podaj x");
var y = prompt("Podaj y");

x = parseInt(x);
y = parseInt(y);

var result = 0;

if (y > x) {

    for (x; x <= y; x++) {
        result = result + x;
    }
}

console.log(result);
