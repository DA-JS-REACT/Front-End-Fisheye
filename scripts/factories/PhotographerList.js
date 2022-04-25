

class   PhotographerList {

    constructor(photographer) {
        this.photographer = photographer;
    }

    static DisplayHomePage() {

        const picture = `./assets/photographers/${this.photographer.portrait}`;

        const article = document.createElement( 'article' );
        article.classList.add('article');

        const link = document.createElement( 'a');
        link.setAttribute( 'href', 'photographer.html?id='+ this.photographer.id);
        link.classList.add('article__link');

        const img = document.createElement( 'img' );
        img.classList.add('article__img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', this.photographer.getName());

        const h2 = document.createElement( 'h2' );
        h2.classList.add('article__title');
        h2.textContent = this.photographer.getName();

        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(link);

        const  location = document.createElement( 'p');
        location.classList.add('article__location');
        location.textContent = this.photographer.getCity() +',' +' ' + this.photographer.getCountry();

        const job = document.createElement( 'p');
        job.classList.add('article__tagline');
        job.textContent = this.photographer.getTagline();

        const buy = document.createElement('span');
        buy.classList.add('article__price');
        buy.textContent = this.photographer.getPrice() + '€/jour';

        article.appendChild(location);
        article.appendChild(job);
        article.appendChild(buy);

        return (article);

    }
}

export {PhotographerList};