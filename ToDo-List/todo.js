let input = document.querySelector("#todo");
let button = document.querySelector("#addtodo");
let todolist = document.querySelector(".lists");
let totalSpan = document.querySelector("#total");
let completedSpan = document.querySelector("#completed");

function updateCount() {
  let allTodos = document.querySelectorAll(".todo-item");
  let completedTodos = document.querySelectorAll(".completed");

  totalSpan.textContent = allTodos.length;
  completedSpan.textContent = completedTodos.length;
}

button.addEventListener("click", () => {
  let value = input.value.trim();

  if (!value) {
    alert("Please enter a task!");
    return;
  }

  const createtodo = document.createElement("div");
  createtodo.classList = "todo-item";

  const text = document.createElement("span");
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

  updateCount();

  complete.addEventListener("click", () => {
    text.classList.toggle("completed");
    updateCount();
  });

  remove.addEventListener("click", () => {
    createtodo.remove();
    updateCount();
  });
});
