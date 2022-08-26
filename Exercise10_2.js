//Сверстайте 5 параграфов с текстом. С помощью JS меняйте цвет фона каждого параграфа на случайный каждую секунду.
// Создайте массив с названиями цветов ['blue', 'cyan', ...] и с помощью функции из предыдущего задания
// выбирайте случайный цвет из массива.

const colorArray = ['Black', 'Navy', 'DarkBlue', 'MediumBlue', 'Blue', 'DarkGreen', 'Green', 'Teal', 'DarkCyan', 'DeepSkyBlue', 'DarkTurquoise', 'MediumSpringGreen',
    'Lime', 'SpringGreen', 'Aqua', 'Cyan', 'MidnightBlue', 'DodgerBlue', 'LightSeaGreen', 'ForestGreen', 'SeaGreen', 'DarkSlateGray', 'LimeGreen', 'MediumSeaGreen',
    'Turquoise', 'RoyalBlue', 'SteelBlue', 'DarkSlateBlue', 'MediumTurquoise', 'Indigo', 'DarkOliveGreen', 'CadetBlue', 'CornflowerBlue', 'MediumAquaMarine',
    'DimGray', 'SlateBlue', 'OliveDrab','DarkViolet', 'PaleGreen', 'DarkOrchid', 'YellowGreen', 'Sienna', 'Brown', 'DarkGray', 'LightBlue', 'GreenYellow',
    'PaleTurquoise', 'LightSteelBlue', 'PowderBlue', 'FireBrick', 'DarkGoldenRod', 'MediumOrchid', 'RosyBrown', 'DarkKhaki', 'Silver','MediumVioletRed',
    'IndianRed', 'Peru', 'Chocolate', 'Tan', 'LightGray', 'PaleVioletRed', 'Thistle', 'Orchid', 'GoldenRod', 'Crimson', 'Gainsboro', 'Plum', 'BurlyWood',
    'LightCyan', 'Lavender', 'DarkSalmon', 'Violet', 'PaleGoldenRod', 'LightCoral','Khaki', 'AliceBlue', 'HoneyDew', 'Azure', 'SandyBrown', 'Wheat', 'Beige',
    'WhiteSmoke', 'MintCream', 'GhostWhite', 'Salmon', 'AntiqueWhite', 'Linen', 'LightGoldenRodYellow', 'OldLace', 'Red', 'Fuchsia', 'Magenta', 'DeepPink',
    'OrangeRed', 'Tomato','HotPink', 'Coral', 'Darkorange', 'LightSalmon', 'Orange', 'LightPink', 'Pink', 'Gold', 'PeachPuff', 'NavajoWhite', 'Moccasin',
    'Bisque', 'MistyRose', 'BlanchedAlmond', 'PapayaWhip', 'LavenderBlush', 'SeaShell', 'Cornsilk', 'LemonChiffon', 'FloralWhite','Snow', 'Yellow',
    'LightYellow', 'Ivory', 'White']

//121 colors

const random = (min, max) => { //Нам нужно преобразовать каждое значение из интервала 0…1 в значения от min до max.
//Это можно сделать в 2 шага: Если мы умножим случайное число от 0…1 на (max-min), тогда интервал возможных
// значений от 0..1 увеличивается до 0..(max-min). И, если мы прибавим min, то интервал станет от min до max.
// floor производит округление в меньшую сторону
    return Math.floor(min + Math.random() * (max - min));
};

let current = 1;

let timerId = setInterval(function() {
    //console.log(current); //вывести счетчик на экран
    document.getElementById('p1').style.backgroundColor = colorArray[random(0,120)];//меняем цвет на случайный во всех 5
    document.getElementById('p2').style.backgroundColor = colorArray[random(0,120)];//параграфах
    document.getElementById('p3').style.backgroundColor = colorArray[random(0,120)];
    document.getElementById('p4').style.backgroundColor = colorArray[random(0,120)];
    document.getElementById('p5').style.backgroundColor = colorArray[random(0,120)];
    document.getElementById('timer').innerHTML = current;
    current++;//увеличить счетчик
    }, 1000); //задержка 1с





