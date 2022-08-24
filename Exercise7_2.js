//Напишите функцию, которая принимает массив массивов вида [['ключ1', 'значение1'], ['ключ2', 'значение2']] 
//и возвращает объект вида: {ключ1: 'значение1', ключ2: 'значение2'}.

const arrayOfMas = [['ключ1', 'значение1'], ['ключ2', 'значение2'], ['ключ3', 'значение3'], ['ключ4', 'значение4']];

function modArray (arrayIn) {

    Object.fromEntries = arr => Object.assign({}, ...Array.from(arr, ([k, v]) => ({[k]: v}) ));
    
    const outObj = Object.fromEntries(arrayIn);
    
    return outObj;
}


let resultObj = modArray(arrayOfMas);
console.log(resultObj)
