class VideoFactory {

    constructor (media) {
        this.media = media;
    }

    /**
     * 
     * @param {array} photographer 
     * @param {object} options 
     * @returns
     */
    displayMedia(photographer,options={}){

        // Recupére le nom du photographe pour contruire le chemin
        const pattern = /\s*(-| )\s*/;
        const firstname = photographer.name.split(pattern );

        const picture = './assets/images/'+ firstname[0]+'/';


        const video = document.createElement('video');
        video.classList.add('card-link__media', 'card-link__media--video' );
        video.setAttribute('src', picture + this.media.video);
        // add options for video in lightBox
        if(options.hasControl) {
            video.setAttribute('controls', '');
        }


        return video;

    }

}

export {VideoFactory};