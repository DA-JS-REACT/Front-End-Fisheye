class SortFactory {

    /**
     * 
     * @returns  {HtmlElement}
     */
    getSelectSort (){
        const form = document.createElement('form');
        form.classList.add('photograph-sort');
        form.setAttribute('role','sorter');

        const label = document.createElement('label');
        label.classList.add('label-sort');
        label.setAttribute('for','picture-select');
        label.setAttribute('id','sort');
        label.textContent = 'Trier par';

        form.appendChild(label);

        const select = document.createElement('select');
        select.classList.add('select-sort');
        select.setAttribute('name','picture');
        select.setAttribute('id','picture-select');
        select.setAttribute('aria-labelleby','sort');
        select.setAttribute('tabindex','3');
        

        const option = document.createElement('option');
        option.setAttribute('value','popular');
        option.classList.add('option-sort');
        option.textContent = 'Popularité';
        select.appendChild(option);

        const option1 = document.createElement('option');
        option1.setAttribute('value','date');
        option1.classList.add('option-sort');
        option1.textContent = 'Date';
        select.appendChild(option1);

        const option2 = document.createElement('option');
        option2.setAttribute('value','title');
        option2.classList.add('option-sort');
        option2.textContent = 'Titre';
        select.appendChild(option2);

        form.appendChild(select);

        return form;
    }

}

export {SortFactory};