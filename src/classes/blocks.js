import {row, col} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    };

    _parseStyles(styles) {
        if(styles) {
            return Object.entries(styles).map((item) => {
                return `${item[0]}: ${item[1]}`;
            }).join('; ');
        }
        return '';
    };

    getHtml() {
        throw new Error('Метод getHtml не определен для данного класса');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.type = 'title';
    }
    getHtml() {
        let {tag = 'h1', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), this._parseStyles(styles));
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.type = 'text';
    }
    getHtml() {
        let {tag = 'p', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), this._parseStyles(styles));
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.type = 'columns';
    }
    getHtml() {
        let {tag = 'p', styles} = this.options;
        return row(this.value.map(text => col(`<${tag}>${text}</${tag}>`)).join(''), this._parseStyles(styles));
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.type = 'image';
    }
    getHtml() {
        let {tag = 'img', styles, imageStyles, alt} = this.options;
        return row(col(`<img src="${this.value}" 
                style="${imageStyles ? this._parseStyles(imageStyles) : ''}"
                ${alt ? `alt="${alt}"` : ''}>
            `, this._parseStyles(styles)));
    }
}