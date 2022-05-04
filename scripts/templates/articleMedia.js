
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
        const img = new MediaFactory(media, 'image').displayMedia(photographer,'img');
        const video = new MediaFactory(media, 'video').displayMedia(photographer,'video');

        if(media.video){
            link.appendChild(video);
        } else if (media.image){
            link.appendChild(img);
        }

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
        p.appendChild(i);

        div.appendChild(p);


        article.appendChild(div);

        return article;

    }

}

export {ArticleMedia};