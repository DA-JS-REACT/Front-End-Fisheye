

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
        photographers.forEach(photographersCashed => {
            //console.log('loop',photographersCashed.id);
            const cashedResults = this.cache.filter(cacheId => cacheId === photographersCashed.id);
            console.log('cashedResults',cashedResults);
            // if(cashedResults){
            //     console.log('yes', this.cache);
            //     return cashedResults;
            // } else {
            //     console.log('server',photographers);
            //     return photographers;
            //}
            this.cache.push(photographers);
            //console.log('server',photographers);
            return photographers;
        });

    }
}

export { Proxy };