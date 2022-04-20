const api = {

    getDatas: function () {
          const myRequest = new Request('./data/photographers.json');
            fetch(myRequest)
            .then(function(response) {
            return response.json();
            })
            .then(function(datas) {
                index.displayData(datas.photographers)
            });
    }
  
}