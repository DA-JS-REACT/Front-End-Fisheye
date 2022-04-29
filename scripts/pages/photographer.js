//Mettre le code JavaScript lié à la page photographer.html
import { Api } from '../api/Api.js';
import { PhotographerPageFactory } from '../factories/PhotographerPage.js';
import { MediaFactory } from '../factories/MediaFactory.js';
import { SortFactory } from '../factories/SortFactory.js';
import {SorterMedia } from '../utils/SorterMedia.js';




class PagePhotographer {


    constructor() {
        const newLocal = '../data/photographers.json';
        this.datas = new Api(newLocal);
        this.photographHeader = document.querySelector('.photograph-header');
        this.photographSection = document.getElementById('main');
        this.urlsearch = new URLSearchParams(window.location.search);
        this.Sort = new SorterMedia();
        // this.select = document.querySelector('.select-sort');
    }
    /**
     *
     * @param {array} photographers
     * @param {number} id
     */
    async  displayOnePhotographer(photographers ,id ) {
        photographers.forEach(photographer => {
            const photographerModel = new PhotographerPageFactory(
                photographer.id,
                photographer.name,
                photographer.portrait,
                photographer.city,
                photographer.country,
                photographer.tagline,
                photographer.price,
            );
            if (photographer.id  === id) {
                photographerModel.getPageMainHeader().forEach(elt => {
                    this.photographHeader.appendChild(elt );
                });
            }
        });
    }

    /**
     *
     * @param {array} medias
     * @param {number} id
     */
    async displayMedia(medias, id,photographers) {

        const section = this.getPageMainSection(this.photographSection);
        this.displaySort(section);
        const div = document.querySelector('.photograph-picture');
        // permet de récupérer le photographe correspondant à la page
        const photographer = photographers.find(photographerId => photographerId.id === id);

        const resultMedia = medias.filter(media => media.photographerId === id);

        

        // appel du tri  des médias
        this.Sort.ChangeDisplayMedia(resultMedia,photographers,id);
        // par défault tri par pupularité
        resultMedia.sort((a,b) =>{
            return b.likes - a.likes;
        }).forEach(media => {
            const mediaModel = new MediaFactory(
                media.id,
                media.photographerId,
                media.title,
                media.image,
                media.video,
                media.likes,
                media.date,
                media.price,
            );
            const photographPicture = mediaModel.getPageSectionsArticle(photographer,mediaModel);
            div.appendChild(photographPicture);
        });

        this.getFooterPage(photographer);

    }
    /**
     * Inject form for the select
     * @param {HtmlElement} section
     */

    displaySort(section) {
        const form = new SortFactory().getSelectSort();
        section.appendChild(form);
    }

    /**
     * Inject section with contain div for display media
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

    getFooterPage(photographer) {
        const footer = document.createElement('footer');
        footer.classList.add('photograph-footer');

        const ulElement = document.createElement('ul');
        ulElement.classList.add('footer-list');

        const listFirst = document.createElement('li');
        listFirst.classList.add('footer-list__li');
        listFirst.textContent ='124500';
        const i = document.createElement( 'i');
        i.classList.add('fa-solid', 'fa-heart');
        listFirst.appendChild(i);


        const listSecond = document.createElement('li');
        listSecond.classList.add('footer-list__li');
        listSecond.textContent = photographer.price + '€'+' ' +'/' +' '+ 'jour';

        ulElement.appendChild(listFirst);
        ulElement.appendChild(listSecond);

        footer.appendChild(ulElement);

        const body = document.querySelector('body');
        body.appendChild(footer);


        return footer;
    }

    async init() {
        //TODO check id get with regex pattern
        const photographerId = parseInt(this.urlsearch.get('id'));
        //console.log(photographerId);
        const data  = await this.datas.getAllData();
        const {photographers, media } = data;
        this.displayOnePhotographer(photographers,photographerId);
        this.displayMedia(media,photographerId,photographers);

    }
}

const pagePhotographer =  new PagePhotographer();
pagePhotographer.init();