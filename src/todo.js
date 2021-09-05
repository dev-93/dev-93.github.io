const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

let todos = [];

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const deleteTodoItem = (e) => {
    const li = e.target.parentElement;
    li.remove();
    todos = todos.filter((item) => item.id !== parseInt(li.id));
    saveTodos();
}

const createTodoItem = (newTodoObj) => {
    const item = document.createElement("li");
    const itemText = document.createElement("span");
    const itemButton = document.createElement("button");

    item.id = newTodoObj.id;
    itemText.innerText = newTodoObj.text;
    itemButton.innerText = "삭제";

    itemButton.addEventListener("click", deleteTodoItem);

    item.appendChild(itemText);
    item.appendChild(itemButton);

    todoList.appendChild(item);
};

const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    todos.push(newTodoObj);
    createTodoItem(newTodoObj);
    saveTodos();
};

todoForm.addEventListener("submit", handleSubmit);

const savedTodos = localStorage.getItem('todos');

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(createTodoItem);
} else {
    
}