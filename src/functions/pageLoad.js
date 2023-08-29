import styles from "../styles/styles.css";

function pageLoad() {
  const wrapper = document.createElement("div");
  wrapper.className = styles.wrapper;

  const tabs = document.createElement("div");
  tabs.className = styles.tabs;
  wrapper.appendChild(tabs);

  const main = document.createElement("div");
  main.className = styles.main;
  wrapper.appendChild(main);

  const todos = document.createElement("div");
  todos.className = styles.todos;
  main.appendChild(todos);

  const todosTop = document.createElement("div");
  todosTop.className = styles["todos-top"];
  todos.appendChild(todosTop);

  const todosBottom = document.createElement("div");
  todosBottom.className = styles["todos-bottom"];
  todos.appendChild(todosBottom);

  const newTodoForm = document.createElement("form");
  newTodoForm.className = styles["new-todo-form"];
  todosBottom.appendChild(newTodoForm);

  const formLeft = document.createElement("div");
  formLeft.className = styles["form-left"];
  newTodoForm.appendChild(formLeft);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.className = styles["name-input"];
  formLeft.appendChild(nameInput);

  const formRight = document.createElement("div");
  formRight.className = styles["form-right"];
  newTodoForm.appendChild(formRight);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.className = styles.submit;
  formRight.appendChild(submitButton);

  const checkIcon = document.createElement("i");
  checkIcon.classList.add("fa-solid", "fa-plus", "fa-xl");
  submitButton.appendChild(checkIcon);

  const todoScreen = document.createElement("div");
  todoScreen.className = styles["todo-screen"];
  main.appendChild(todoScreen);

  document.querySelector("body").appendChild(wrapper);
}

export default pageLoad;
