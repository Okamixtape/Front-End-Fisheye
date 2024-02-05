class Sortlist {
    constructor(medias) {
        this.medias = medias;
        this.sort = "popularity";
        this.init();
    }

    async init() {
        await this.sortedDisplay(this.sort);
        this.sortlistBehavior();
    }

    sortlistBehavior() {
        const list = document.querySelector('.medias__list');
        const likes = document.querySelectorAll("button.card__likes");
        const sort = document.querySelector("select#sort");

        const likeBehavior = (e) => {
            const btn = e.target;
            const totalCount = document.querySelector('.details__likes');

            if (btn.classList.contains("liked")) {
                btn.textContent-- && btn.classList.remove("liked");
                totalCount.textContent--;
            } else {
                btn.textContent++ && btn.classList.add("liked");
                totalCount.textContent++;
            }
        };

        list.addEventListener("display", () => {
            likes.forEach((l) => l.addEventListener("click", likeBehavior));
        });

        likes.forEach((l) => l.addEventListener("click", likeBehavior));

        sort.addEventListener("change", async (e) => await this.sortedDisplay(e.target.value));
    }

    async sortedDisplay(sort) {
        const e = new Event("display");
        const mediaListWrapper = document.querySelector('.medias__list');
        this.sort = sort;
        this.sortList();
        this.refreshSortlist();
        this.medias.forEach((m) => (mediaListWrapper.innerHTML += m.mediaCard()));
        mediaListWrapper.dispatchEvent(e);
    }

    refreshSortlist() {
        const mediaListWrapper = document.querySelector('.medias__list');
        mediaListWrapper.innerHTML = "";
    }

    sortList() {
        switch (this.sort) {
            case "popularity":
            default:
                this.medias = this.medias.sort((a, b) => b.likes - a.likes);
                break;
            case "date":
                this.medias = this.medias.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case "title":
                this.medias = this.medias.sort((a, b) => a.title.localeCompare(b.title));
                break;
        }
    }
}

export default Sortlist;
