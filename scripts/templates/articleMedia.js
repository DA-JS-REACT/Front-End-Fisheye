
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

        // cibling container for add dynamic attribute tabIndex
        const section = document.querySelector('.photograph-picture');
        let countElement = section.childElementCount;


        const article = document.createElement('article');
        article.classList.add('article-picture');
        const link = document.createElement('a');
        link.classList.add('card-link');
        link.setAttribute('href', '#');
        // order 4 for the first element, then adds 1 for the following
        let tabindexLink = 4 + countElement;
        link.setAttribute('tabindex',tabindexLink);
        link.setAttribute('role','button');
        link.setAttribute('aria-haspopup','dialog');




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
        const small = document.createElement('small');
        small.textContent = 'nombre de likes';

        small.classList.add('sr-only');
        span.appendChild(small);
        p.appendChild(span);
        // button for likes
        const buttonLikes = document.createElement( 'button');
        buttonLikes.classList.add('likes-counter');
        buttonLikes.setAttribute('type', 'button');
        buttonLikes.setAttribute('aria-label', 'likes counter');
        buttonLikes.setAttribute('aria-describedby', 'like');
        buttonLikes.setAttribute('title', 'add or delete likes');
        // order 5 for the first element, then adds 1 for the following
        let tabindexLikes = 5 + countElement;
        buttonLikes.setAttribute('tabindex',tabindexLikes);

        const i = document.createElement( 'i');
        i.classList.add('fa-solid', 'fa-heart');
        const spanScreenreader = document.createElement('span');
        spanScreenreader.classList.add('sr-only');
        spanScreenreader.setAttribute('id', 'like');
        spanScreenreader.textContent ='Coeur permettant d\'ajouter ou de retirer un like';
        buttonLikes.appendChild(i);
        p.appendChild(buttonLikes);
        buttonLikes.appendChild(spanScreenreader);

        div.appendChild(p);


        article.appendChild(div);

        return article;

    }

}

export {ArticleMedia};