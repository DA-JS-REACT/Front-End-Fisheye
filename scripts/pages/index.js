import { Api } from '../api/Api.js';
import { PhotographerFactory } from '../factories/Photographer.js' ;

class Home  {

    constructor() {
        const newLocal = '../data/photographers.json';
        this.datas = new Api(newLocal);
        this.photographersSection = document.querySelector('.photographer_section');
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
                photographer.price,
                photographer.tagline
            );
            const userCardDOM = photographerModel.getUserCardDOM();
            this.photographersSection.appendChild(userCardDOM);
        });
    }
    async  init() {
        //Récupère les datas des photographes
        // const { photographers }  = await this.datas.getAllDatas();
        // console.log(photographers);
    //     // this.displayData(photographers);
    //     const { datas } = await this.datas.getAllData();
    //    console.log('yep', datas.length);
    }


}

const home = new Home();
home.init();


