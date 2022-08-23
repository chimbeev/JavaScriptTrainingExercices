//Напишите функцию createAdder(a), которая возвращает функцию addA, которая принимает b и возвращает a + b.

const createAdder = (a) => {
    return addA = (b) => {return (a + b)};
};

let f = createAdder(5);
let result = f(6);

console.log(result);
