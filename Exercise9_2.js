//Напишите функцию countEverySecond(n), которая каждую секунду печатает в консоль цифру, начиная с 1 и заканчивая {n}.
// Пояснение к заданию: Если в предыдущем задании вы использовали setInterval, перепишите эту функцию с помощью setTimeout  (или наоборот).

function countEverySecond(n) {
    let current = 1;

    setTimeout(function go() {
        console.log(current);
        if (current < n) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

// использование:
countEverySecond(10);
