import tabStyles from "../styles/tab.css";

class ClickHandler {
  constructor(app) {
    this.app = app;
    this.attachTabClickListeners();
    this.attachTodoClickListeners();
  }

  attachTabClickListeners() {
    const tabs = document.querySelectorAll(`.${tabStyles.tab}`);
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", (e) => {
        let deleted = false;
        if (e.target.nodeName === "svg" || e.target.nodeName === "path") {
          this.app.projects.splice(index, 1);
          deleted = true;
        }
        if (deleted) {
          if (index === this.app.selectedProject && index === this.app.projects.length) {
            this.app.switchProject(index - 1);
          } else if (index < this.app.selectedProject) {
            this.app.switchProject(this.app.selectedProject - 1);
          }
        } else {
          this.app.switchProject(index);
        }
      });
    });
  }

  attachTodoClickListeners() {
    // Attach similar click handlers for todos
  }
}

export default ClickHandler;
