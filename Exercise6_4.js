/*Напишите функцию, которая принимает массив чисел и сначала к каждому чётному числу прибавляет 4, 
у каждого нечётного отнимает 2, потом убирает из массива числа, делящиеся на 13 без остатка и возвращает сумму оставшихся чисел.*/


const arr = [15, 2, 3, 5, 6];
function calculate(arr) {

let newArray = arr.map(function calc(item) { 
        if ((item % 2) == 0) { item = item + 4 } else {item = item - 2};
        if ((item % 13) == 0) { item = 0 };
        return item;
    }); 
    
    let result = newArray.reduce((sum, current) => sum + current, 0);
    return result;
}

console.log(`${calculate(arr)}`);