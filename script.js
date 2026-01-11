const list = document.getElementById("taskList");

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value;

  if(task === "") return;

  const li = document.createElement("li");
  li.innerHTML = task + " <button onclick='removeTask(this)'>❌</button>";

  list.appendChild(li);
  input.value = "";
}

function removeTask(btn) {
  btn.parentElement.remove();
}
