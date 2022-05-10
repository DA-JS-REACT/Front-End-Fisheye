class StateLikes {
    constructor(id = null,check = false){
        this._id = id;
        this._check = check;
    }

    get id() {
        return this._id;
    }

    get check() {
        return this._check;
    }

    set check(check) {
        this._check = check;
    }

    set id(id) {
        this._id = id;
    }
}

export {StateLikes};