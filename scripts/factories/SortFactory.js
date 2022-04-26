class SortFactory {

    /**
     * 
     * @returns  {HtmlElement}
     */
    getSelectSort (){
        const form = document.createElement('form');
        form.classList.add('photograph-sort');
        const select = ` <label class="label-sort" for="picture-select">Trier par </label>

            <select class="select-sort" name="picture" id="picture-select">
                <option class="option-sort" value="popular">Popularité</option>
                <option class="option-sort" value="date">Date</option>
                <option  class="option-sort" value="title">Titre</option>
            </select>
        `;
        form.innerHTML = select;
        return form;
    }

}

export {SortFactory};