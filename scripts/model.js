export const model = {
    todos: [],
    get: function(){
        // if(localStorage.length){
        //     return model.todos = JSON.parse(localStorage.getItem('todos'))
        // } else 
        return this.todos
    },
    
    set: function(obj){
        model.todos.push(obj)
    },
};

export let todoList = [
    {
        title: 'Drink',
        text: 'I need to drink',
        time: '15:00',
    },

    {
        title: 'Eat',
        text: 'I need to eat',
        time: '15:00',
        // isDone: false,
        // id: '1'
    }
]

