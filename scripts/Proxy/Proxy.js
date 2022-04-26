

class Proxy {
    /**
     * @param {array}
     */
    constructor() {
        this.cache = [];
    }
    /**
     *
     * @param {array} photographers
     */
    async HomePage(photographers) {
        photographers.forEach(test => {
        // console.log('loop',test.id);
        // console.log('loop',this.cache);
            const cashedResults = this.cache.filter(cashedPhotographers => cashedPhotographers.id === test.id);
            console.log('cashedResults',cashedResults);
            if(cashedResults){
                console.log('yes', this.cache);
                return cashedResults;
            }
        });
        this.cache.push(photographers);
        console.log('server',this.cache);
        return photographers;


    }
}

export { Proxy };