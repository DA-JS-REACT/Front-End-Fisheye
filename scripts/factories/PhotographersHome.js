//import {PhotographerList} from '../factories/PhotographerList.js';
class PhotographerHomeFactory {

    constructor(id, name, portrait, city, country,tagline,price) {

        this.id = id;
        this.name = name;
        this.portrait = portrait;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.city = city;

    }


    /**
     *
     * @returns  {HtmlElement}
     */
    getUserCardDOM() {


        const picture = `../public/assets/photographers/${this.portrait}`;

        const article = document.createElement( 'article' );
        article.classList.add('article');

        const link = document.createElement( 'a');
        link.setAttribute( 'href', '../public/photographer.html?id='+ this.id);
        link.setAttribute( 'aria-label', 'lien vers la page d\'un photographe');
        link.classList.add('article__link');

        const img = document.createElement( 'img' );
        img.classList.add('article__img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', this.name + '- page photographe');

        const h2 = document.createElement( 'h2' );
        h2.classList.add('article__title');
        h2.textContent = this.name;

        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(link);

        const  location = document.createElement( 'p');
        location.classList.add('article__location');
        location.textContent = this.city +',' +' ' + this.country;

        const job = document.createElement( 'p');
        job.classList.add('article__tagline');
        job.textContent = this.tagline;

        const buy = document.createElement('span');
        buy.classList.add('article__price');
        buy.textContent = this.price + '€/jour';

        article.appendChild(location);
        article.appendChild(job);
        article.appendChild(buy);

        return (article);
    }

}

export {PhotographerHomeFactory};


