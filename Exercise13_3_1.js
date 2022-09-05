//Выведите имена функций в порядке возрастания количества аргументов:
//Используйте атрибуты объекта функции: length и name.
function test(x, y, z) {};
function do1(smth) {};
function foo(bar, baz) {};

const functions = [test, do1, foo]
// 'do', 'foo', 'test'

functions
    .sort((a, b) => a.length - b.length)
    .forEach(foo => console.log(foo.name))