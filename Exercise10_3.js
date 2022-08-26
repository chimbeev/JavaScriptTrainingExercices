//Напишите функцию, которая принимает HTML в виде строки и возвращает HTML без элементов div (и всего, что внутри),
// все остальные элементы сохраняются. Используйте createElement, querySelectorAll и innerHTML.

const removeDivs = html => {
    const root = document.createElement('span');
    root.innerHTML = html; //Меняем содержимое DOM root
    const divs = root.querySelectorAll('div');
    divs.forEach(div => {
        div.parentNode.removeChild(div);
    })
    return root.innerHTML; //Хранит содержимое DOM root
}

const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';

alert( removeDivs(html));
alert( removeDivs(html) === 'Hello <b>World!</b>'); // Должно быть true