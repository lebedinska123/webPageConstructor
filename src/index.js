import {model} from "./model";
import {Site} from "./classes/site";
import { Sidebar } from "./classes/sidebar";
import './css/main.css';

let site = new Site('#site');
site.render(model);

let sidebar = new Sidebar('#panel', (newBlock) => {
    model.push(newBlock);
    site.render(model);
});