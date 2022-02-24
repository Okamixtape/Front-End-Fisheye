class Media {
    constructor({ id, photographerId, title, image, video, likes, date, price }) {
        this.id = id
        this.photographerId = photographerId
        this.title = title || ""
        this.image = image ? `../../assets/medias/medias/${image}` : null
        this.video = video ? `../../assets/medias/medias/${video}` : null
        this.fullImage = image ? `../../assets/medias/medias/${image}` : null
        this.fullVideo = video ? `../../assets/medias/medias/${video}` : null
        this.likes = likes
        this.date = date
        this.price = price
    }

    // mediaCard = () => {
    //     let mediaHTML = `<article class="media-card">
    //                         <div class="card__wrapper">
    //                             <div class="card__media">this.image
    //                                 ? <img src="${this.image}" class="card__image" alt="${this.title}" />
    //                                 : <video class="card__video"><source src="${this.video}" type="video/webm"></video>
    //                             </div>
    //                             <div class="card__infos">
    //                                 <h3 class="card__title">${this.title}</h3>
    //                                 <button class="card__likes">${this.likes}</button>
    //                             </div>
    //                         </div>
    //                     </article>`

    //     return mediaHTML
    // }
    
    mediaCard = () => {
        return this.video ? this.videoCard() : this.photoCard()
    }

    photoCard = () => {
        let photoHTML = `<article class="media-card photo">
                            <div class="card__media">
                                <img src="${this.image}" class="card__image" alt="${this.title}" />
                            </div>
                            <div class="card__infos">
                                <h3 class="card__title">${this.title}</h3>
                                <button class="card__likes">${this.likes}</button>
                            </div>
                        </article>`

        return photoHTML
    }
    
    videoCard = () => {
        let videoHTML = `<article class="media-card video">
                            <div class="card__media">
                                <div class="card__overlay"></div>
                                <video class="card__video">
                                    <source src="${this.video}" type="video/webm">
                                </video>
                            </div>
                            <div class="card__infos">
                                <h3 class="card__title">${this.title}</h3>
                                <button class="card__likes">${this.likes}</button>
                            </div>
                        </article>`

        return videoHTML
    }
}

export default Media