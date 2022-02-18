// Création de l'objet "Photographer" et de sa carte "photographerCard"

class Photographer {
  constructor({ id, name, city, country, tagline, price, portrait }) {
    this.id = id
    this.name = name
    this.city = city
    this.country = country
    this.tagline = tagline
    this.price = price
    this.portrait = `./assets/medias/photographers/${portrait}`
  }

  // Carte photographe de la homepage
  photographerCard = () => {
    let cardHTML = `<article class="photographer-card">
                      <div class="card__wrapper">
                        <a href="/photographer.html?id=${this.id}">
                          <div class="card__media">
                            <img src="${this.portrait}" alt="${this.name}" class="card__image" />
                          </div>
                          <h2 class="card__title heading__title">${this.name}</h2>
                        </a>
                        <span class="card__country heading__subtitle">${this.country}</span>
                        <p class="card__tagline">${this.tagline}</p>
                        <span class="card__price">${this.price}&euro;/jour</span>
                      </div>
                    </article>`

    return cardHTML
  }

  // Carte infos du photographe de la page photographerpage
  photographerInfos = () => {
    let infosHTML = `<div class="infos__details">
                      <h1 class="infos__name heading__title">${this.name}</h1>
                      <h2 class="infos__country heading__subtitle">${this.country}</h2>
                      <p class="infos__tagline">${this.tagline}</p></div>
                      <button class="btn infos__button">Contactez-moi</button>
                      <div class="infos__media"><img src="${this.portrait}" class="infos__image" alt="${this.name}" />
                    </div>`

    return infosHTML
  }
}

export default Photographer
