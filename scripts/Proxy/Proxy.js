

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
     
    
          
        const cashedResults = this.cache.filter(cashedPhotographers => console.log(cashedPhotographers));
        console.log('cashedResults',cashedResults);
        // if(cashedResults){
        //     console.log('yes', cashedResults);
        //     return cashedResults;
        // }
          
      
        // console.log('cashedResults',cashedResults);
      
       
        this.cache.push(photographers);
        console.log('server',this.cache);
        return this.cache;


    }
}

export { Proxy };