let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


function displayTasks(taskArray = tasks) {

    taskList.innerHTML = "";

    taskArray.forEach(function(task) {

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">
                ${task.title}
            </span>

            <div>
                <button onclick="completeTask(${task.id})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button onclick="deleteTask(${task.id})">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(li);
    });
}


addBtn.addEventListener("click", function() {

    const title = taskInput.value.trim();

    if (title === "") {
        alert("Please enter a task");
        return;
    }

    const newTask = {
        id: Date.now(),
        title: title,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();

    taskInput.value = "";

    displayTasks();
});


function completeTask(id) {

    const task = tasks.find(function(task) {
        return task.id === id;
    });

    if (task) {
        task.completed = !task.completed;
    }

    saveTasks();

    displayTasks();
}


function deleteTask(id) {

    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    saveTasks();

    displayTasks();
}


function showAll() {
    displayTasks(tasks);
}


function showCompleted() {

    const completedTasks = tasks.filter(function(task) {
        return task.completed === true;
    });

    displayTasks(completedTasks);
}


function showPending() {

    const pendingTasks = tasks.filter(function(task) {
        return task.completed === false;
    });

    displayTasks(pendingTasks);
}


function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}


displayTasks();