class Lightbox {
    constructor() {
        this.lightbox
    
        this.medias = []
        this.currentMedia = {}
        this.currentMediaIndex
    }

    // Initialisation des fonctions d'affichage et de comportement du constuctor Lightbox
    // param : medias (photos et vidéos)
    init = async (medias) => {
        this.medias = medias

        this.lightboxCard()
        this.lightboxBehaviour()
    }

    // Fonction permettant l'ouverture de la lightbox
    openLightbox = (media) => {
        const mediaIndex = [...media.parentElement.children].indexOf(media)

        this.setMediaIndex(mediaIndex)
        this.lightbox.classList.add("opened")
    }

    // Fonction permettant la fermeture de la lightbox
    closeLightbox = () => {
        this.lightbox.classList.remove("opened")
    }

    // Fonction globale du comportement de la lightbox (ouverture, fermeture, flèche avant et arrière)
    lightboxBehaviour = () => {
        const close = this.lightbox.querySelector(".lightbox__close")
        const previous = this.lightbox.querySelector(".lightbox__previous")
        const next = this.lightbox.querySelector(".lightbox__next")

        close.addEventListener("click", this.closeLightbox)
        previous.addEventListener("click", () => this.setMediaIndex(this.currentMediaIndex - 1))
        next.addEventListener("click", () => this.setMediaIndex(this.currentMediaIndex + 1))
    }

    // Fonction permettant d'afficher la lightbox des médias dans le DOM
    lightboxCard = () => {
        const lightboxWrapper = document.querySelector("main.platform-photographer")

        let lightboxHTML = `<div class="lightbox">
                                <div class="lightbox__previous"></div>
                                <div class="lightbox__media"></div>
                                <div class="lightbox__next"></div>
                                <div class="lightbox__close"></div>
                            </div>`

        lightboxWrapper.innerHTML += lightboxHTML

        this.lightbox = document.querySelector(".lightbox")
    }

    // Fonction permettant de créer l'index pour utiliser les flèches avant et arrière
    setMediaIndex = (i) => {
        if (i < 0) i = this.medias.length - 1
        if (i === this.medias.length) i = 0

        this.resetMedia()

        this.currentMediaIndex = i
        this.currentMedia = this.medias[i]

        this.lightboxMediaCard()
    }

    // Fonction permettant de mettre à jour la sélection des médias
    resetMedia = () => {
        const mediaWrapper = document.querySelector(".lightbox__media")

        mediaWrapper.innerHTML = ""
    }

    // Fonction permettant d'afficher la carte lightbox dans le DOM
    lightboxMediaCard = () => {
        const mediaWrapper = document.querySelector(".lightbox__media")

        const image = `<img src="${this.currentMedia.fullImage}" class="lightbox__image" alt="${this.currentMedia.title}" />`
        const video = `<video controls class="lightbox__video"><source src="${this.currentMedia.fullVideo}" type="video/webm"></video>`
        const title = `<h2 class="lightbox__title heading__subtitle">${this.currentMedia.title}</h2>`
        const mediaHTML = this.currentMedia.video ? video : image

        mediaWrapper.innerHTML += mediaHTML + title
    }
}
    
    export default new Lightbox()