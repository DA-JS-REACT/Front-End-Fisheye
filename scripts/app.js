const app = {
    init: function () {
        console.log('init');
        index.getPhotographers();
        photographerPage.getPhotographer();

    }
}

document.addEventListener('DOMContentLoaded', app.init);