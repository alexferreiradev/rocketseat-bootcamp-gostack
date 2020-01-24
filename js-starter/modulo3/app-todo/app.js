var ulEl = document.querySelector("div.app ul");
var buttonEl = document.querySelector("div.app button");
var inputEl = document.querySelector("div.app input");
console.log(ulEl);

var todos = [
    "Fazer cafe",
    "Trocar cafe",
];

buttonEl.onclick = function() {
    var todo = inputEl.value
    if (todo === '')
        return ;
    
    inputEl.value = '';
    todos.push(todo);
    renderTodos();
};

renderTodos();

function renderTodos() {
    ulEl.innerHTML = '';
    todos.forEach((todo, index) => {
        addTodoInList(todo, index);
    });
}

function addTodoInList(todo, index) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todo));
    var a = document.createElement("a");
    a.appendChild(document.createTextNode("Excluir"));
    a.setAttribute("href", "#");
    a.setAttribute("onclick", `delete(${index})`);
    li.appendChild(a);

    ulEl.appendChild(li);
}

function deleteTodo(index) {
    todos.splice(index, 1);

    renderTodos();
}