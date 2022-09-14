/*Создайте класс для строк, который добавлял бы информацию о количестве слов (по пробелам) и предложений в строке (по точкам), 
а также методы для получения строк и предложений в виде массивов. У этого класса должны
 поддерживаться все методы и свойства, как у обычной строки. Должно получиться как-то так:

const x = new StatisticString('Мама мыла раму. Лама рыла яму')
x.sentences === 2  // true
x.getSentences()  // ['Мама мыла раму', 'Лама рыла яму']
x.words === 6  // true
x.getWords()  // ['Мама', 'мыла', 'раму', 'Лама', 'рыла', 'яму']
x.length  // 30
x.includes('Мама')  // true */

class StatisticString {
    constructor(inputString) { //определяем конструктор класса
        this.inputString = inputString;
    }
    sentences() {
        return this.inputString.split(".").length - 1;
    }


}

const x = new StatisticString('Мама мыла раму. Лама рыла яму');
console.log(x.sentences);