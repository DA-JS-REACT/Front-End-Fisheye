class SetAttributeTabindex {



    keyboardAttribute(header,main,options={}) {
        const logo = header.firstElementChild;
        logo.setAttribute('tabindex', '-100');
        const button = main.querySelector('.contact_button');
        button.setAttribute('tabindex','-200');
        const selectSort = main.querySelector('#picture-select');
        selectSort.setAttribute('tabindex','-300');

        const allLink = main.querySelectorAll('.card-link');

        allLink.forEach(element => {
            element.setAttribute('tabindex','-400');
        });

        const allLikes = main.querySelectorAll('.likes-counter');
        allLikes.forEach(element => {
            element.setAttribute('tabindex','-500');
        });

        if(options.hasClose){
            // restore the original tabindex
            logo.setAttribute('tabindex', '1');

            button.setAttribute('tabindex','2');

            selectSort.setAttribute('tabindex','3');
            // cibling container for add dynamic attribute tabIndex
            const section = document.querySelector('.photograph-picture');
            let countElement = section.childElementCount;

            // restore the original tabindex established in articleMedia.js
            // for link
            for(let i = 0; i < countElement -1; i++) {
                let tabindexLink = 4 + i;
                allLink[i].setAttribute('tabindex',tabindexLink);
            }
            // for likes button
            for(let i = 0; i < countElement -1; i++) {
                let tabindexLikes = 5 + i;
                allLikes[i].setAttribute('tabindex',tabindexLikes);
            }


        }
    }

}

export {SetAttributeTabindex };