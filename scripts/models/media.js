class Media {
    constructor({ id, photographerId, title, image, video, likes, date, price }) {
        this.id = id
        this.photographerId = photographerId
        this.title = title || ""
        this.image = image ? `../../assets/medias/medias/${image}` : null
        this.video = video ? `../../assets/medias/medias/${video}` : null
        this.likes = likes
        this.date = date
        this.price = price
    }

    mediaCard = () => {
        let mediaHTML = `<article class="media-card">
                            <div class="card__wrapper">
                                <div class="card__media">this.image
                                    ? <img src="${this.image}" class="card__image" alt="${this.title}" />
                                    : <video class="card__video"><source src="${this.video}" type="video/webm"></video>
                                </div>
                                <div class="card__infos">
                                    <h3 class="card__title">${this.title}</h3>
                                    <button class="card__likes">${this.likes}</button>
                                </div>
                            </div>
                        </article>`

        return mediaHTML
    }
}

export default Media