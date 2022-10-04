tagContainer = document.querySelector(".tag-container");
taskContainer = document.querySelector(".task-list");
modal = document.getElementById("add-tag-modal");

delButtons = document.querySelectorAll(".del-button");

// turn on/off the modal for add task
const addTagModal = () => {
  console.log("click");
  if (modal.style.display == "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
};
const renderPage = () => {
  // if there is no data at the start, give it a empty array
  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
  }
  if (localStorage.getItem("done") == null) {
    localStorage.setItem("done", "[]");
  }
  let data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  for (let i = 0; i <= data.length - 1; i++) {
    taskContainer.innerHTML += `
        <div class="task" >
          <div class="task-info">
            <h2>${data[i].task}</h2>
            <p class="tag">${data[i].tag}</p class="tag">
          </div>
          <div class="action-button">
            <button class="done-button" key="${i}">Done</button>
            <button class="del-button" key="${i}">Delete</button>
          </div>
        </div>
    `;
  }
  document.getElementById("all-count").innerHTML = data.length;
  // find which done button is click
  doneButtons = document.querySelectorAll(".done-button");
  doneButtons.forEach((button, i) => {
    button.addEventListener("click", (i) => doneTask(i));
  });

  const doneTask = (i) => {
    console.log(i);
    console.log("hello");
  };
};
renderPage();

class Task {
  constructor(tag, task) {
    this.tag = tag;
    this.task = task;
  }
}

let taskList = [];
console.table(taskList);
const addTask = () => {
  // add to localStorage
  const storeData = (taskList) => {
    let new_data = JSON.stringify(taskList);
    console.log("New data: ", new_data);

    // update the new data into localstorage
    localStorage.setItem("data", new_data);
    console.log("local storage: ", localStorage);
  };

  // get value from input and put it into array of object
  tag = document.getElementById("tag-name").value;
  task = document.getElementById("task-name").value;
  let taskNew = new Task(tag, task);
  taskList.push(taskNew);
  console.table(taskList);
  storeData(taskList);

  // update the page
  const updatePage = () => {
    taskContainer.innerHTML += `
        <div class="task">
          <div class="task-info">
            <h2>${taskList[taskList.length - 1].task}</h2>
            <p class="tag">${taskList[taskList.length - 1].tag}</p class="tag">
          </div>
          <div class="action-button">
            <button class="done-button">Done</button>
            <button class="del-button">Delete</button>
          </div>
        </div>
    `;
  };
  updatePage();
};
console.log(doneButtons);
