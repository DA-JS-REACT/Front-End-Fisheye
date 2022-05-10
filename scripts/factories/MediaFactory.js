import {ImageFactory} from '../factories/ImageFactory.js';
import{VideoFactory} from '../factories/VideoFactory.js';



class MediaFactory {

    constructor(media) {
        if (media.image) {
            return new ImageFactory(media);
        } else if (media.video) {
            return new VideoFactory(media);
        }
    }

}

export {MediaFactory};