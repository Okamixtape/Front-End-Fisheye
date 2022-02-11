// Fonction asynchrone permettant d'aller récupérer les infos JSON

export const fetchData = async (url) => {
  const data = await fetch(`${url}`)
    .then((res) => res.json())
    .then((data) => data)

  return data
}
