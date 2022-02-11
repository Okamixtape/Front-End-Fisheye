// Création de l'objet "Photographer" pour y récupérer données et les afficher

class Photographerpage {
  constructor() {
    this.modal = document.querySelector(".photographer__modal")
  }

  init = () => {
    this.initModal()
  }

  initModal = () => {
    const modalBtn = document.querySelector(".infos__button")
    const modalCloseBtn = document.querySelector(".modal__close")

    modalBtn.addEventListener("click", this.openModal)
    modalCloseBtn.addEventListener("click", this.closeModal)
  }

  openModal = () => {
    this.modal.classList.add("opened")
  }

  closeModal = () => {
    this.modal.classList.remove("opened")
  }
}

export default new Photographerpage()
