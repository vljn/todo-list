import pageLoad from "../functions/pageLoad.js";
import styles from "../styles/styles.css";
import tabStyles from "../styles/tab.css";
import todoStyles from "../styles/todo.css";
import "@melloware/coloris/dist/coloris.css";
import Coloris from "@melloware/coloris";

class RenderingHandler {
  #tabContainer;
  #todoContainer;
  #app;

  constructor(app) {
    this.#app = app;
  }

  initialRender() {
    pageLoad();
    this.#addEventListenerNewTab();
    this.#addEventListenersNewTodo();
    this.#tabContainer = document.querySelector("." + styles.tabs);
    this.#todoContainer = document.querySelector("." + styles["todos-top"]);
    this.renderAll();
    Coloris.init();
    Coloris({
      themeMode: "light",
      alpha: false,
      swatches: ["#0ab30a", "#ffcc00", "#034efc", "#d12631"],
      el: "." + todoStyles["input-color"],
      wrap: false,
    });
  }

  #addEventListenerNewTab() {
    const newTabButton = document.querySelector("." + styles["new-tab"]);
    newTabButton.addEventListener("click", () => {
      this.#app.addProject();
      if (this.#app.selectedProject === -1) {
        this.#app.selectedProject = 0;
      }
      this.renderAll();
    });
  }

  #addEventListenersNewTodo() {
    const submitButton = document.querySelector("." + styles.submit);
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.#app.projects.length === 0) return;
      const input = document.querySelector("." + styles["name-input"]);
      if (input.value !== "") {
        this.#app.addTodo(input.value);
      } else {
        this.#app.addTodo("New Todo");
      }
      this.renderTodos();
    });
  }

  renderAll() {
    this.renderTabs();
    this.renderTodos();
    this.#renderTodoScreen();
  }

  renderTabs() {
    this.#tabContainer.innerHTML = "";
    this.#app.projects.forEach((project, index) => this.#renderTab(project, index));

    const submitButton = document.querySelector("." + styles.submit);
    const input = document.querySelector("." + styles["name-input"]);
    if (this.#app.projects.length > 0) {
      submitButton.classList.remove(styles.inactive);
      input.classList.remove(styles.inactive);
    } else {
      submitButton.classList.add(styles.inactive);
      input.classList.add(styles.inactive);
    }
  }

  #renderTab(project, index) {
    const tab = document.createElement("div");
    tab.setAttribute("data-index", index);
    tab.className = tabStyles.tab;
    tab.style["border-left"] = "5px solid " + project.color;

    if (this.#app.selectedProject !== index) {
      tab.classList.remove(tabStyles.active);
    } else {
      document.querySelector("." + styles.main).style["border-left"] = "5px solid " + project.color;
      tab.classList.add(tabStyles.active);
    }

    const left = document.createElement("div");
    left.className = tabStyles.left;
    tab.appendChild(left);

    const name = document.createElement("p");
    name.textContent = project.name;
    left.appendChild(name);

    const right = document.createElement("div");
    right.className = tabStyles.right;
    tab.appendChild(right);

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-xmark", tabStyles.icon);
    icon.style.color = "black";
    right.appendChild(icon);

    tab.addEventListener("click", (e) => {
      let deleted = false;
      if (e.target.nodeName === "svg" || e.target.nodeName === "path") {
        this.#app.projects.splice(index, 1);
        deleted = true;
      }
      if (deleted) {
        if (index === this.#app.selectedProject && index === this.#app.projects.length) {
          this.#app.selectedProject = index - 1;
          this.#app.selectedTodo = -1;
        } else if (index < this.#app.selectedProject) {
          this.#app.selectedProject = this.#app.selectedProject - 1;
        }
      } else {
        if (this.#app.selectedProject === index) {
          return;
        }
        this.#app.selectedProject = index;
      }
      this.#app.selectedTodo = -1;
      this.renderAll();
    });
    this.#tabContainer.appendChild(tab);
  }

  renderTodos() {
    this.#todoContainer.innerHTML = "";
    if (this.#app.projects.length > 0) {
      this.#app.getSelectedProject().todos.forEach((todo, index) => this.#renderTodo(todo, index));
    }
  }

  #renderTodo(todo, index) {
    const todoDiv = document.createElement("div");
    todoDiv.className = todoStyles.todo;

    const left = document.createElement("div");
    left.className = todoStyles.left;
    todoDiv.appendChild(left);

    const colorDiv = document.createElement("div");
    colorDiv.className = todoStyles.color;
    left.appendChild(colorDiv);
    colorDiv.style["background-color"] = todo.color;

    const title = document.createElement("div");
    title.className = todoStyles.title;
    left.appendChild(title);
    title.textContent = todo.title;

    const right = document.createElement("div");
    right.className = todoStyles.right;
    todoDiv.appendChild(right);

    const icon = document.createElement("i");
    icon.classList.add("fa-xl");
    right.appendChild(icon);
    if (todo.isChecked()) {
      icon.classList.remove("fa-regular", "fa-square-check");
      icon.classList.add("fa-solid", "fa-square-check");
      icon.style.color = "#0ab30a";
    } else {
      icon.classList.remove("fa-solid", "fa-square-check");
      icon.classList.add("fa-regular", "fa-square-check", "fa-xl");
      icon.style.color = "black";
    }
    todoDiv.addEventListener("click", (e) => {
      const target = e.target;
      if (target.nodeName === "svg" || target.nodeName === "path") {
        todo.check();
      } else {
        if (this.#app.selectedTodo === index) {
          return;
        }
        this.#app.selectedTodo = index;
        this.#renderTodoScreen();
      }
      this.renderTodos();
    });

    if (index === this.#app.selectedTodo) {
      todoDiv.classList.add(todoStyles.active);
    }

    this.#todoContainer.appendChild(todoDiv);
  }

  #renderTodoScreen() {
    const projectInfo = document.querySelector("." + styles.project);
    projectInfo.innerHTML = "";
    if (this.#app.selectedProject !== -1) {
      const project = this.#app.getSelectedProject();

      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.value = project.name;
      input.className = todoStyles["input"];
      projectInfo.appendChild(input);

      const edit = document.createElement("button");
      edit.className = todoStyles.button;
      const editIcon = document.createElement("i");
      editIcon.classList.add("fa-solid", "fa-pen", "fa-xs");
      edit.appendChild(editIcon);
      projectInfo.appendChild(edit);

      edit.addEventListener("click", () => {
        if (input.value !== "") {
          project.name = input.value;
          this.renderTabs();
        }
      });

      const inputColor = document.createElement("input");
      inputColor.className = todoStyles["input-color"];
      inputColor.value = project.color;
      projectInfo.appendChild(inputColor);

      inputColor.addEventListener("input", () => {
        project.color = inputColor.value;
        this.renderTabs();
      });
    }

    const todoInfo = document.querySelector("." + styles["todo"]);
    todoInfo.innerHTML = "";
    if (this.#app.selectedTodo !== -1) {
      const todo = this.#app.getSelectedTodo();

      const left = document.createElement("div");
      left.className = todoStyles["left-todo"];
      todoInfo.appendChild(left);

      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.value = todo.title;
      input.className = todoStyles["input"];
      left.appendChild(input);

      const edit = document.createElement("button");
      edit.className = todoStyles.button;
      const editIcon = document.createElement("i");
      editIcon.classList.add("fa-solid", "fa-pen", "fa-xs");
      edit.appendChild(editIcon);
      left.appendChild(edit);

      edit.addEventListener("click", () => {
        if (input.value !== "") {
          todo.title = input.value;
          this.renderTodos();
        }
      });

      const inputColor = document.createElement("input");
      inputColor.className = todoStyles["input-color"];
      inputColor.value = todo.color;
      left.appendChild(inputColor);

      inputColor.addEventListener("input", () => {
        todo.color = inputColor.value;
        this.renderTodos();
      });

      const right = document.createElement("div");
      right.className = todoStyles["right-todo"];
      todoInfo.appendChild(right);

      const dateDiv = document.createElement("div");
      dateDiv.className = todoStyles.date;
      dateDiv.textContent = "due:";
      right.appendChild(dateDiv);

      const dateInput = document.createElement("input");
      dateInput.className = todoStyles["date-input"];
      dateInput.setAttribute("type", "date");
      dateDiv.appendChild(dateInput);
      if (todo.date !== "") {
        dateInput.value = todo.date;
      }
      dateInput.addEventListener("input", () => {
        todo.date = dateInput.value;
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.className = todoStyles["delete-button"];

      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fa-regular", "fa-trash-can", "fa-lg");
      deleteBtn.appendChild(deleteIcon);

      deleteBtn.addEventListener("click", () => {
        this.#app.getSelectedProject().todos.splice(this.#app.selectedTodo, 1);
        this.#app.selectedTodo = -1;
        this.renderTodos();
        this.#renderTodoScreen();
      });

      right.appendChild(deleteBtn);
    }

    const todoArea = document.querySelector("." + styles["todo-area"]);
    todoArea.innerHTML = "";
    if (this.#app.selectedTodo !== -1) {
      const description = document.createElement("textarea");
      description.className = todoStyles["todo-description"];
      description.textContent = this.#app.getSelectedTodo().description;
      description.addEventListener("input", () => {
        this.#app.getSelectedTodo().description = description.value;
      });
      todoArea.appendChild(description);
    }
  }
}

export default RenderingHandler;
