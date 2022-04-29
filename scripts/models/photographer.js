class Photographer {

    constructor(data) {

        this.id = data.id;
        this.name = data.name;
        this.portrait = data.portrait;
        this.country = data.country;
        this.tagline = data.tagline;
        this.price = data.price;
        this.city = data.city;

    }

    get id() {
        return this.id;
    }

    get name() { return this.name; }
    set name(value) {
        this.name = value;
    }

    get city() { return this.city; }

    get price() { return this.price; }

    get country() { return this.country;}

    get tagline() { return this.tagline; }

    get portrait() { return this.portrait; }
}

export {Photographer};