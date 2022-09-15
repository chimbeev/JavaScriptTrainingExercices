function BasePrinter(x) {
    this.x = x
}

function Printer() {}
console.log(BasePrinter.prototype);
Printer.prototype = BasePrinter.prototype
Printer.prototype.print = () => console.log(this.x)

const printer = new Printer()
const base = new BasePrinter('hello!')
const print = base.print
print.call(printer)

