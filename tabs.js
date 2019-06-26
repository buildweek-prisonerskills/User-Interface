
class TabHeader {
    constructor(element) {
        this.element = element;
        console.log("here",this.element)
        this.data = this.element.dataset.tab;

        this.item = document.querySelector(`.a-tab[data-tab="${this.data}"]`);
        console.log("maybe here", this.item)
        this.tabItem = new TabItem(this.item);

        this.element.addEventListener("click", () => {
            this.select();
        });
    }
    select() {
        const links = document.querySelectorAll(".tab-link");
        console.log("check here", links)
        links.forEach(link => {
            link.classList.remove("tab-link-selected");
        });

        this.element.classList.add("tab-link-selected");

        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        //adding all tabs to const so I can loop through and de-activate each tab
        const items = document.querySelectorAll(".a-tab");
        items.forEach(item => {
            item.classList.remove("tab-item-selected")
        })
        console.log("this.element at 40:", this.element);
        this.element.classList.add("tab-item-selected");
    }
}

let links = document.querySelectorAll('.tab-link').forEach( link => new TabHeader(link));
