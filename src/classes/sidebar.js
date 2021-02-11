import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "./blocks";

export class Sidebar {
    constructor(selector, render) {
        this.el = document.querySelector(selector);
        this.render = render;
        this.init();
    }

    init() {
        this.el.insertAdjacentHTML('beforeend', this.template);
        this.el.addEventListener('submit', this.addBlock);
    }

    clearForm(form) {
        form.value.value = '';
        form.tag.value = '';
        form.styles.value = '';
    };

    parseStyles(stylesStr) {
        console.log(stylesStr);
        let stylesObj = {};
        stylesStr.split(';').forEach(item => {
            let tmp = item.split(':');
            stylesObj[tmp[0]] = tmp[1];
        });
        return stylesObj;
    }

    addBlock = (event) => {
        event.preventDefault();
        let elem;
        switch(event.target?.type?.value) {
            case 'Title':
                elem = new TitleBlock(event.target?.value?.value, {
                    tag: event.target?.tag?.value,
                    styles: this.parseStyles(event.target?.styles?.value),
                });
                break;
            case 'Text':
                elem = new TextBlock(event.target?.value?.value, {
                    tag: event.target?.tag?.value,
                    styles: this.parseStyles(event.target?.styles?.value),
                });
                break;
            case 'Image':
                elem = new ImageBlock(event.target?.value?.value, {
                    tag: event.target?.tag?.value,
                    styles: this.parseStyles(event.target?.styles?.value),
                });
                break;
            case 'Columns':
                elem = new ColumnsBlock([event.target?.value?.value,], {
                    tag: event.target?.tag?.value,
                    styles: this.parseStyles(event.target?.styles?.value),
                });
                break;
        }
        
        this.render(elem);
        this.clearForm(event.target);
    }

    get template() {
        return `<form id="addElementForm">
            <div class="form-group">
                <label for="inputType">State</label>
                <select id="inputType" name="type" class="form-control form-control-sm">
                    <option>Title</option>
                    <option>Text</option>
                    <option>Image</option>
                    <option>Columns</option>
                </select>
            </div>
            <div class="form-group">
                <label for="inputValue">Value</label>
                <textarea class="form-control form-control-sm" name="value" id="inputValue" placeholder="Input value" required></textarea>
            </div>

            <div class="form-group">
                <label for="inputStyles">Value</label>
                <textarea class="form-control form-control-sm" name="styles" id="inputStyles" placeholder="style-name: style-value;"></textarea>
            </div>

            <div class="form-group">
                <label for="inputTag">Tag name</label>
                <input type="text" class="form-control form-control-sm" name="tag" id="inputTag" placeholder="div">
            </div>
            <button id="addElementBtn" type="submit" class="btn btn-primary btn-sm">Add new element</button>
        </form>`;
    }
}