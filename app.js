function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const tasksList = document.getElementById("tasks");

        const taskItem = document.createElement("li");
        taskItem.classList.add("task");

        const taskTextElement = document.createElement("span");
        taskTextElement.textContent = taskText;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit");
        editButton.onclick = function () {
            const newText = prompt("Edit the task:", taskText);
            if (newText !== null) {
                taskTextElement.textContent = newText;
            }
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            tasksList.removeChild(taskItem);
        };

        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        tasksList.appendChild(taskItem);

        taskInput.value = "";
    }
}
