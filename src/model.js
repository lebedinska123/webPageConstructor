import image from "./assets/cat_image.jpg";
import {TitleBlock, TextBlock, ImageBlock, ColumnsBlock} from "./classes/blocks";

export const model = [
    new TitleBlock('Hello World from JS', {
        tag: 'h1',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center',
        },
    }),

    new TextBlock("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis accusantium reiciendis ullam veniam exercitationem natus quidem alias magni consectetur, similique a delectus! Officiis fuga autem omnis asperiores sequi animi officia.", {
        tag: 'p',
        styles: {
            padding: '2rem',
            'background-color': '#97477B',
            color: '#fff',
        }
    }),

    new ColumnsBlock([
        "1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis accusantium reiciendis ullam veniam exercitationem natus quidem alias magni consectetur",
        "2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis accusantium reiciendis ullam veniam exercitationem natus quidem alias magni consectetur",
        "3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis accusantium reiciendis ullam veniam exercitationem natus quidem alias magni consectetur",
    ], {
        tag: 'p',
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            color: '#fff',
            padding: '1rem',
            'font-weight': 'bold',
        }
    }),

    new ImageBlock(image, {
        tag: 'img',
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto',
        },
        alt: "Cat image",
    }),
];