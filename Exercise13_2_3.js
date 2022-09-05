//Напишите код для вывода в консоль всех собственных свойств объекта obj.

const obj = {};

Object.getOwnPropertyNames(obj).forEach(console.log);

//Удалите прототип у объекта.
console.log(Object.getPrototypeOf(obj));
Object.setPrototypeOf(obj, null);
console.log(Object.getPrototypeOf(obj));

//Добавьте всем объектам в JavaScript метод hello, который бы выводил в консоль 'Hello world!'.
Object.prototype.hello = () => console.log('Hello world!');
