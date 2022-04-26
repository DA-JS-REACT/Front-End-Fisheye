class Api {
    constructor (url) {
        this.url = url;
    }
    async getAllData() {

        return fetch(this.url)
            .then(function(response) {
                return response.json();
            })
            .then( (datas) => {
                //console.log('data :', datas);
                return datas;
            })
            .catch(err => console.log('Nope', err));

    }

}


export {Api};
