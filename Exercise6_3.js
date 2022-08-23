//Напишите функцию reverseAndNegate(arr), которая принимает массив чисел и возвращает перевернутый отрицательный массив.
const arr = [1, 2, 3, 4, 5];
const arr1 = [56, -22, 89, -21, 5];
function reverseAndNegate(arr) {
    let newArray = arr.reverse();//получаем обратный массив
    newArray = newArray.map(item => item*(-1));//получаем отрицательный масиив       
    return newArray;
}

console.log (`${reverseAndNegate(arr)}`);
console.log (`${reverseAndNegate(arr1)}`);