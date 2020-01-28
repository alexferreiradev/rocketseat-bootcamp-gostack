class TodoList extends List{
    constructor() {
        super();

        this.usuario = "Alex";
    }

    mostraUsuario() {
        console.log(this.usuario);        
    }    
}

class List {
    constructor() {
        this.data = [];
    }

    addTodo(data) {
        this.data.push(data);
        console.log(this.data);        
    }
}

var MinhaList = new TodoList();
document.getElementById("novo-todo").onclick = function () {
    MinhaList.addTodo("Novo todo")
};