// Création du constructor "Photographer" qui inclut les cartes "photographerCard" et "photographerInfos"

class Photographer {
  constructor({ id, name, city, country, tagline, price, portrait }) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.country = country;
    this.tagline = tagline;
    this.price = price;
    this.portrait = `./assets/medias/photographers/${portrait}`;
  }

  // Carte photographe de la homepage
  photographerCard() {
    return `<article class="photographer-card">
              <div class="card__wrapper">
                <a href="./photographer.html?id=${this.id}" aria-label="Portfolio de ${this.name}">
                  <div class="card__media">
                    <img data-src="${this.portrait}" alt="${this.name}" class="card__image lazy" />
                  </div>
                  <h2 class="card__title heading__title">${this.name}</h2>
                </a>
                <span class="card__country heading__subtitle" aria-label="Pays d'origine du photographe" alt="Pays d'origine du photographe" tabindex="0">${this.country}</span>
                <p class="card__tagline" aria-label="Citation du photographe" alt="Citation du photographe" tabindex="0">${this.tagline}</p>
                <span class="card__price" aria-label="Frais à la journée du photographe" alt="Frais à la journée du photographe" tabindex="0">${this.price}&euro;/jour</span>
              </div>
            </article>`;
  }

  // Carte infos du photographe de la page photographerpage
  photographerInfos() {
    return `<div class="infos__details">
              <h1 class="infos__name heading__title" tabindex="0">${this.name}</h1>
              <h2 class="infos__country heading__subtitle" aria-label="Pays d'origine du photographe" alt="Pays d'origine du photographe" tabindex="0">${this.country}</h2>
              <p class="infos__tagline" aria-label="Citation du photographe" alt="Citation du photographe" tabindex="0">${this.tagline}</p></div>
              <button class="btn infos__button" aria-label="Contactez le photographe">Contactez-moi</button>
              <div class="infos__media"><img data-src="${this.portrait}" class="infos__image lazy" aria-label="Portfolio de ${this.name}" tabindex="0"/>
            </div>`;
  }

  // Carte prix et likes du photographe de la page photographerpage
  photographerDetailsCard(totalLikes) {
    return `<div class="photographer__details">
              <div class="details__wrapper" tabindex="0">
                <p class="details__likes" aria-label="Nombre total de likes du photographe" alt="Nombre total de likes du photographe" tabindex="0">${totalLikes}</p>
                <p class="details__price" aria-label="Frais du photographe à la journée" alt="Frais du photographe à la journée" tabindex="0">${this.price}&euro; / jour</p>
              </div>
            </div>`;
  }
}

export default Photographer;
