function photographerFactory(data) {
    const { name, portrait, city } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const h4 = document.createElement( "h4" );
        h4.textContent = city;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h4);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}