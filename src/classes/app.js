import RenderHandler from "./render.js";
import Project from "./project.js";
import Todo from "./todo.js";

class TodoApp {
  #renderHandler;

  constructor() {
    this.projects = [];
    this.selectedProject = -1;
    this.selectedTodo = -1;
    this.#renderHandler = new RenderHandler(this);
    this.#renderHandler.initialRender();
  }

  addProject(name = "New Project", color = "#ffcc00") {
    this.projects.push(new Project());
  }

  addTodo(title, description = "", date = "", color = "#034efc") {
    this.projects[this.selectedProject].add(new Todo(title, description, date, color));
  }

  getSelectedTodo() {
    if (this.selectedProject !== -1 && this.selectedTodo !== -1)
      return this.projects[this.selectedProject].todos[this.selectedTodo];
  }

  getSelectedProject() {
    if (this.selectedProject !== -1) return this.projects[this.selectedProject];
  }
}

export default TodoApp;
