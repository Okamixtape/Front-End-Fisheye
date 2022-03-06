import createElement from "../factory.js"
import Lightbox from "../components/lightbox.js"
import Modal from "../components/modal.js"
import Sortlist from "../components/sortlist.js"
import { fetchData } from "../utils/fetchData.js"

// Création de l'objet "Photographerpage" pour y récupérer données et les afficher

class Photographerpage {
  constructor() {
    this.photographer = {}
    this.photographerId = parseInt(window.location.search.split("?id=")[1])

    this.medias
  }

  // Redirection vers URL du photographe
  // Initialisation asynchrone (on attends de récupérer les données pour les afficher)
  init = async () => {
    if (this.photographerId === isNaN || !this.photographerId) this.redirect()

    this.photographer = await this.getPhotographer()
    this.medias = await this.getMedias()

    this.displayPhotographer()
    this.displayMedias()

    new Sortlist(this.medias)
    new Modal().init(this.photographer)
    new Lightbox().init(this.medias)
  }

  // Fonction de redirection vers l'URL avec l'ID du photographe
  redirect = () => {
    window.location.href = "/"
  }

  // Fonction permettant de récupèrer l'ID du photographe pour créer sa carte infos
  getPhotographer = async () => {
    const photographers = await fetchData("./data/photographers.json")
    const photographer = photographers.photographers.find((p) => p.id === this.photographerId)

    if (!photographer) this.redirect()

    return createElement("Photographer", photographer)
  }

  // Fonction permettant de récupérer les chemins vers les photos/vidéos pour créer les cartes médias
  getMedias = async () => {
    const allMedias = await fetchData("./data/medias.json")
    const photographerMedias = allMedias.media.filter((m) => m.photographerId === this.photographerId)

    let medias = []

    photographerMedias.forEach((p) => medias.push(createElement("Media", p)))

    return medias
  }

  // Fonction permettant d'afficher les infos des photographes dans le DOM 
  displayPhotographer = () => {
    const infoSection = document.querySelector(".infos__wrapper")
    const pageWrapper = document.querySelector(".platform-photographer")
    const totalLikes = this.medias.reduce((a, b) => +a + +b.likes, 0)

    infoSection.innerHTML = this.photographer.photographerInfos()
    pageWrapper.innerHTML += this.photographer.photographerDetailsCard(totalLikes)
  }

  // Fonction permettant d'afficher les médias des photographes dans le DOM
  displayMedias = () => {
    const mediasBody = document.querySelector(".medias__list")

    this.medias.forEach((p) => (mediasBody.innerHTML += p.mediaCard()))
  }
}

export default Photographerpage