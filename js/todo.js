const toDoFrom = document.getElementById("todo-form");
const toDoInuput = toDoFrom.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];   // JSON.parse(localStorage.getItem("toDOs"));]

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.id = "cancelBtn";
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    console.log(newTodo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInuput.value;
    toDoInuput.value = "";
    const newTodoObj = {
        text:newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoFrom.addEventListener("submit",handleToDoSubmit);

function sayHello(item){
    console.log("this is the turn of "+item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // parsedToDos.forEach((item) => console.log("this is the turn of "+item));            // parsedToDos.forEach(sayHello);              
}