//Напишите функцию createCounter, которая принимает число и возвращает функцию-счётчик, начинающую отсчет с этого числа.
/*
const countFrom5 = counter(5)
countFrom5()  // 5
countFrom5() // 6
countFrom5() // 7

const countFrom0 = counter(0)
countFrom0()  // 0
countFrom0()  // 1
countFrom0()  // 2
*/

function createCounter(start) {
    let x = start - 1
    return function counter() {
        x += 1
        return x
    }
}
const countFrom5 = createCounter(5);
alert(countFrom5(5));
alert(countFrom5(5));
alert(countFrom5(5));
