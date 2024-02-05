class Lightbox {
    constructor() {
        this.lightbox = document.querySelector('.lightbox');
        this.isLightboxOpen = false;
        this.medias = [];
        this.currentMedia = {};
        this.currentMediaIndex = 0;
    }

    setMediaIndex = (i) => {
        if (i < 0) i = this.medias.length - 1;
        if (i === this.medias.length) i = 0;
        this.currentMediaIndex = i;
        this.currentMedia = this.medias[i];
        this.refreshMedia();
        this.lightboxMediaCard();
    }

    init = async (medias) => {
        this.medias = medias;
        this.lightboxBehavior();
    }

    lightboxBehavior = () => {
        const list = document.querySelector('.medias__list');
        const medias = document.querySelectorAll(".media-card .card__media");
        const close = this.lightbox.querySelector(".lightbox__close");
        const previous = this.lightbox.querySelector(".lightbox__previous");
        const next = this.lightbox.querySelector(".lightbox__next");

        const openLightbox = (media) => {
            const mediaIndex = [...media.parentElement.children].indexOf(media);
            this.setMediaIndex(mediaIndex);
            this.isLightboxOpen = true;
            this.lightbox.classList.add("opened");
            this.focusLightbox();
        }

        const closeLightbox = () => {
            this.isLightboxOpen = false;
            this.lightbox.classList.remove("opened");
            document.querySelector(".infos__name").focus();
        }

        list.addEventListener("display", () => {
            document.querySelectorAll(".media-card .card__media").forEach((m) => {
                m.addEventListener("click", () => openLightbox(m.parentElement));
                m.addEventListener("keyup", (e) => e.key === "Enter" && openLightbox(m.parentElement));
            });
        });

        medias.forEach((m) => {
            m.addEventListener("click", () => openLightbox(m.parentElement));
            m.addEventListener("keyup", (e) => e.key === "Enter" && openLightbox(m.parentElement));
        });

        close.addEventListener("click", closeLightbox);

        medias.forEach((m) => {
            close.addEventListener("click", closeLightbox);
            close.addEventListener("keyup", (e) => e.key === "Enter" && closeLightbox);
        });

        previous.addEventListener("click", () => this.setMediaIndex(this.currentMediaIndex - 1));
        previous.addEventListener("keyup", (e) => e.key === "Enter" && this.setMediaIndex(this.currentMediaIndex - 1));

        next.addEventListener("click", () => this.setMediaIndex(this.currentMediaIndex + 1));
        next.addEventListener("keyup", (e) => e.key === "Enter" && this.setMediaIndex(this.currentMediaIndex + 1));

        window.addEventListener("keyup", (e) => {
            if (this.isLightboxOpen) {
                e.key === "ArrowLeft" && this.setMediaIndex(this.currentMediaIndex - 1);
                e.key === "ArrowRight" && this.setMediaIndex(this.currentMediaIndex + 1);
                e.key === "Escape" && closeLightbox();
            }
        });
    }

    focusLightbox = () => {
        document.querySelector(".lightbox").focus();
    }

    refreshMedia = () => {
        const mediaWrapper = document.querySelector(".lightbox__media");
        mediaWrapper.innerHTML = "";
    }

    lightboxMediaCard = () => {
        const mediaWrapper = document.querySelector(".lightbox__media");
        const image = `<img src="${this.currentMedia.fullImage}" class="lightbox__image" alt="${this.currentMedia.title}" tabindex="0"/>`;
        const video = `<video autoplay class="lightbox__video" tabindex="0"><source src="${this.currentMedia.fullVideo}" type="video/webm"></video>`;
        const title = `<h2 class="lightbox__title heading__subtitle" tabindex="0">${this.currentMedia.title}</h2>`;
        const mediaHTML = this.currentMedia.video ? video : image;
        mediaWrapper.setAttribute("aria-label", this.currentMedia.title);
        mediaWrapper.innerHTML += mediaHTML + title;
    }
}

export default Lightbox;
