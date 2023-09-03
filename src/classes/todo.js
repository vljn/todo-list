class Todo {
  checked = false;

  constructor(title, description = "", date = "", color = "#034efc") {
    this.title = title;
    this.description = description;
    this.date = date;
    this.color = color;
  }

  check() {
    this.checked = !this.checked;
  }

  isChecked() {
    return this.checked;
  }
}

export default Todo;
