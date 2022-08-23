//На сайте Reddit ссылки на разделы (сабреддиты) формируются следующим образом: https://reddit.com/r/название_раздела/. 
//Напишите функцию, которая принимает ссылку на раздел и возвращает название раздела.

function razdelName(link) {
    const name = link.slice(link.indexOf("/r/") + 3, link.length - 1);
    return name;
}

console.log(`${razdelName("https://reddit.com/r/название_раздела/")}`);