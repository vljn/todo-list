import RenderHandler from "./render.js";
import StorageHandler from "./storage.js";
import Project from "./project.js";
import Todo from "./todo.js";

class TodoApp {
  #renderHandler;
  #storageHandler;

  constructor() {
    this.projects = [];
    this.selectedProject = -1;
    this.selectedTodo = -1;
    this.#storageHandler = new StorageHandler(this);
    this.#renderHandler = new RenderHandler(this);
    this.#renderHandler.initialRender();
  }

  updateStorage() {
    const data = {
      selectedProject: this.selectedProject,
      selectedTodo: this.selectedTodo,
      projects: this.projects,
    };
    console.log(data);
    this.#storageHandler.updateStorage(data);
  }

  loadFromStorage(data) {
    console.log(data);
    this.selectedProject = data.selectedProject;
    this.selectedTodo = data.selectedTodo;
    data.projects.forEach((project, index) => {
      addProject(project.name, project.color, this.projects);
      console.log(this.projects);
      project.todos.forEach((todo) => {
        addTodoToProject(
          todo.title,
          todo.description,
          todo.data,
          todo.color,
          this.projects[index],
          todo.checked
        );
      });
    });

    function addProject(name = "New Project", color = "#ffcc00", array) {
      array.push(new Project(name, color));
    }

    function addTodoToProject(
      title,
      description = "",
      date = "",
      color = "#034efc",
      array,
      checked
    ) {
      const todo = new Todo(title, description, date, color);
      if (checked) todo.check();
      array.add(todo);
    }
  }

  addProject(name = "New Project", color = "#ffcc00") {
    this.projects.push(new Project());
    this.updateStorage();
  }

  addTodo(title, description = "", date = "", color = "#034efc") {
    this.projects[this.selectedProject].add(new Todo(title, description, date, color));
    this.updateStorage();
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
