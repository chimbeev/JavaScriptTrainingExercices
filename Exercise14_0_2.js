//Создайте класс Collection, наследующий методы класса Array с помощью ES6 классов, тело класса оставьте пустым

class Collection extends Array {

}

let col = new Collection();
col.push(1);
col.push(2);

console.log(col.length);