//Что выведет данный код?

function MultiplierFabric() {
    this._counter = 1

}
MultiplierFabric.prototype.getMultiplier = function () {

    this._counter += 1
    const newValue = this._counter
    return (x) => newValue * x
}

const multiplierFabric = new MultiplierFabric()

const multiplier1 = multiplierFabric.getMultiplier()

const multiplier2 = multiplierFabric.getMultiplier()

console.log(multiplier1(1))

console.log(multiplier1(2))

console.log(multiplier2(3))

console.log(multiplier2(4))

