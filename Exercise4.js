//Найдите в коде строки 'SOME' и напишите вместо них нужное название типа — так, чтобы при запуске кода alert написал 'true'.
a = 12;
b = 'number';
c = false;
d = null;
e = undefined;
f = 123.34;
g = '1' + 1;
h = 15 / 0;
i = -'5';
j = 5 == '5'

at = typeof a === 'number'; 
bt = typeof b === 'string'; 
ct = typeof c === 'boolean';
dt = typeof d === 'object'; 
et = typeof e === 'undefined';
ft = typeof f === 'number'; 
gt = typeof g === 'string'; 
ht = typeof h === 'number';
it = typeof i === 'number';
jt = typeof j === 'boolean';


alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);