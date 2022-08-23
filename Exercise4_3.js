//Напишите функцию repeatWord(word, count), которая принимает слово и количество раз для его повторения. 
//Например, если вызвать repeatWord('слово', 3) функция напечатает "слово1, слово2, слово3" на одной строке.

const repeatWord = (word, count) => {
    let str ='';
    for (let i = 1; i <= count; i++) {
        str = str + word + i;
        if (i < count) str = str + ', ';
    }
    console.log(`${str}`);
}

repeatWord('sea', 4);
repeatWord('Spain', 7);