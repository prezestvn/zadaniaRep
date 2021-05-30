const numbers = [4, 4, 1, 2, 5, 40];

var sum = 0;

numbers.forEach(c => {
    sum = sum + c;
    return sum;
})

var result = sum / numbers.length;

console.log(`Numbers = [${numbers}]`);


console.log(`Suma to ${sum} a średnia to ${result}`);