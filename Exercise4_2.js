//Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.
function getPercents(percent, number) {
    let procent = (percent*number)/100;
    return procent;
}

console.log(`60% от 1000 это ${getPercents(60, 1000)}%`);
console.log(`10% от 100 это ${getPercents(10, 100)}%`);
console.log(`40% от 700 это ${getPercents(40, 700)}%`);