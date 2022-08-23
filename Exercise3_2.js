//Напишите программу, которая много раз запрашивает у пользователя число, пока он не введет 0 — тогда выводится сумма этих чисел.

let inputNum = 1;
let sum = 0;
while (inputNum != 0){
    inputNum = parseInt(prompt("Введите число"));
    sum = sum + inputNum;
};
if (inputNum == 0) alert(`Сумма введенных ранее чисел равна ${sum}`);
