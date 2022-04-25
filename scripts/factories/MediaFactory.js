class MediaFactory {

    constructor(id, photographerId, title, image, likes,date,price) {

        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }

    getSelectHtml (){
        const div = document.createElement('div');
        div.classList.add('photograph-picture');
        const select = ` <label for="picture-select">Trier par :</label>

            <select name="picture" id="picture-select">
                <option value="popular">Popularité</option>
                <option value="date">Date</option>
                <option value="title">Titre</option>
            </select>
        `;
        div.innerHTML = select;
        return div;
    }

    getPageMainSections() {
        const  article = document.createElement('article');
        article.classList.add('article-picture');
       
        const title = `
                <h3>${this.title}</h3>
                `;
        // div.innerHTML = article;
        article.innerHTML = title;
        return article;

    }
}

export {MediaFactory};