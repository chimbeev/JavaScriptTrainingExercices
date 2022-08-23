/*Поменяйте код так, чтобы каждая переменная была объявлена до того, как ей присвоено значение.
 Пользуйтесь правилом: везде, где возможно, в первую очередь используйте const, если нельзя const, то let. 
 И никогда не используйте var.*/
const NDS = 0.20
const NDFL = 0.13
const EXCISE = 0.1
const RENT = 40000
const FOOD = 15000
const OTHER = 15000
const MY_SALARY = 120000

let ndflTax = MY_SALARY * NDFL;
let mySalaryNet = MY_SALARY - ndflTax;
let otherTaxes = mySalaryNet * (NDS + EXCISE);
let totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -= FOOD + OTHER + RENT
alert('Зарплата ' + MY_SALARY + ' рублей')
alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
alert('Осталось ' + totalAvailable + ' рублей')