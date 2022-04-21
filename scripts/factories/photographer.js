function photographerFactory(data) {
	const {id, name, portrait, city, country,tagline,price } = data;

	const picture = `./public/assets/photographers/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement( 'article' );
		const link = document.createElement( 'a');
		link.setAttribute( 'href', 'photographer.html?id='+ id);
		const img = document.createElement( 'img' );
		img.setAttribute('src', picture);
		const h2 = document.createElement( 'h2' );
		h2.textContent = name;
		link.appendChild(img);
		link.appendChild(h2);

		const  location = document.createElement( 'p');
		location.textContent = city +',' +' ' + country;
		const job = document.createElement( 'p');
		job.textContent = tagline;
		const buy = document.createElement('span');
		buy.textContent = price + '€/jour';
		article.appendChild(link);
		article.appendChild(location);
		article.appendChild(job);
		article.appendChild(buy);


		return (article);
	}
	return { picture, getUserCardDOM };
}