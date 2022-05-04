class ImageFactory {

    constructor (media) {
        this.media = media;
     
    }


    displayMedia(photographer,name){

        // Recupére le nom du photographe pour contruire le chemin
        const pattern = /\s*(-| )\s*/;
        const firstname = photographer.name.split(pattern );

        const picture = './assets/images/'+ firstname[0]+'/';


        const img = document.createElement('img');
        img.classList.add('card-link__media','card-link__media--'+ name);
        img.setAttribute('src', picture + this.media.image);
        img.setAttribute('alt', this.media.title);

        return img;

    }

}

export {ImageFactory};