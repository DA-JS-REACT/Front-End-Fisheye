class VideoFactory {

    constructor (media) {
        this.media = media;
    }


    displayMedia(photographer,name){

        // Recupére le nom du photographe pour contruire le chemin
        const pattern = /\s*(-| )\s*/;
        const firstname = photographer.name.split(pattern );

        const picture = './assets/images/'+ firstname[0]+'/';


        const video = document.createElement('video');
        video.classList.add('card-link__media', 'card-link__media--' + name);
        video.setAttribute('src', picture + this.media.video);
        // video.setAttribute('controls', '');


        return video;

    }

}

export {VideoFactory};