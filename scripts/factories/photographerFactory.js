import Photographer from "../models/photographer.js"

// Variable contenant la propriété "Photographer"
const photographerFactory = { Photographer }

// Fonction permettant de créer des éléments à partir du constructor "Photographer" (récupération type et attributs)
// pour créer l'élément photographer
const createElement = (type, attr) => {
  const photographerElement = photographerFactory[type]

  return new photographerElement(attr)
}

export default createElement
