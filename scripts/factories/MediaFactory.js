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
    getPageMainSections(photographer) {
        const pattern = /\s*(-| )\s*/;
        const firstname = photographer.name.split(pattern );

        const picture = './assets/images/'+ firstname[0]+'/';

        const article = document.createElement('article');
        article.classList.add('article-picture');

        const medias = this.image  ? `<img class="card-link__img" src=" ${picture}${this.image}" alt="${this.title}" >` : `<video class="card-link__img" controls src="${picture}${this.video}">Ici la description alternative</video>
        `;
        const card = `
            <a class="card-link" href=""> ${medias} </a>
             <div class="card-content">
                <h3>${this.title}</h3> '
                <p><span>${this.likes}</span> <i class="fa-solid fa-heart fa-5x"></i> </p>
             </div>
                `;
        // div.innerHTML = article;
        article.innerHTML = card;
        return article;

    }
}
{/* <img class="card-link__img" src=" ${picture}${this.image}" alt="${this.title}" ></img> */}
export {MediaFactory};