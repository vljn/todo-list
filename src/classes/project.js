class Project {
  constructor(name, ...todos) {
    this.name = name;
    this.todos = [];
    todos.forEach((x) => this.add(x));
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
