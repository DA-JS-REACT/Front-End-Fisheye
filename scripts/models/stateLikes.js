class StateLikes {
    constructor(id ='',status = false,value= ''){
        this._id = id;
        this._status = status;
        this._value = value;
    }

    get id() {
        return this._id;
    }

    get status() {
        return this._status;
    }
    get value() {
        return this._value;
    }

    set status(status) {
        this._status = status;
    }

    set id(id) {
        this._id = id;
    }
    set value(value) {
        this._value = value;
    }
}

export {StateLikes};