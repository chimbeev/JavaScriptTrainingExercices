//Создайте кнопку, которая при клике создает другую кнопку, которая, в свою очередь, создаёт другую кнопку, и т.д.
//Используйте HTML, JS и CSS.

const createNewButton = (text) => {
    const newButton = document.createElement('button');
    newButton.innerHTML = text;
    newButton.type = 'button';
    newButton.addEventListener('click', () => createNewButton(text));

    const container = document.querySelector('.buttons');
    container.appendChild(newButton);
};

const [button] = document.getElementsByTagName('button');
button.addEventListener('click', () => createNewButton('Клонировать!'));