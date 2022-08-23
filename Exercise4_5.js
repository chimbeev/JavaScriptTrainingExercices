//Напишите функцию getMonth(n), которая принимает номер месяца и возвращает его название. 
//Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else.
let month;
function getMonth(n) { 
    
    if (n==1) month ="январь"; else 
    if (n==2) month ="февраль"; else 
    if (n==3) month ="март"; else 
    if (n==4) month ="апрель"; else 
    if (n==5) month ="май"; else 
    if (n==6) month ="июнь"; else 
    if (n==7) month ="июль"; else 
    if (n==8) month ="август"; else 
    if (n==9) month ="сентябрь"; else 
    if (n==10) month ="октябрь"; else 
    if (n==11) month ="ноябрь"; else 
    if (n==12) month ="декабрь";
    return month;
    
}



console.log(`${getMonth(1)}`);
console.log(`${getMonth(5)}`);
console.log(`${getMonth(12)}`);