import createElement from "../factory.js";
import Lightbox from "../components/lightbox.js";
import Modal from "../components/modal.js";
import Sortlist from "../components/sortlist.js";
import { fetchData } from "../utils/fetchData.js";
import { initLazyLoading } from "../utils/lazyLoading.js"; 

class Photographerpage {
  constructor() {
    this.photographer = {};
    this.photographerId = parseInt(window.location.search.split("?id=")[1]);
    this.medias = [];
  }

  init = async () => {
    if (isNaN(this.photographerId) || !this.photographerId) {
      this.redirect();
      return;
    }

    this.photographer = await this.getPhotographer();
    this.medias = await this.getMedias();

    this.displayPhotographer();
    this.displayMedias();

    new Sortlist(this.medias);
    new Modal().init(this.photographer);
    new Lightbox().init(this.medias);

    this.initLazyLoading(); // Call initLazyLoading() after modifying the DOM

    // Listen for DOM changes and call initLazyLoading() when necessary
    const observer = new MutationObserver(() => {
      this.initLazyLoading();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };

  redirect = () => {
    window.location.href = "/";
  };

  getPhotographer = async () => {
    const photographers = await fetchData("./data/photographers.json");
    const photographer = photographers.photographers.find(
      (p) => p.id === this.photographerId
    );

    if (!photographer) {
      this.redirect();
      return;
    }

    return createElement("Photographer", photographer);
  };

  getMedias = async () => {
    const allMedias = await fetchData("./data/medias.json");
    const photographerMedias = allMedias.media.filter(
      (m) => m.photographerId === this.photographerId
    );

    return photographerMedias.map((p) => createElement("Media", p));
  };

  displayPhotographer = () => {
    const infoSection = document.querySelector(".infos__wrapper");
    const pageWrapper = document.querySelector(".platform-photographer");
    const totalLikes = this.medias.reduce((a, b) => a + b.likes, 0);

    infoSection.innerHTML = this.photographer.photographerInfos();
    pageWrapper.innerHTML += this.photographer.photographerDetailsCard(totalLikes);
  };

  displayMedias = () => {
    const mediasBody = document.querySelector(".medias__list");

    mediasBody.innerHTML = this.medias.map((p) => p.mediaCard()).join("");
  };

  initLazyLoading = () => {
    initLazyLoading();
  };
}

export default Photographerpage;
