// Récupération des données de photographers.json pour la création des cartes "photographe"
// Afficher avec fonction displayData sur la page d'accueil

function photographerFactory(data) {

    // Déclaration des informations à récupérer
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/${portrait}`;

    // Création des différentes parties de la carte à afficher dans le DOM
    function getUserCardDOM() {
        const cardElement = document.createElement("article")

        const cardWrapper = document.createElement("div")
        cardWrapper.classList.add("cardWrapper")

        const cardLocation = document.createElement("p")
        cardLocation.classList.add("cardLocation")
        cardLocation.innerHTML = city + ", " + country
        
        const cardQuote = document.createElement("p")
        cardQuote.classList.add=("cardQuote")
        cardQuote.innerHTML = tagline
        
        const cardPrice = document.createElement("p")
        cardPrice.classList.add=("cardPrice")
        cardPrice.innerHTML = price + "€/jour"

        const cardAnchor = document.createElement("a")
        cardAnchor.href = "photographer.html?id=" + id

        const cardImg = document.createElement("img")
        cardImg.setAttribute("src", picture)

        const cardTitle = document.createElement("h2")
        cardTitle.innerHTML = name

        cardElement.appendChild(cardAnchor)
        cardAnchor.appendChild(cardImg);
        cardAnchor.appendChild(cardTitle);
        cardElement.appendChild(cardWrapper)

        cardWrapper.appendChild(cardLocation)
        cardWrapper.appendChild(cardQuote)
        cardWrapper.appendChild(cardPrice)

        // On retourne la carte complète
        return (cardElement);
    }
    // Avec les informations nécessaires
    return { name, id, city, country, tagline, price, picture, getUserCardDOM }
}