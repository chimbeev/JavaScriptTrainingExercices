/*Вам дан класс автомобиля. У него есть текущая передача, которая влияет на скорость движения.
В данной реализации мы можем указать в качестве значения передачи что угодно. Если укажем, например, null или строку,
скорее всего, функция drive, использующая этот атрибут, сломается. Ваша задача — не допустить этого!
Защитите атрибут gear, чтобы в него можно было записать только правильные значения.
Используйте приватную переменную и напишите геттеры/сеттеры.
const car = new Car()
car.gear  // 1
car.gear = 5  // ok
car.gear  // 5
car.gear = null  // Error!
car.gear  // 5
*/

class Car {

    arrayOfGear = [-1, 0, 1, 2, 3, 4, 5]; //создаем массив возможных значений
    // Может принимать только значения -1, 0, 1, 2, 3, 4, 5

    set gear(value) { //Сеттер устанавливает значение защищенной переменной
        if (this.contains(this.arrayOfGear, value)) this._gear = value; else console.log('error !');//проверяем входит ли в массив и если да то меняем _gear
    }

    get gear() { //геттер возвращает значение защищенной переменной
        return this._gear;
    }

    contains(arr, elem) { //выполняет поиск в массиве значений. True если есть в массиве

        return arr.find((i) => i === elem) != undefined;
    }

    constructor() { //конструктор вызывается при создании обьекта и инициализирует защищенную переменную
        this._gear = 1;
    }

    drive() {
    }
}

const car = new Car();
console.log(car.gear);  // 1

car.gear = 5;  // ok
console.log(car.gear);  // 5

car.gear = 10;  // Error!
console.log(car.gear);  // 5

car.gear = null;  // Error!
console.log(car.gear);  // 5