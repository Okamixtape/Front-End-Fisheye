import createElement from "../factories/photographerFactory.js"
import { fetchData } from "../utils/fetchData.js"

// Création de l'objet "Homepage" pour y récupérer données et les afficher

class Homepage {
  constructor() {
    this.photographers = []
  }

  // Initialisation
  init = async () => {
    this.photographers = await this.getPhotographers()
    this.displayPhotographers()
  }

  // Récupération des données
  getPhotographers = async () => {
    let photographers = []
    const photographersData = await fetchData("./data/photographers.json")

    photographersData.photographers.forEach((p) => photographers.push(createElement("Photographer", p)))

    return photographers
  }

  // Affichage des données dans la homepage
  displayPhotographers = async () => {
    const photographerSection = document.querySelector(".homepage__photographers")

    this.photographers.forEach((p) => (photographerSection.innerHTML += p.photographerCard()))
  }
}

export default new Homepage()
