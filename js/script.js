document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("task-form");
  const todoInput = document.getElementById("task-input");
  const todoList = document.getElementById("task-list");

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask(todoInput.value);
    todoInput.value = "";
  });

  function addTask(task) {
    if (task.trim() === "") return;
    const li = document.createElement("li");
    li.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Done";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(li);
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
});

function Password() {
  const passwordElement = document.getElementById("password");
  const messageElement = document.getElementById("message");
  const password = passwordElement.value;
  let message = "";

  if (password.length < 8) {
    message = "Password must be at least 8 characters long.";
    messageElement.textContent = message;
    messageElement.style.color = "red";
    return false;
  }
}
