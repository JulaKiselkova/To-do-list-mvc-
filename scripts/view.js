import {model} from "./model.js";
import {todoList} from "./model.js";
import {card, inputButton, modal, header, list} from "./templates.js";
import {controller} from "./controller.js";

export const view = {
    init: function(){
        root.insertAdjacentHTML('beforeend', header());
        root.insertAdjacentHTML("beforeend", list());
        root.insertAdjacentHTML("afterbegin", modal());
    },

    initModalListeners: function(modal) {
        document.getElementById('cancle').addEventListener( 'click', () => view.closeModal(modal));
        document.getElementById('done').addEventListener( 'click', () => controller.addTodo(modal));
    },

    initListeners: function(modal){
        document.getElementById('create').addEventListener( 'click', () => view.openModal(modal));
        document.getElementById('all').addEventListener('click', () => controller.deleteAll(model.get()));
        document.getElementById('last').addEventListener('click', () => controller.deleteLast());
    },

    initCardListeners: function(modal) {
        for(let i = 0; i < (model.todos).length; i++){
            document.getElementById(`${i}delete`).addEventListener('click', ()=>controller.deleteToDo(i))
            document.getElementById(`checkbox-${i}`).addEventListener('change', ()=>alert(`hi${i}`));
        }
    },

    openModal: function(modal){
        modal.classList.remove('hidden');
    },

    closeModal: function(modal){
        modal.classList.add('hidden');
    },

    // deleteToDo: function(i) {
    //     model.get()[i];
    //     console.log(model.get()[i]);
    //     let theCard = document.getElementById(i);
    //     theCard.classList.add('hidden');
    // },

    render: function(root){;
        root.insertAdjacentHTML("beforeend", list());
        document.getElementById('list').remove();
        for(let i = 0; i < model.todos.length; i++) {
            document.getElementById('list').insertAdjacentHTML('beforeend', card(model.todos[i]));
        }
        //view.initListeners(document.getElementById("modal"));
        view.initCardListeners(document.getElementById("modal"));

    },

    app: function() {
        root.className = "grid justify-items-center";
        model.get();
        view.init(root);
        view.initListeners(document.getElementById('modal'));
        view.initModalListeners(document.getElementById('modal'));
        view.initCardListeners(document.getElementById("modal"));
        //view.initListeners(document.getElementById("modal"));
        view.render(root);        
    }
}