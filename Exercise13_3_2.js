//Допишите код:
function multiply(x, y) {
    return x * y
}

const double = multiply.apply(null, [2]);


double(2)  // 4
double(5)  // 10