import {ImageFactory} from '../factories/ImageFactory.js';
import{VideoFactory} from '../factories/VideoFactory.js';



class MediaFactory {

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
    getPageMainSection(photographSection) {
        const section = document.createElement('section');
        section.classList.add('photograph-section');

        photographSection.appendChild(section);

        const div = document.createElement('div');
        div.classList.add('photograph-picture');

        section.appendChild(div);
        return section;
    }


    /**
     *
     * @returns  {HtmlElement}
     */
    getPageSectionsArticle(photographer,media) {

        const article = document.createElement('article');
        article.classList.add('article-picture');

        if(media.video){
            const video = new VideoFactory(this.video,this.title,this.likes,this.date);
            const link = video.displayVideo(photographer);
            article.appendChild(link);
        } else if (media.image){
            const img = new ImageFactory(this.image,this.title,this.likes,this.date);
            const link = img.displayImage(photographer);
            article.appendChild(link);
        }


        const div = document.createElement('div');
        div.classList.add('card-content');

        const title = document.createElement('h3');
        title.textContent = this.title;
        div.appendChild(title);

        const p = document.createElement( 'p');
        const span = document.createElement( 'span');
        span.textContent = this.likes;
        p.appendChild(span);

        const i = document.createElement( 'i');
        i.classList.add('fa-solid', 'fa-heart');
        p.appendChild(i);

        div.appendChild(p);


        article.appendChild(div);

        return article;

        // const pattern = /\s*(-| )\s*/;
        // const firstname = photographer.name.split(pattern );

        // const picture = './assets/images/'+ firstname[0]+'/';

        // const article = document.createElement('article');
        // article.classList.add('article-picture');

        // const medias = this.image  ? `<img class="card-link__img" src=" ${picture}${this.image}" alt="${this.title}" >` : `<video class="card-link__img" controls src="${picture}${this.video}">Ici la description alternative</video>
        // `;
        // const card = `
        //     <a class="card-link" href=""> ${medias} </a>
        //      <div class="card-content">
        //         <h3>${this.title}</h3> '
        //         <p><span>${this.likes}</span> <i class="fa-solid fa-heart fa-5x"></i> </p>
        //      </div>
        //         `;
        // // div.innerHTML = article;
        // article.innerHTML = card;
        // return article;

    }

}

export {MediaFactory};