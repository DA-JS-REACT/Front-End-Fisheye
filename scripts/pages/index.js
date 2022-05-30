import { Api } from '../api/Api.js';
import { PhotographerHomeFactory } from '../factories/PhotographersHome.js' ;



class Home  {

    constructor() {
        const newLocal = './data/photographers.json';
        this.datas = new Api(newLocal);
        this.photographersSection = document.querySelector('.photographer-section');

    }

    /**
     *
     * @param {array} photographers
     */

    displayData(photographers) {

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

    }

    async  init() {
        //Récupère les datas des photographes
        const { photographers }  = await this.datas.getAllData();


        this.displayData(photographers);

    }


}
export {Home};
const home = new Home();
home.init();


