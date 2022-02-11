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

  photographerCard = () => {
    let cardHTML = `<article class="photographer-card"><div class="card__wrapper">`
    cardHTML += `<a href="/photographer.html?id=${this.id}">`
    cardHTML += `<div class="card__media"><img src="${this.portrait}" alt="${this.name}" class="card__image" /></div>`
    cardHTML += `<h2 class="card__title heading__title">${this.name}</h2>`
    cardHTML += `</a>`
    cardHTML += `<span class="card__country heading__subtitle">${this.country}</span>`
    cardHTML += `<p class="card__tagline">${this.tagline}</p>`
    cardHTML += `<span class="card__price">${this.price}&euro;/jour</span>`
    cardHTML += `</div></article>`

    return cardHTML
  }
}

export default Photographer
