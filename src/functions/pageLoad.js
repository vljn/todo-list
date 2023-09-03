import styles from "../styles/styles.css";

function pageLoad() {
  const wrapper = document.createElement("div");
  wrapper.className = styles.wrapper;

  const tabsWrapper = document.createElement("div");
  tabsWrapper.className = styles["tabs-wrapper"];
  wrapper.appendChild(tabsWrapper);

  const tabs = document.createElement("div");
  tabs.className = styles.tabs;
  tabsWrapper.appendChild(tabs);

  const newTabButton = document.createElement("button");
  newTabButton.className = styles["new-tab"];
  tabsWrapper.appendChild(newTabButton);

  const checkIcon1 = document.createElement("i");
  checkIcon1.classList.add("fa-solid", "fa-plus", "fa-xl");
  newTabButton.appendChild(checkIcon1);

  const main = document.createElement("div");
  main.className = styles.main;
  main.style["border-left"] = "5px solid #ffcc00";
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

  const checkIcon2 = document.createElement("i");
  checkIcon2.classList.add("fa-solid", "fa-plus", "fa-xl");
  submitButton.appendChild(checkIcon2);

  const todoScreen = document.createElement("div");
  main.appendChild(todoScreen);

  const heading = document.createElement("div");
  heading.className = styles.heading;
  todoScreen.appendChild(heading);

  const projectInfo = document.createElement("div");
  projectInfo.className = styles.project;
  heading.appendChild(projectInfo);

  const todoInfo = document.createElement("div");
  todoInfo.className = styles.todo;
  heading.appendChild(todoInfo);

  const todoArea = document.createElement("div");
  todoArea.className = styles["todo-area"];
  todoScreen.appendChild(todoArea);

  document.querySelector("body").appendChild(wrapper);
}

export default pageLoad;
