class Project {
  constructor(name = "New Project", color = "#ffcc00") {
    this.name = name;
    this.todos = [];
    this.color = color;
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    if (this.todos[index] !== undefined) {
      delete this.todos[index];
    }
  }
}

export default Project;
