//Напишите функцию getInfo(persons), которая принимает массив объектов, описывающих человека, имеющих поля {name, age}, 
//и возвращает объект со средним возрастом и именем самого старшего человека.


let arrHumans = [];

arrHumans[0] = {
    name: 'Andrey',
    age: 18
};
arrHumans[1] = {
    name: 'Sergey',
    age: 23
};
arrHumans[2] = {
    name: 'Olya',
    age: 38
};

arrHumans[3] = {
    name: 'Tanya',
    age: 21
};

arrHumans[4] = {
    name: 'Kolya',
    age: 50
};



function getInfo(persons) {
    let middleAge;
    const sum = persons.reduce(function(acc, obj) {return acc + obj.age; }, 0);//находим сумму значений age
    const length = persons.length; 
    middleAge = sum / length; //вычисляем средний возраст
    

    const max = persons.reduce(function(acc, obj) { return (acc > obj.age ? acc : obj.age) }, 0);//находим максимум из значений age
    
    const nameOld = persons.find(person => person.age === max).name; //находим имя самого старшего

    const result = { //создаем обьект для передача
        name: nameOld, //имя самого старшего
        age: middleAge //средний возраст
    };

    return result;
}

const resultObj = getInfo(arrHumans);
console.log(`Результат: Средний возраст ${resultObj.age}. Имя самого старшего человека ${resultObj.name}`);