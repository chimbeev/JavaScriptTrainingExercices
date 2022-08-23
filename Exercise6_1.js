//Напишите функцию match, которая принимает 2 строки и возвращает true, если эти строки равны без учета регистра. 
//Например, match('hEllO', 'HELLo') должен вернуть true.

function match(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()) return true; else return false;
}

console.log(match('hEllO', 'HELLo'));
console.log(match('House', 'Tree!'));