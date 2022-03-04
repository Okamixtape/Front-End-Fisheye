// Importation des deux constructors principaux de la plateforme

import Photographer from "./models/photographer.js"
import Media from "./models/media.js"

// Variable contenant les constructeurs "Photographer" et "Media"
const factory = { Photographer, Media }

// Fonction permettant de créer des éléments à partir des constructor "Photographer" et "Media" (récupération de leur type et attributs)
// pour créer les cartes photographes et médias (photos/vidéos) 
const createElement = (type, attr) => {
  const platformElement = factory[type]

  return new platformElement(attr)
}

export default createElement
