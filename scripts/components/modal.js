// Création du constructor "Modal" qui inclut la carte "modalCard" et une fonction de comportement "modalBehavior"

class Modal {
    constructor() {
        this.modal = null;
        this.photographer = null;
    }

    // Initialisation des fonctions du constructor Modal (ayant comme paramètre le "photographe")
    init = async (photographer) => {
        this.photographer = photographer;
        this.modal = await this.modalCard();

        this.modalBehavior();
    }

    // Attribution des fonctions d'ouverture et fermeture de la modale à l'écoute du clique
    modalBehavior = () => {
        const form = this.modal.querySelector("form");
        const open = document.querySelector(".infos__button");
        const close = this.modal.querySelector(".modal__close");
    
        form.addEventListener("submit", this.submitForm);
        open.addEventListener("click", this.openModal);
        open.addEventListener("click", this.focusModal);
        close.addEventListener("click", this.closeModal);

        // Ajout des écouteurs d'évènements (commandes d'accessibilité)
        open.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                this.openModal();
            }
        });

        close.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                this.closeModal();
            }
        });

        window.addEventListener("keyup", (e) => {
            if (e.key === "Escape") {
                this.closeModal();
            }
        });
    }

    // Fonction permettant de soumettre le formulaire
    submitForm = (e) => {
        e.preventDefault();
    
        const form = {
            firstname: e.target.querySelector("#firstname").value,
            lastname: e.target.querySelector("#lastname").value,
            email: e.target.querySelector("#email").value,
            message: e.target.querySelector("#message").value,
        };
        
        console.table(form);
    }

    // Carte modale de contact (mise dans une promesse pour être utilisé indépendamment de la lightbox)
    modalCard = () => {
        // Promesse permettant le traitement asynchrone des évènements de la page
        return new Promise((resolve) => {
            const wrapper = document.querySelector(".platform-photographer");

            let modalHTML = `<div class="photographer__modal">
                                <div class="modal__wrapper">
                                    <div class="modal__content">
                                        <div class="modal__header">
                                            <h2 class="modal__title" tabindex="0">Contactez-moi</h2>
                                            <h2 class="modal__title">${this.photographer.name}</h2>
                                            <div class="modal__close" aria-label="Fermer le formulaire de contact" tabindex="0"></div>
                                        </div>
                                        <div class="modal__body">
                                            <form class="platform-form">
                                                <div class="form__row">
                                                    <label for="firstname" tabindex="0">Prénom</label>
                                                    <input type="text" id="firstname" name="firstname" required minlength="2"/>
                                                </div>
                                                <div class="form__row">
                                                    <label for="lastname" tabindex="0">Nom</label>
                                                    <input type="text" id="lastname" name="lastname" required minlength="2"/>
                                                </div>
                                                <div class="form__row">
                                                    <label for="email" tabindex="0">E-mail</label>
                                                    <input type="email" id="email" name="email" required/>
                                                </div>
                                                <div class="form__row">
                                                    <label for="message" tabindex="0">Votre message</label>
                                                    <textarea id="message" name="message" rows="5" required minlength="10"></textarea>
                                                </div>
                                                <div class="form__row">
                                                    <button class="btn modal__button" aria-label="Envoyer le message">Envoyer</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

            // Injection dans le DOM
            wrapper.innerHTML += modalHTML;

            // Résolution de la promesse
            resolve(document.querySelector(".photographer__modal"));
        });
    }

    // Fonction d'ouverture et de fermeture de la modale de contact
    openModal = () => {
        this.modal.classList.add("opened");
    }

    // et de fermeture de la modale de contact
    closeModal = () => {
        this.modal.classList.remove("opened");
        document.querySelector(".infos__name").focus();
    }

    // Fonction permettant de mettre le focus sur la modale
    focusModal = () => {
        document.querySelector(".modal__title").focus();
    }
}

export default Modal;
