
export class Site {
    constructor(selector) {
        this.el = document.querySelector(selector);
    };
    addBlock(blockString) {
        blockString ? this.el.insertAdjacentHTML('beforeend', blockString) : null;
    };
    render(model) {
        this.el.innerHTML = '';
        model.forEach(blockElement => {
            console.log('return element', blockElement.type);
            let html = blockElement.getHtml();
            this.addBlock(html);
        });
    }
}