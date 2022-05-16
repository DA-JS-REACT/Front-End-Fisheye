
import { MediaFactory } from '../factories/MediaFactory.js';


class ArticleMedia {

    constructor(id, photographerId,title,image,video,likes,date,price) {

        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image;
        this.video = video;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }



    /**
     *
     * @returns  {HtmlElement}
     */
    getPageSectionsArticle(photographer,media) {


        const article = document.createElement('article');
        article.classList.add('article-picture');
        const link = document.createElement('a');
        link.classList.add('card-link');

        // appel de mediaFactory pour la gestion des images ou video
        const medias = new MediaFactory(media).displayMedia(photographer);

        link.appendChild(medias);


        article.appendChild(link);
        const div = document.createElement('div');
        div.classList.add('card-content');

        const title = document.createElement('h3');
        title.textContent = this.title;
        div.appendChild(title);

        const p = document.createElement( 'p');
        const span = document.createElement( 'span');
        span.classList.add('counter');
        span.setAttribute('id', this.id);
        span.textContent = this.likes;
        p.appendChild(span);

        const i = document.createElement( 'i');
        i.classList.add('fa-solid', 'fa-heart','likes-counter');
        i.setAttribute('aria-label','Coeur permettant d\'ajouter ou de retirer un like');
        const spanScrennreader = document.createElement('span');
        spanScrennreader.classList.add('sr-only');
        spanScrennreader.setAttribute('id', 'like');
        spanScrennreader.textContent ='Coeur permettant d\'ajouter ou de retirer un like';
        p.appendChild(i);
        p.appendChild(spanScrennreader);

        div.appendChild(p);


        article.appendChild(div);

        return article;

    }

}

export {ArticleMedia};