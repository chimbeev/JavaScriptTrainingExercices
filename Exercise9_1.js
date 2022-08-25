//Напишите функцию countEverySecond(n), которая каждую секунду печатает в консоль цифру, начиная с 1 и заканчивая {n}.

function countEverySecond(n) {
    let current = 1;

    let timerId = setInterval(function() {
        console.log(current); //вывести счетчик на экран
        if (current == n) { //если достугнута граница то останов вывода
            clearInterval(timerId);
        }
        current++;//увеличить счетчик
    }, 1000); //задержка 1с
}


countEverySecond(10);