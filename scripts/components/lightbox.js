// Création du constructor "Lightbox" qui inclut une fonction de comportement "lightboxBehavior"

class Lightbox {
    constructor() {
        this.lightbox = document.querySelector('.lightbox')
        this.isLightboxOpen = false
    
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

    // Fonction globale du comportement de la lightbox (ouverture, fermeture, flèche avant et arrière, affichage en fonction du tri)
    lightboxBehavior = () => {
        const list = document.querySelector('.medias__list')
        const medias = document.querySelectorAll(".media-card .card__media")
        const close = this.lightbox.querySelector(".lightbox__close")
        const previous = this.lightbox.querySelector(".lightbox__previous")
        const next = this.lightbox.querySelector(".lightbox__next")

        // Affichage de la liste des cartes médias dans lightbox
        list.addEventListener("display", () => {
            document.querySelectorAll(".media-card .card__media").forEach((m) => {
                m.addEventListener("click", () => this.openLightbox(m.parentElement))
                m.addEventListener("keyup", (e) => e.key === "Enter" && this.openLightbox(m.parentElement))
            })
        })

        // Ajout des écouteurs d'évènements (commandes d'accessitilitté)
        medias.forEach((m) => m.addEventListener("click", () => this.openLightbox(m.parentElement)))
        close.addEventListener("click", this.closeLightbox)

        medias.forEach((m) => {
            m.addEventListener("click", () => this.openLightbox(m.parentElement))
            m.addEventListener("keyup", (e) => e.key === "Enter" && this.openLightbox(m.parentElement))

            close.addEventListener("click", this.closeLightbox(m.parentElement))
            close.addEventListener("keyup", (e) => e.key === "Enter" && this.closeLightbox(m.parentElement))
        })
        
        previous.addEventListener("click", () => this.setMediaIndex(this.currentMediaIndex - 1))
        previous.addEventListener("keyup", (e) => e.key === "Enter" && this.setMediaIndex(this.currentMediaIndex - 1))

        next.addEventListener("click", () => this.setMediaIndex(this.currentMediaIndex + 1))
        next.addEventListener("keyup", (e) => e.key === "Enter" && this.setMediaIndex(this.currentMediaIndex + 1))

        window.addEventListener("keyup", (e) => {
            if (this.isLightboxOpen) {
                e.key === "ArrowLeft" && this.setMediaIndex(this.currentMediaIndex - 1)
                e.key === "ArrowRight" && this.setMediaIndex(this.currentMediaIndex + 1)
                e.key === "Escape" && this.closeLightbox()
            }
        })
    }

    // Fonction permettant l'ouverture de la lightbox
    openLightbox = (media) => {
        // Déclaration de l'index
        const mediaIndex = [...media.parentElement.children].indexOf(media)

        this.setMediaIndex(mediaIndex)
        this.isLightboxOpen = true
        this.lightbox.classList.add("opened")
    }

    // Fonction permettant la fermeture de la lightbox
    closeLightbox = () => {
        this.isLightboxOpen = false
        this.lightbox.classList.remove("opened")
    }

    // Fonction permettant de créer l'index de base pour utiliser les flèches avant et arrière
    setMediaIndex = (i) => {
        if (i < 0) i = this.medias.length - 1
        if (i === this.medias.length) i = 0

        // Rafraichissement de la lightbox
        this.refreshMedia()

        this.currentMediaIndex = i
        this.currentMedia = this.medias[i]

        this.lightboxMediaCard()
    }

    // Fonction permettant de mettre à jour la sélection des médias
    refreshMedia = () => {
        const mediaWrapper = document.querySelector(".lightbox__media")

        // Rafraichissement en injectant rien = ""
        mediaWrapper.innerHTML = ""
    }

    // Fonction permettant d'afficher la carte lightbox dans le DOM
    lightboxMediaCard = () => {
        const mediaWrapper = document.querySelector(".lightbox__media")

        const image = `<img src="${this.currentMedia.fullImage}" class="lightbox__image" alt="${this.currentMedia.title}" />`
        const video = `<video controls class="lightbox__video"><source src="${this.currentMedia.fullVideo}" type="video/webm"></video>`
        const title = `<h2 class="lightbox__title heading__subtitle">${this.currentMedia.title}</h2>`
        // Opérateur (ternaire) conditionnel
        const mediaHTML = this.currentMedia.video ? video : image

        // Injection dans le DOM
        mediaWrapper.setAttribute("aria-label", this.currentMedia.title)
        mediaWrapper.innerHTML += mediaHTML + title
    }
}

export default Lightbox