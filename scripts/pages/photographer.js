//Mettre le code JavaScript lié à la page photographer.html
import { Api } from '../api/Api.js';



class PagePhotographer {


    constructor() {
        const newLocal = '../data/photographers.json';
        this.datas = new Api(newLocal);
        this.photographersPage = document.querySelector('.photographer-content');
        this.urlsearch = new URLSearchParams(window.location.search);
    }
    /**
     *
     * @param {array*} photographers
     * @param {number} id
     */
    async  displayOnePhotographer(photographers ,id ) {

        photographers.forEach(Photographer => {
            if (Photographer.id  === id) {
                console.log(Photographer.name);
                let h2 = document.createElement('h2');
                h2.textContent = Photographer.name;
                this.photographersPage.appendChild(h2);
            }
        });
    }
    async init() {
        //TODO check id get with regex pattern
        const photographerId = parseInt(this.urlsearch.get('id'));
        console.log(photographerId);
        const { photographers }  = await this.datas.getAllData();
        this.displayOnePhotographer(photographers,photographerId);
    }
}

const pagePhotographer =  new PagePhotographer();
pagePhotographer.init();