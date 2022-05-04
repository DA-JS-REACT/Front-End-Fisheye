import {ImageFactory} from '../factories/ImageFactory.js';
import{VideoFactory} from '../factories/VideoFactory.js';



class MediaFactory {

    constructor(media,type) {
        if (type === 'image') {
            return new ImageFactory(media);
        } else if (type === 'video') {
            return new VideoFactory(media);
        }
    }

}

export {MediaFactory};