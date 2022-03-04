// Création du constructor "Modal" qui inclut la carte "modalCard" et une fonction de comportement "modalBehavior"

class Modal {
    constructor() {
        this.modal
        this.photographer
    }

    // Initialisation des fonctions du constructor Modal (ayant comme paramètre le "photographe")
    init = async (photographer) => {
        this.photographer = photographer
        this.modal = await this.modalCard()

        this.modalBehavior()
    }

    // Attribution des fonctions d'ouverture et fermeture de la modale à l'écoute du clique
    modalBehavior = () => {
        const form = this.modal.querySelector("form")
        const open = document.querySelector(".infos__button")
        const close = this.modal.querySelector(".modal__close")
    
        form.addEventListener("submit", this.submitForm)
        open.addEventListener("click", this.openModal)
        close.addEventListener("click", this.closeModal)
    }

    // Fonction permettant de soumettre le formulaire
    submitForm = (e) => {
        e.preventDefault()
    
        const form = {
            firstname: e.target.querySelector("#firstname").value,
            lastname: e.target.querySelector("#lastname").value,
            email: e.target.querySelector("#email").value,
            message: e.target.querySelector("#message").value,
        }
        
        console.log(form)
    }

    // Carte modale de contact (mise dans une promesse pour être utilisé indépendamment de la lightbox)
    modalCard = () => {
        // Promesse permettant le traitement asynchrone des évènements de la page
        return new Promise((resolve) => {
            const wrapper = document.querySelector(".platform-photographer")

            let modalHTML = `<div class="photographer__modal">
                                <div class="modal__wrapper">
                                    <div class="modal__content">
                                        <div class="modal__header">
                                            <h2 class="modal__title">Contactez-moi</h2>
                                            <h2 class="modal__title">${this.photographer.name}</h2>
                                            <div class="modal__close"></div>
                                        </div>
                                        <div class="modal__body">
                                            <form class="platform-form">
                                                <div class="form__row">
                                                    <label for="firstname">Prénom</label>
                                                    <input type="text" id="firstname" name="firstname" />
                                                </div>
                                                <div class="form__row">
                                                    <label for="lastname">Nom</label>
                                                    <input type="text" id="lastname" name="lastname" />
                                                </div>
                                                <div class="form__row">
                                                    <label for="email">E-mail</label>
                                                    <input type="email" id="email" name="email" />
                                                </div>
                                                <div class="form__row">
                                                    <label for="message">Votre message</label>
                                                    <textarea id="message" name="message" rows="5"></textarea>
                                                </div>
                                                <div class="form__row">
                                                    <button class="btn modal__button">Envoyer</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>`

            // Injection dans le DOM
            wrapper.innerHTML += modalHTML

            // Résolution de la promesse
            resolve(document.querySelector(".photographer__modal"))
        })
    }

    // Fonction d'ouverture et de fermeture de la modale de contact
    openModal = () => {
        this.modal.classList.add("opened")
    }

    // et de fermeture de la modale de contact
    closeModal = () => {
        this.modal.classList.remove("opened")
    }
}

export default Modal