// Constructeur "Route" permettant de créer chaque 

class Route {
  constructor() {
    this.routes = []
  }

  set = (path, page) => {
    this.routes.push({ path, page })
  }

  get = () => {
    for (const r of this.routes) {
      if (window.location.pathname.includes(r.path)) return r.page.init()
    }
  }
}

export default new Route()
