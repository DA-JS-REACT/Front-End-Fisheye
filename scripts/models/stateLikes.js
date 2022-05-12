class StateLikes {
    constructor(id ='',check = false,value= ''){
        this._id = id;
        this._check = check;
        this._value = value;
    }

    get id() {
        return this._id;
    }

    get check() {
        return this._check;
    }
    get value() {
        return this._value;
    }

    set check(check) {
        this._check = check;
    }

    set id(id) {
        this._id = id;
    }
    set value(value) {
        this._value = value;
    }
}

export {StateLikes};