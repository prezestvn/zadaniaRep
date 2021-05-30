let i = 0;

function countHello(num) {
    const notification = setInterval(() => {
        console.log(`Hello ${i + 1}`)
        i = i + 1;
        if (i === num) {
            clearInterval(notification);
        }
    }, 1000);
}

countHello(10);


