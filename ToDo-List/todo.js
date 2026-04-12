let input = document.querySelector("#todo");
let button = document.querySelector("#addtodo");
let todolist = document.querySelector(".lists");

button.addEventListener("click", () => {
  let value = input.value;

  const createtodo = document.createElement("div");
  createtodo.classList = "todo-item";

  const text = document.createElement("span");
  text.classList.add("todo-item");
  text.innerText = value;

  const complete = document.createElement("button");
  complete.innerText = "✔";

  const remove = document.createElement("button");
  remove.innerText = "❌";

  createtodo.appendChild(text);
  createtodo.appendChild(complete);
  createtodo.appendChild(remove);

  todolist.appendChild(createtodo);
  input.value = "";

  complete.addEventListener("click", () => {
    text.classList.toggle("completed");
  });

  remove.addEventListener("click", () => {
    createtodo.remove();
  });
});
