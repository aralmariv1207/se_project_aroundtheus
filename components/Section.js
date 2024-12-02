export default class Section {
    constructor ({ items, renderder }, selector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector); 
    }

    renderItems() {
        this._items.forEach(item => this.renderer(item));
    }

    addItem(element) {
        this._container.append(element);
    }
}