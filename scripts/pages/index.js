import { Api } from '../api/Api.js';
import { PhotographerHomeFactory } from '../factories/PhotographersHome.js' ;
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
            const photographerModel = new PhotographerHomeFactory(
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
        // photographers.forEach((photographer) => {
        //     const photographerModel = new PhotographerFactory('home',photographer);
        //     // const userCardDOM = photographerModel.getUserCardDOM();
        //     // console.log(userCardDOM);
        //     this.photographersSection.appendChild(photographerModel);
        // });


    }
    async  init() {
        //Récupère les datas des photographes
        const { photographers }  = await this.datas.getAllData();

        this.displayData(photographers);

    }


}

const home = new Home();
home.init();


