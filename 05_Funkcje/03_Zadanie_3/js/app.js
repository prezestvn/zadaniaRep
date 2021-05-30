let percent = 0;

console.log(calculateTip(1000, "Bardzo dobra obsługa"));
console.log(calculateTip(1000));
console.log(calculateTip(1000, "Dobra obsługa"));
console.log(calculateTip(1000, "Chuj"));
console.log(calculateTip(1000, "Średnia obsługa"));
console.log(calculateTip(1000));
console.log(calculateTip(1000, "Zła obsługa"));


function calculateTip(amount, rating) {
    // console.log(amount);
    // console.log(rating);

    switch (rating) {
        case "Bardzo dobra obsługa":
            percent = 25;
            break;
        case "Dobra obsługa":
            percent = 20;
            break;
        case "Średnia obsługa":
            percent = 15;
            break;
        case "Zła obsługa":
            percent = 0;
            break;
        default:
            percent = "error";
            break;
    }

    if (percent === "error") {
        return "Opis nieczytelny";
    } else {
        return amount * percent / 100;
    }
}
