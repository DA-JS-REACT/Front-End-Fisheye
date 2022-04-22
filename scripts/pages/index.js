import { Api } from '../api/Api.js';
import { PhotographerFactory } from '../factories/Photographer.js' ;
import { Proxy } from '../Proxy/Proxy.js' ;

class Home  {

    constructor() {
        const newLocal = '../data/photographers.json';
        this.datas = new Api(newLocal);
        this.photographersSection = document.querySelector('.photographer-section');
        this.proxy = new Proxy();
    }

    /**
     *
     * @param {array} photographers
     */

    async displayData(photographers) {

        photographers.forEach((photographer) => {
            const photographerModel = new PhotographerFactory(
                photographer.id,
                photographer.name,
                photographer.portrait,
                photographer.city,
                photographer.country,
                photographer.tagline,
                photographer.price,
            );
            const userCardDOM = photographerModel.getUserCardDOM();
            this.photographersSection.appendChild(userCardDOM);
        });
    }
    async  init() {
        //Récupère les datas des photographes
        const { photographers }  = await this.datas.getAllData();
        // console.log(this.proxy.HomePage(photographers));
        this.proxy.HomePage(photographers);
        this.displayData(photographers);

    }


}

const home = new Home();
home.init();


