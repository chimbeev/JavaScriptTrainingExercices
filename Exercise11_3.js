//Напишите игру: в центре экрана появляется кнопка «Нажми меня». Когда юзер наводит на неё курсор, она сразу же перемещается на случайные координаты.
const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const but = document.querySelector('button');
but.addEventListener('mouseenter', () => {
    but.style.left =`${random(5,45)}%`;
    but.style.top = `${random(5,45)}%`;
})

