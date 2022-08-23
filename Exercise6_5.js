//Напишите функцию transformUpvotes(arr), которая принимает массив сокращенных записей количества 
//лайков ['10k', '2.3k', '5k', '32', '28.4k'] и возвращает массив чисел [10000, 2300, 5000, 32, 28400].

function transformUpvotes(arr) {
        let newArray = arr.map(function calc(item) {
        if (item.slice(-1) == 'k') //Где есть на конце k,
        { item = parseFloat(item.slice(0, -1)) * 1000 }; // там преобразуем в число и умножаем на 1000
        return item;
    });
    return newArray;
};

const arr = ['10k', '2.3k', '5k', '32', '28.4k'];
console.log(`${transformUpvotes(arr)}`);

