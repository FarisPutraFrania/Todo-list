const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const list = document.getElementById("list");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const task = taskInput.value;
  if (task === "") {
    return;
  }
  const listItem = document.createElement("li");
  listItem.innerText = task;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });
  listItem.appendChild(deleteButton);
  list.appendChild(listItem);
  taskInput.value = "";
});
