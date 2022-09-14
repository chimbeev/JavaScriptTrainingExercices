/*Создайте класс для строк, который добавлял бы информацию о количестве слов (по пробелам) и предложений в строке (по точкам),
а также методы для получения строк и предложений в виде массивов. У этого класса должны поддерживаться все методы
и свойства, как у обычной строки. Должно получиться как-то так:

const x = new StatisticString('Мама мыла раму. Лама рыла яму')
x.sentences === 2  // true
x.getSentences()  // ['Мама мыла раму', 'Лама рыла яму']
x.words === 6  // true
x.getWords()  // ['Мама', 'мыла', 'раму', 'Лама', 'рыла', 'яму']
x.length  // 30
x.includes('Мама')  // true
 */

class StatisticString {
    constructor(string) {
        this.string = string;
    }

    get sentences () { //подсчет кол-во предложений (по точкам)
        return this.string.split(".").length - 1;
    }

    getSentences () { //Возращает предложения (по точкам)
        let arr = this.string.split("."); //получаем массив предложений
        return arr;
    }

    get words () { //подсчет кол-во слов(по пробелам)
        return this.string.split(" ").length - 1;
    }

    getWords () { //Возращает слова (по пробелам)
        let arr = this.string.split(" "); //получаем массив слов
        return arr;
    }

    get length () { //Возвращает длину строки
        return this.string.length;
    }

    includes (value) { //Возвращает true если подстрока входит в строку
        this._value = value;
        return this.string.includes(this._value);
    }
}

const x = new StatisticString('Мама мыла раму. Лама рыла яму')
console.log(x.sentences === 2);  // true
console.log(x.getSentences());  // ['Мама мыла раму', 'Лама рыла яму']
console.log(x.words === 6)  // true
console.log(x.getWords())  // ['Мама', 'мыла', 'раму', 'Лама', 'рыла', 'яму']
console.log(x.length)  // 30
console.log(x.includes('Мама'))  // true
