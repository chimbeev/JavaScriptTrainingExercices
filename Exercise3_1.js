//Напишите программу, которая выводит в консоль сначала нечетные числа от 0 до 5, а потом четные числа от 5 до 10.
const num = 0;
for (let i = 0; i < 6; i++) { if ((i % 2) !== 0) console.log(`Нечетное число ${i}`) };
for (let i = 5; i < 11; i++) { if ((i % 2) == 0) console.log(`Четное число ${i}`) };


