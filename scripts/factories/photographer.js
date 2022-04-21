class PhotographerFactory {

    constructor(id, name, portrait, city, country,tagline,price) {

        this.id = id;
        this.name = name;
        this.portrait = portrait;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.city = city;

    }

    getUserCardDOM() {
        const picture = `./public/assets/photographers/${this.portrait}`;

        const article = document.createElement( 'article' );
        const link = document.createElement( 'a');
        link.setAttribute( 'href', 'photographer.html?id='+ this.id);
        const img = document.createElement( 'img' );
        img.setAttribute('src', picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = this.name;
        link.appendChild(img);

        const  location = document.createElement( 'p');
        location.textContent = this.city +',' +' ' + this.country;
        const job = document.createElement( 'p');
        job.textContent = this.tagline;
        const buy = document.createElement('span');
        buy.textContent = this.price + '€/jour';
        article.appendChild(link);
        article.appendChild(location);
        article.appendChild(job);
        article.appendChild(buy);

        return (article);
    }

}

export {PhotographerFactory};


