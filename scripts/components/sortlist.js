// Création du constructor "Sortlist" qui inclut une fonction de comportement "sortlistBehavior"

class Sortlist {
    constructor() {
        this.medias
        this.sortlist = "popularity"
    }

    // Initialisation des fonctions du constructor Sortlist (ayant comme paramètre les "médias")
    init = async (medias) => {
        this.medias = medias
    
        await this.sortedDisplay(this.sortlist)
        this.sortlistBehavior()
    }

    // Attribution du comportement de la liste de tri (ainsi que les likes)
    sortlistBehavior = () => {
        const list = document.querySelector('.medias__list')
        const likes = document.querySelectorAll("button.card__likes")
        const sort = document.querySelector("select#sort")
    
        list.addEventListener("sort", () => this.sortedDisplay())
        likes.forEach((l) => l.addEventListener("click", this.likeBehavior))
        sort.addEventListener("change", async (e) => await this.sortedDisplay(e.target.value))
    }

    // Décralation de la fonction liste des médias triés
    sortedDisplay = (sort) => {
        // Promesse permettant le traitement asynchrone des évènements de la page
        return new Promise((resolve) => {
            // Déclaration de l'évènement "liste trié"
            const e = new Event('sortedDisplay')
            const mediaListWrapper = document.querySelector('.medias__list')

            this.sort = sort
            // Affichage par défaut (classé par popularité / nombre de likes)
            this.sortList()
    
            // Rafraichissement de la liste de tri
            this.refreshSortlist()

            // Injection des cartes médias dans le wrapper en fonction du type de tri
            this.medias.forEach((m) => (mediaListWrapper.innerHTML += m.mediaCard()))
            // Target = mediaListWrapper, évènement à envoyer = e 'sortedDisplay'
            mediaListWrapper.dispatchEvent(e)

            // Résolution de la promesse
            resolve()
        })
    }

    // Fonction permettant de rafraichir la liste de tri (et d'empêcher un ajout infini de médias triés)
    refreshSortlist = () => {
        const mediaListWrapper = document.querySelector('.medias__list')
    
        // Injection dans le DOM de rien = ""
        mediaListWrapper.innerHTML = ""
    }
    
    // Déclaration des instructions de la sortList (évaluation des trois types de tri (populariy/likes, date/date, title/title)
    sortList = () => {
        switch (this.sort) {
            case "popularity":
            default:
            this.medias = this.medias.sort((a, b) => (a.likes > b.likes ? -1 : b.likes > a.likes ? 1 : 0))
            break
    
            case "date":
            this.medias = this.medias.sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
            break
    
            case "title":
            this.medias = this.medias.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
            break
        }
    }

    // Attribution du comportement des boutons "likes"
    likeBehavior = (e) => {
        const btn = e.target

        btn.classList.contains("liked") ? btn.textContent-- && btn.classList.remove("liked") : btn.textContent++ && btn.classList.add("liked")
    }
}

export default Sortlist