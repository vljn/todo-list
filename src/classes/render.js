import pageLoad from "../functions/pageLoad.js";
import styles from "../styles/styles.css";
import tabStyles from "../styles/tab.css";
import todoStyles from "../styles/todo.css";
//import ClickHandler from "./click.js"; todo

class RenderingHandler {
  #tabContainer;
  #todoContainer;
  #state;
  //#clickHandler;

  constructor(state) {
    this.#state = state;
    //this.#clickHandler = new ClickHandler();
  }

  initialRender() {
    pageLoad();
    this.#tabContainer = document.querySelector("." + styles.tabs);
    this.#todoContainer = document.querySelector("." + styles["todos-top"]);
    this.renderAll();
  }

  renderAll() {
    this.renderTabs();
    this.renderTodos();
  }

  renderTabs() {
    this.#tabContainer.innerHTML = "";
    this.#state.projects.forEach((project, index) => this.#renderTab(project, index));
  }

  #renderTab(project, index) {
    const tab = document.createElement("div");
    tab.setAttribute("data-index", index);
    tab.className = tabStyles.tab;

    if (this.#state.selectedProject !== index) {
      tab.classList.remove(tabStyles.active);
    } else {
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
        this.#state.projects.splice(index, 1);
        deleted = true;
      }
      if (deleted) {
        if (index === this.#state.selectedProject && index === this.#state.projects.length) {
          this.#state.selectedProject = index - 1;
        } else if (index < this.#state.selectedProject) {
          this.#state.selectedProject = this.#state.selectedProject - 1;
        }
      } else {
        this.#state.selectedProject = index;
      }
      this.update(this.#state);
    });
    this.#tabContainer.appendChild(tab);
  }

  renderTodos() {
    this.#todoContainer.innerHTML = "";
    this.#state.projects[this.#state.selectedProject].todos.forEach((todo, index) =>
      this.#renderTodo(todo, index)
    );
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
    icon.className = "fa-xl";
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
    right.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("fa-square-check")) {
        todo.check();
        console.log(todo.isChecked());
      }
    });

    this.#todoContainer.appendChild(todoDiv);
  }

  update(newState) {
    this.#state = newState;
    this.renderAll();
  }
}

export default RenderingHandler;
