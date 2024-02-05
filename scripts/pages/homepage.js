import createElement from "../factory.js"
import { fetchData } from "../utils/fetchData.js"

class Homepage {
  constructor() {
    this.photographers = []
  }

  async init() {
    this.photographers = await this.getPhotographers()
    this.displayPhotographers()
  }

  async getPhotographers() {
    const photographersData = await fetchData("./data/photographers.json")
    return photographersData.photographers.map(p => createElement("Photographer", p))
  }

  displayPhotographers() {
    const photographerSection = document.querySelector(".homepage__photographers")
    photographerSection.innerHTML = this.photographers.map(p => p.photographerCard()).join("")
  }
}

export default Homepage
