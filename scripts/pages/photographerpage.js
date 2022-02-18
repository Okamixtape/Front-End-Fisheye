import createElement from "../factory.js"
import { fetchData } from "../utils/fetchData.js"

// Création de l'objet "Photographerpage" pour y récupérer données et les afficher

class Photographerpage {
  constructor() {
    this.photographer = {}
    this.photographerId = parseInt(window.location.search.split("?id=")[1])
  }

  // Redirection vers URL du photographe
  // Initialisation asynchrone (on attends de récupérer les données pour les afficher)
  init = async () => {
    if (!this.photographerId) this.redirect()

    this.photographer = await this.getPhotographer()
    this.medias = await this.getMedias()

    this.displayPhotographer()
    this.displayMedias()

    this.initModal()
  }

  // Fonction de redirection vers l'URL avec l'ID du photographe
  redirect = () => {
    window.location.href = "/"
  }

  // Fonction permettant de récupèrer l'ID du photographe pour créer sa carte infos
  getPhotographer = async () => {
    const photographers = await fetchData("../../data/photographers.json")
    const photographer = photographers.photographers.find((p) => p.id === this.photographerId)

    if (!photographer) this.redirect()

    return createElement("Photographer", photographer)
  }

  // Fonction permettant de récupérer les chemins vers les photos/vidéos pour créer les cartes médias
  getMedias = async () => {
    const allMedias = await fetchData("../../data/medias.json")
    const photographerMedias = allMedias.media.filter((m) => m.photographerId === this.photographerId)

    let medias = []

    photographerMedias.forEach((p) => medias.push(createElement("Media", p)))

    return medias
  }

  // Fonction permettant d'afficher les infos des photographes dans le DOM 
  displayPhotographer = () => {
    const infoSection = document.querySelector(".infos__wrapper")

    infoSection.innerHTML = this.photographer.photographerInfos()
  }

  // Fonction permettant d'afficher les médias des photographes dans le DOM
  displayMedias = () => {
    const mediasBody = document.querySelector(".medias__list")

    this.medias.forEach((p) => (mediasBody.innerHTML += p.mediaCard()))
  }

  // Initialisation de la modale "formulaire"
  initModal = () => {
    this.modal = document.querySelector(".photographer__modal")

    const modalBtn = document.querySelector(".infos__button")
    const modalCloseBtn = document.querySelector(".modal__close")

    modalBtn.addEventListener("click", this.openModal)
    modalCloseBtn.addEventListener("click", this.closeModal)
  }

  // Fonction permettant de l'ouvrir
  openModal = () => {
    this.modal.classList.add("opened")
  }

  // Et de la fermer
  closeModal = () => {
    this.modal.classList.remove("opened")
  }
}

export default new Photographerpage()
