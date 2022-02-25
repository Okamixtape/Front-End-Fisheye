// Création du constructor "Lightbox" qui inclut une fonction de comportement "lightboxBehavior"

class Lightbox {
    constructor() {
        this.lightbox = document.querySelector('.lightbox')
    
        this.medias = []
        this.currentMedia = {}
        this.currentMediaIndex
    }

    // Initialisation des fonctions d'affichage et du comportement du constuctor Lightbox
    // param : medias (photos et vidéos)
    init = async (medias) => {
        this.medias = medias

        this.lightboxBehavior()
    }

    // Fonction globale du comportement de la lightbox (ouverture, fermeture, flèche avant et arrière)
    lightboxBehavior = () => {
        const medias = document.querySelectorAll(".media-card .card__media")
        const close = this.lightbox.querySelector(".lightbox__close")
        const previous = this.lightbox.querySelector(".lightbox__previous")
        const next = this.lightbox.querySelector(".lightbox__next")

        medias.forEach((m) => m.addEventListener("click", () => this.openLightbox(m.parentElement)))
        close.addEventListener("click", this.closeLightbox)
        previous.addEventListener("click", () => this.setMediaIndex(this.currentMediaIndex - 1))
        next.addEventListener("click", () => this.setMediaIndex(this.currentMediaIndex + 1))
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

    // Fonction permettant de créer l'index de base pour utiliser les flèches avant et arrière
    setMediaIndex = (i) => {
        if (i < 0) i = this.medias.length - 1
        if (i === this.medias.length) i = 0

        this.refreshMedia()

        this.currentMediaIndex = i
        this.currentMedia = this.medias[i]

        this.lightboxMediaCard()
    }

    // Fonction permettant de mettre à jour la sélection des médias
    refreshMedia = () => {
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

export default Lightbox