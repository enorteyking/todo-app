//Select elements
const inputElement = document.getElementById("taskInput");
const taskButton = document.getElementById("taskButton");
const taskList = document.getElementById("taskList");


const addTask = () => {
// console.log("I was called");
// ?What do we do to add Task
// get what was typed

// this gets what was types
const text = inputElement.value;
// console.log(text); Checking if we actually got the text
if (text === "") {
    alert("Please enter a task!");
    return;
}

// get a way to add it to the task List
// create an li elements
const liElement = document.createElement("li")

// assign the value of the text to the li
liElement.innerHTML = `<p>${text}</p> <button>❌</button>`;

// append the li element to the ul or task-elements
taskList.appendChild(liElement);
// console.log(add);


};

taskButton.addEventListener("click", addTask);
inputElement.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

