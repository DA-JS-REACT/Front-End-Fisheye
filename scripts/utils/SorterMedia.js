class SorterMedia {

    // /**
    //  *
    //  * @param {array} media
    //  */
    // constructor(media,inputValue){
    //     this.media = media;
    //     this.inputValue = inputValue;

    // }
    /**
     * 
     * @param {array} media
     * @param {string} inputValue
     * @returns {array}
     */
    OrderBy(media,inputValue) {
        const result = media.sort((a,b) => {
            if(inputValue === 'asc'){
                return a.title.toLowerCase().localeCompare(b.title);
            } else if(inputValue === 'desc'){
                return b.likes - a.likes;
            }
        });

        return result;
    }

}

export {SorterMedia};