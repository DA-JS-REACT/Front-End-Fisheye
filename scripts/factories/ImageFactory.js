class ImageFactory {

    constructor (image ,title,likes,date) {
        this.image = image;
        this.title = title;
        this.likes = likes;
        this.date = date;
    }


    displayImage(photographer){

        // Recupére le nom du photographe pour contruire le chemin
        const pattern = /\s*(-| )\s*/;
        const firstname = photographer.name.split(pattern );

        const picture = './assets/images/'+ firstname[0]+'/';


        const link = document.createElement('a');
        link.classList.add('card-link');

        const img = document.createElement('img');
        img.classList.add('card-link__img');
        img.setAttribute('src', picture + this.image);
        img.setAttribute('alt', this.title);

        link.appendChild(img);
        return link;

    }

}

export {ImageFactory};