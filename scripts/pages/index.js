    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const photographers = [
            {
                "name": "Ma data test",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
        ]
        // et bien retourner le tableau photographers seulement une fois
        // return ({
        //     photographers: [...photographers, ...photographers, ...photographers]})
            const myRequest = new Request('./data/photographers.json');

            fetch(myRequest)
            .then(function(response) {
            console.log(response)
            return response.json();
            })
            .then(function(datas) {
                console.log(datas)
                displayData(datas.photographers)
            });
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
         getPhotographers();
        // displayData(photographers);
    };
    
    init();
    