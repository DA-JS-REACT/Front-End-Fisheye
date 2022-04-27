class VideoFactory {

    constructor (video ,title,likes,date) {
        this.video = video;
        this.title = title;
        this.likes = likes;
        this.date = date;
    }


    displayVideo(photographer){

        // Recupére le nom du photographe pour contruire le chemin
        const pattern = /\s*(-| )\s*/;
        const firstname = photographer.name.split(pattern );

        const picture = './assets/images/'+ firstname[0]+'/';

        const link = document.createElement('a');
        link.classList.add('card-link');

        const video = document.createElement('video');
        video.classList.add('card-link__img', 'card-link__img--video');
        video.setAttribute('src', picture + this.video);
        video.setAttribute('controls', '');

        link.appendChild(video);



        return link;

    }

}

export {VideoFactory};