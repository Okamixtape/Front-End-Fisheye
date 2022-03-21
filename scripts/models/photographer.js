// Création du constructor "Photographer" qui inclut les cartes "photographerCard" et "photographerInfos"

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
                        <a href="./photographer.html?id=${this.id}" aria-label="Portrait photographique de ${this.name}">
                          <div class="card__media">
                            <img src="${this.portrait}" alt="${this.name}" class="card__image" />
                          </div>
                          <h2 class="card__title heading__title">${this.name}</h2>
                        </a>
                        <span class="card__country heading__subtitle" alt="Pays d'origine du photographe" tabindex="0">${this.country}</span>
                        <p class="card__tagline" alt="Citation du photographe" tabindex="0">${this.tagline}</p>
                        <span class="card__price" alt="Frais du photographe" tabindex="0">${this.price}&euro;/jour</span>
                      </div>
                    </article>`

    return cardHTML
  }

  // Carte infos du photographe de la page photographerpage
  photographerInfos = () => {
    let infosHTML = `<div class="infos__details">
                      <h1 class="infos__name heading__title" tabindex="0">${this.name}</h1>
                      <h2 class="infos__country heading__subtitle" alt="Pays d'origine du photographe" tabindex="0">${this.country}</h2>
                      <p class="infos__tagline" alt="Citation du photographe" tabindex="0">${this.tagline}</p></div>
                      <button class="btn infos__button" aria-label="Contactez le photographe">Contactez-moi</button>
                      <div class="infos__media"><img src="${this.portrait}" class="infos__image" aria-label="Portrait photographique de ${this.name}" tabindex="0"/>
                    </div>`

    return infosHTML
  }

  // Carte prix et likes du photographe de la page photographerpage
  photographerDetailsCard = (totalLikes) => {
    let detailsHTML = `<div class="photographer__details">
                      <div class="details__wrapper" tabindex="0">
                        <p class="details__likes" alt="Nombre total de likes du photographe" tabindex="0">${totalLikes}</p>
                        <p class="details__price" alt="Frais du photographe" tabindex="0">${this.price}&euro; / jour</p>
                      </div>
                    </div>`

    return detailsHTML
  }
}

export default Photographer
