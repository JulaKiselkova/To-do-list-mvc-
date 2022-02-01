import {model, todoList} from "./model.js";
import {card, modal, list} from "./templates.js";
import {view} from "./view.js";



export const controller = {
    addTodo: function(modal) {
        const inputTitle = document.getElementById("inputTitle");
        const inputText = document.getElementById("inputText"); 

        let todo = {};
        let now = new Date();
        let id = 0;
        
        todo.title = inputTitle.value;
        todo.text = inputText.value;
        todo.time = now.toLocaleTimeString();
        todo.id = model.get().length;
        model.set(todo);
        console.log(model.get());
        alert(todo.title);
        view.closeModal(modal);
        view.render(root);
    },

    deleteToDo: function(i) {
        let theCard = document.getElementById(i);
        let arrToDo = model.get();
        let deletedElement = model.get()[i];
        console.log(deletedElement);
        //arrToDo.splice(i, 1);
        console.log(arrToDo);
        deletedElement.statusExists = false;
        model.todos = arrToDo;
        theCard.classList.add('hidden');
    },

    deleteLast: function() {
        model.get();
        console.log(model.get());
        model.get().pop();
        view.render(root);
    },

    deleteAll: function() {
        model.todos = [];
        view.render(root);
    },

    //сделан такск или нет
    isDoneTodo: function(i) {
        let theCard = document.getElementById(i);
        let arrToDo = model.get();
        let doneElement = model.get()[i];
        console.log(doneElement);
        doneElement.statusIsDone = true;
    },

    //
    totalTodos: function(start) {
        //let totalTodos = 0;
        let arrToDo = model.get();
        for(let i = 0; i < arrToDo.length; i++){
            if(model.get().statusExists === true) {
                start = start + 1;
            };
        }
        return start;
        //return model.get().length;
    }
}
