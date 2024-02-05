// Constructeur "Route" permettant de créer chaque route

class Route {
  constructor() {
    this.routes = new Map();
  }

  set = (path, page) => {
    this.routes.set(path, page);
  }

  get = () => {
    const pathname = new URL(window.location.href).pathname;
    const matchingRoute = Array.from(this.routes.entries()).find(([path]) => pathname.includes(path));
    if (matchingRoute) {
      const [, page] = matchingRoute;
      return new page().init();
    }
  }
}

export default new Route();
