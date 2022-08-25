//Напишите функцию countChars(str), которая принимает строку и возвращает количество букв в этой строке.
//Например: countChars('Арарат') должен вернуть: { а: 3, р: 2, т: 1 }.

let strIn = 'проверка помощи прокурора';


function countChars(str) {
    str = str.toLowerCase();
    let strLength = str.length; //получаем длину строки
    let resultObj = {}; //возвращаемый обьект
    for (i=0; i<strLength; i++) {
        let stringsearch = str[i]; //берем следующий символ в строке
        for(var count=-1,index=-2; index != -1; count++,index=str.indexOf(stringsearch,index+1) ); //производим подсчет символа в строке
        //Далее производим поиск в обьекте по этому символу, если есть такой символ, то не записываем. Если нет такого символа, то записываем в обьект.
        if (!(Object.keys(resultObj).includes(stringsearch))) {resultObj[stringsearch]=count};
    }

    return resultObj;
}

console.log(countChars(strIn));
strIn = 'Арарат';
console.log(countChars(strIn));