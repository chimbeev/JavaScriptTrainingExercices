//Напишите функцию createMultiplier, которая:
// 1) принимает функцию и число;
// 2) возвращает функцию, которая, в свою очередь, возвращает результат умножения результата вызова функции-аргумента и числа-аргумента.

function sum(x, y) {
    debugger
    return x + y
}

function createMultiplier(func, multiply) { // функция принимает два аргумента: функция func и число multiply, на которое мы умножим результат выполнения func
    return function (...args) { // ...args - с помощью этой конструкции мы записываем все переданные в функцию аргументы в переменную args
        return func(...args) * multiply // вызываем функцию func, передав ей все аргументы из args, и умножаем результат выполнения func на число multiply
    }
}

const fiveMultiplier = createMultiplier(sum, 5)
alert(fiveMultiplier(2, 3));
// sum(2, 3) * 5 = (2 + 3) * 5 = 25