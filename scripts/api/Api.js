class Api {
    constructor (url) {
        this.url = url;
    }
    async getAllData() {

        fetch(this.url)
            .then(function(response) {
                return response.json();
            })
            .then( (datas) => {
                console.log('data :', datas);
                return datas;
            })
            .catch(err => console.log('Nope', err));

    }

}


export {Api};
const api = new Api('../data/photographers.json');
let test  = api.getAllData();
console.log(test.media); 

