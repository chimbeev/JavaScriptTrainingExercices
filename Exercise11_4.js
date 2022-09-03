//Выведите на экран надпись «Ширина экрана {width} пикселей» и обновляйте её при изменении ширины экрана.

const updateSizeInfo = () => {
    const but = document.querySelector('button');
    const windowInnerWidth = window.innerWidth;
    but.innerHTML = `Ширина экрана ${windowInnerWidth} пикселей`
};

updateSizeInfo();
window.addEventListener('resize', updateSizeInfo);