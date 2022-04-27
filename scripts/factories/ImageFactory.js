class ImageFactory {

    constructor (image ,title,likes,date) {
        this.image = image;
        this.title = title;
        this.likes = likes;
        this.date = date;
    }


    displayImage(photographer){

        const pattern = /\s*(-| )\s*/;
        const firstname = photographer.name.split(pattern );

        const picture = './assets/images/'+ firstname[0]+'/';

        // const article = document.createElement('article');
        // article.classList.add('article-picture');

        const link = document.createElement('a');
        link.classList.add('card-link');

        const img = document.createElement('img');
        img.classList.add('card-link__img');
        img.setAttribute('src', picture + this.image);
        img.setAttribute('alt', this.title);

        link.appendChild(img);

        // const div = document.createElement('div');
        // div.classList.add('card-content');

        // const title = document.createElement('h3');
        // title.textContent = this.title;
        // div.appendChild(title);

        // const p = document.createElement( 'p');
        // const span = document.createElement( 'span');
        // span.textContent = this.likes;
        // p.appendChild(span);

        // const i = document.createElement( 'i');
        // i.classList.add('fa-solid', 'fa-heart');
        // p.appendChild(i);

        // div.appendChild(p);

        // article.appendChild(link);
        // article.appendChild(div);

        return link;

    }

}

export {ImageFactory};