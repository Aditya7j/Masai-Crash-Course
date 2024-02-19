// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------


const userLoginURL = `${baseServerURL}/login`;
const urlTodos = `${baseServerURL}/cats/`;

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-password");
let loginUserButton = document.getElementById("login-user");

let getTodoButton = document.getElementById("fetch-todos");

let sortLowToHigh = document.getElementById("sort-low-to-high");
let sortHighToLow = document.getElementById("sort-high-to-low");
let filterCompleted = document.getElementById("filter-completed");
let filterPending = document.getElementById("filter-pending");

loginUserButton.addEventListener("click", loginUser);
getTodoButton.addEventListener("click",showTodo)
sortLowToHigh.addEventListener("click", () => showTodo("asc"));
sortHighToLow.addEventListener("click", () => showTodo("desc"));
filterCompleted.addEventListener("click", () => filterTodoByStatus(true));
filterPending.addEventListener("click", () => filterTodoByStatus(false));


async function loginUser() {
  const username = loginUserUsername.value;
  const password = loginUserPassword.value;

  try {
    if (username === "admin" && password === "admin") {
      displayNotification(`hey ${username} Welcome back !`);
    } else {
      throw new Error("Invalid credentials. Please try again.");
    }

  } catch (error) {
    console.error(error);
    // Display an error notification
    displayNotification(error.message || "Login failed. Please check your credentials.");
  }
}

function displayNotification(message) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.setAttribute("id","notification-text")
  notification.textContent = message;
  notificationWrapper.innerHTML = "";
  notificationWrapper.appendChild(notification);
}

async function showTodo(order) {
  try {
    const response = await fetch(`${urlTodos}?_sort=name&_order=${order}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch todos. Status: ${response.status}`);
    }

    const todos = await response.json();
    renderTodoList(todos);
  } catch (error) {
    console.error(error);
    displayNotification(`Failed to fetch todos. ${error.message}`);
  }
}


function renderTodoList(todos) {
  mainSection.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    mainSection.appendChild(todoElement);
  });
}

function createTodoElement(todo) {
  console.log({todo})
  const todoElement = document.createElement("div");
  todoElement.classList.add("todo");
  todoElement.setAttribute("id", "todoElement-wrapper");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("id", "todoElement-checkbox");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed; // Set the checkbox state based on the completed status
  checkbox.disabled = false;

  const nameSpan = document.createElement("span");
  nameSpan.textContent = `${todo.name} - ${todo.breed}`;

  todoElement.appendChild(checkbox);
  todoElement.appendChild(nameSpan);

  return todoElement;
}



async function filterTodoByStatus(completed) {
  try {
    const response = await fetch(`${urlTodos}?completed=${completed}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch todos. Status: ${response.status}`);
    }

    const todos = await response.json();
    renderTodoList(todos);
  } catch (error) {
    console.error(error);
    displayNotification(`Failed to fetch todos. ${error.message}`);
  }
}