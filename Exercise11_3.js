//Напишите игру: в центре экрана появляется кнопка «Нажми меня». Когда юзер наводит на неё курсор, она сразу же перемещается на случайные координаты.
const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const but = document.querySelector('button');
but.addEventListener('mouseover', () => {
    but.setAttribute('style.left', '70%', 'right', '20%');
})