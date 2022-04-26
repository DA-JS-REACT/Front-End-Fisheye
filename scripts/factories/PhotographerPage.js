class PhotographerPageFactory {

    constructor(id, name, portrait, city, country,tagline,price) {

        this.id = id;
        this.name = name;
        this.portrait = portrait;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.city = city;

    }

    /**
     * 
     * @returns  {HtmlElement}
     */
    getPageMainHeader() {

        const divContent = document.createElement('div');
        divContent.classList.add('photograph-content');
        const photographCardHeader = `
            <h2 class="photograph-content__title ">${this.name}</h2>
            <p class="photograph-content__location ">${this.city},  ${this.country} </p>
            <p class="photograph-content__tagline ">  ${this.tagline}</p>
        `;
        const photographImgHeader =`
                <img class="photograph-img__img" src="./assets/photographers/${this.portrait}">
            `;
        divContent.innerHTML = photographCardHeader;

        const divImg = document.createElement('div');
        divImg.innerHTML =  photographImgHeader;
        divImg.classList.add('photograph-img');
        return [divContent , divImg];

    }

}

export {PhotographerPageFactory};