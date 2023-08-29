import RenderHandler from "./render.js";
import Project from "./project.js";
import Todo from "./todo.js";

class TodoApp {
  #renderHandler;
  #clickHandler;

  constructor() {
    this.projects = [
      new Project("My Todos 1"),
      new Project("My Todos 2"),
      new Project("My Todos 3"),
      new Project("My Todos 4"),
      new Project("My Todos 5"),
    ];
    this.selectedProject = 0;
    this.selectedTodo = -1;

    this.addTodo("My Todo 1", "lorem ipsum", new Date(2023, 7, 28));
    this.addTodo("My Todo 2", "lorem ipsum", new Date(2023, 7, 29));
    this.addTodo("My Todo 3", "lorem ipsum", new Date(2023, 7, 30));
    this.#renderHandler = new RenderHandler(this.getState());
    this.#renderHandler.initialRender();
  }

  addProject(name) {
    this.projects.push(new Project(name));
  }

  switchProject(index) {
    if (index >= 0 && index < this.projects.length) {
      this.selectedProject = index;
      this.#renderHandler.update(this.getState());
    }
  }

  switchTodo(index) {
    if (index >= 0 && index < this.projects[this.selectedProject].todos.length) {
      this.selectedProject = index;
      this.#renderHandler.update(this.getState());
    }
  }

  addTodo(title, description = "", date = "", color = "#034efc") {
    this.projects[this.selectedProject].add(new Todo(title, description, date, color));
  }

  getState() {
    return {
      projects: this.projects,
      selectedProject: this.selectedProject,
      selectedTodo: this.selectedTodo,
    };
  }
}

export default TodoApp;
