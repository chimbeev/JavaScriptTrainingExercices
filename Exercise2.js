/*Напишите программу, которая переводит температуру по Цельсию в температуру по Фаренгейту. 
Она должна спросить у пользователя количество градусов по Цельсию с помощью prompt 
и ответить: {X} градусов по Цельсию равны {Y} градусам по Фаренгейту.*/
const inputTemp = prompt("Введите температуру по Цельсию");
let FarangeitTemp = inputTemp *(9/5) + 32;
alert(`${inputTemp} градусов по Цельсию равны ${FarangeitTemp} градусам по Фарангейту.`);
