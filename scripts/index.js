//imports
import {card, modal, inputButton, header} from "./templates.js";
import {view} from "./view.js";
import {model} from "./model.js";
import {todoList} from "./model.js";
import {controller} from "./controller.js";


//DOM-elements
const root = document.querySelector('#root');
let modalWind = document.querySelector('#modal');
modalWind = modal(); 
//app

view.app();