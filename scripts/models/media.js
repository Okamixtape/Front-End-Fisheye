class Media {
    constructor({ id, photographerId, title, image, video, likes, date, price }) {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image ? `./assets/medias/medias/${image}` : null;
        this.video = video ? `./assets/medias/medias/${video}` : null;
        this.fullImage = this.image;
        this.fullVideo = this.video;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }
    
    mediaCard() {
        return this.video ? this.videoCard() : this.photoCard();
    }

    photoCard() {
        return `<article class="media-card photo">
                    <div class="card__media" tabindex="0" aria-label="${this.title}, vue rapprochée" data-id="${this.id}">
                        <img src="${this.image}" class="card__image" alt="${this.title}" />
                    </div>
                    <div class="card__infos">
                        <h3 class="card__title">${this.title}</h3>
                        <button class="card__likes" aria-label="${this.likes} personnes aiment cette photo">${this.likes}</button>
                    </div>
                </article>`;
    }
    
    videoCard() {
        return `<article class="media-card video">
                    <div class="card__media" tabindex="0" aria-label="${this.title}, vue rapprochée" data-id="${this.id}">
                        <div class="card__overlay"></div>
                        <video class="card__video">
                            <source src="${this.video}" type="video/webm">
                        </video>
                    </div>
                    <div class="card__infos">
                        <h3 class="card__title">${this.title}</h3>
                        <button class="card__likes" aria-label="${this.likes} personnes aiment cette vidéo">${this.likes}</button>
                    </div>
                </article>`;
    }
}

export default Media;
