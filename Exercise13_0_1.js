//Напишите функцию pick, которая принимает на вход массив с объектами и название поля и возвращает новый массив со
// значениями этого поля, если оно присутствует в объекте. Если соответствующего поля нет, следует вернуть undefined.
//pick(arr, 'a')  // [1, 'value', undefined, true]

const arr = [
    { a: 1, b: 2 },
    { a: 'value' },
    { o: null },
    { a: true, m: 123 },
]

function pick(arr, key) {
        return arr.map(x => x[key])
}

alert(`${pick(arr, 'a')}`);

