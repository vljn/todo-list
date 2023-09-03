class StorageHandler {
  #app;
  #data;

  constructor(app) {
    this.#app = app;
    if (localStorage.getItem("selectedProject")) {
      const dataObj = {
        selectedProject: parseInt(localStorage.getItem("selectedProject")),
        selectedTodo: parseInt(localStorage.getItem("selectedTodo")),
        projects: JSON.parse(localStorage.getItem("projects")),
      };
      console.log(dataObj);
      this.#app.loadFromStorage(dataObj);
    }
  }

  updateStorage(data) {
    localStorage.setItem("selectedProject", data.selectedProject);
    localStorage.setItem("selectedTodo", data.selectedTodo);
    localStorage.setItem("projects", JSON.stringify(data.projects));
  }
}

export default StorageHandler;
