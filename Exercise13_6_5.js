//Реализуйте класс «хранилище» с защищённым полем для данных и соответствующими геттерами и сеттерами.
// Затем создайте класс-наследник для сохранения данных в localStorage и переопределите геттеры и сеттеры,
// чтобы теперь данные брались не из памяти, а из localStorage, и сохранялись не в память, а в localStorage при изменении данных.
// Реализовывать саму работу с localStorage не нужно, достаточно просто написать классы.

class Storage {
    _data = undefined

    constructor(data) {
        if (data !== undefined) {
            this._save(data)
        } else {
            this._load()
        }
    }

    _save(data) {
        this._data = data
    }

    _load() {
        return this._data
    }

    get data() {
        return this._load()
    }

    set data(data) {
        return this._save(data)
    }
}

class LocalStorage extends Storage {
    static key = 'storage'

    _load() {
        return localStorage.getItem(LocalStorage.key)
    }

    _save(data) {
        return localStorage.setItem(LocalStorage.key, data)
    }
}