/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@melloware/coloris/dist/coloris.css":
/*!**********************************************************!*\
  !*** ./node_modules/@melloware/coloris/dist/coloris.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"lf8hEzA4aKn1rDj_PBn6","tabs-wrapper":"mEQfynqu5RuqicIoA8K9","tabs":"nNSyPGcryZQwTIrUVces","new-tab":"WCBWRCQEwML75OoxxZ2o","main":"aib0H3tSWC710BSy6dlA","todos":"uWqthLArZZnuhE2vtsMo","todos-top":"u2CU35EkMu0f2uquAW4L","todos-bottom":"dm4pQShq3SlD88bzKiMz","inactive":"IuWAn8D0ACGjkPzHVrvf","new-todo-form":"PEBnUwwU1WGvjF2ju3bV","name-input":"kao5QCQITZmQq5AUAHdc","submit":"c0Ay9vam1KwlbONwt7Zz","heading":"zpuWpf_zkmbAyiQXsNu9","project":"Jpx1eW6OzhVTh6HinpsG","todo":"oghZvBmnsSXShbmMSvWT","todo-area":"U5cq0qImuSdm1NLqBxe6"});

/***/ }),

/***/ "./src/styles/tab.css":
/*!****************************!*\
  !*** ./src/styles/tab.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tab":"FfZHt7yfmh2ABWxQH07p","active":"ewWc3Nirjk3d9muXjBXZ","left":"rUYPo_Pl6Xhlx5mjNPpQ","right":"Y8aGa8fPbe725j6QJn4b","icon":"wMzYKVvVopYODhzdOFvA"});

/***/ }),

/***/ "./src/styles/todo.css":
/*!*****************************!*\
  !*** ./src/styles/todo.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"todo":"avBek8qkPJYit3lr8B0Q","left":"BK1Slr59GkKeUpgVb_Sv","color":"sUlo1p2hoQZClWLIQ7Zu","title":"ERWKPN8Hn_0aFuflMY20","active":"lYXJ0Tqzb0uLDJH9ZvwN","right":"p8WIVD_Z1ZVeZ8zUENT9","input":"h9ovgk7Iv__syefRSWrQ","project-input":"IuMvX7od8sSF1drdcWTX","input-color":"kjnecKHS8Lc5DLc8xN3n","left-todo":"mqZ0hU2Y0qRozlUvd9XB","right-todo":"y4KNWTt19ltCIG8cU3Kp","button":"xDlMfvfRoc3qigVWfkqc","date":"LoJbN7OkWv_NgKG2bB1G","date-input":"AYxG9nMyON9RMPRDPV5f","delete-button":"BrzRniePIN1jfU_s3wKz","todo-description":"AIzHKxdfazyzbXLXcxVs"});

/***/ }),

/***/ "./src/classes/app.js":
/*!****************************!*\
  !*** ./src/classes/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/classes/render.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/classes/storage.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/classes/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.js */ "./src/classes/todo.js");





class TodoApp {
  #renderHandler;
  #storageHandler;

  constructor() {
    this.projects = [];
    this.selectedProject = -1;
    this.selectedTodo = -1;
    this.#storageHandler = new _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.#renderHandler = new _render_js__WEBPACK_IMPORTED_MODULE_0__["default"](this);
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
      array.push(new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"](name, color));
    }

    function addTodoToProject(
      title,
      description = "",
      date = "",
      color = "#034efc",
      array,
      checked
    ) {
      const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_3__["default"](title, description, date, color);
      if (checked) todo.check();
      array.add(todo);
    }
  }

  addProject(name = "New Project", color = "#ffcc00") {
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"]());
    this.updateStorage();
  }

  addTodo(title, description = "", date = "", color = "#034efc") {
    this.projects[this.selectedProject].add(new _todo_js__WEBPACK_IMPORTED_MODULE_3__["default"](title, description, date, color));
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoApp);


/***/ }),

/***/ "./src/classes/project.js":
/*!********************************!*\
  !*** ./src/classes/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/classes/render.js":
/*!*******************************!*\
  !*** ./src/classes/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/pageLoad.js */ "./src/functions/pageLoad.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _styles_tab_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tab.css */ "./src/styles/tab.css");
/* harmony import */ var _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/todo.css */ "./src/styles/todo.css");
/* harmony import */ var _melloware_coloris_dist_coloris_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @melloware/coloris/dist/coloris.css */ "./node_modules/@melloware/coloris/dist/coloris.css");
/* harmony import */ var _melloware_coloris__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @melloware/coloris */ "./node_modules/@melloware/coloris/dist/esm/coloris.js");







class RenderingHandler {
  #tabContainer;
  #todoContainer;
  #app;

  constructor(app) {
    this.#app = app;
  }

  initialRender() {
    (0,_functions_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this.#addEventListenerNewTab();
    this.#addEventListenersNewTodo();
    this.#tabContainer = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].tabs);
    this.#todoContainer = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"]["todos-top"]);
    this.renderAll();
    _melloware_coloris__WEBPACK_IMPORTED_MODULE_5__["default"].init();
    (0,_melloware_coloris__WEBPACK_IMPORTED_MODULE_5__["default"])({
      themeMode: "light",
      alpha: false,
      swatches: ["#0ab30a", "#ffcc00", "#034efc", "#d12631"],
      el: "." + _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"]["input-color"],
      wrap: false,
    });
  }

  #addEventListenerNewTab() {
    const newTabButton = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"]["new-tab"]);
    newTabButton.addEventListener("click", () => {
      this.#app.addProject();
      if (this.#app.selectedProject === -1) {
        this.#app.selectedProject = 0;
      }
      this.#app.updateStorage();
      this.renderAll();
    });
  }

  #addEventListenersNewTodo() {
    const submitButton = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].submit);
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.#app.projects.length === 0) return;
      const input = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"]["name-input"]);
      if (input.value !== "") {
        this.#app.addTodo(input.value);
      } else {
        this.#app.addTodo("New Todo");
      }
      this.#app.updateStorage();
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

    const submitButton = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].submit);
    const input = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"]["name-input"]);
    if (this.#app.projects.length > 0) {
      submitButton.classList.remove(_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].inactive);
      input.classList.remove(_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].inactive);
    } else {
      submitButton.classList.add(_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].inactive);
      input.classList.add(_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].inactive);
    }
  }

  #renderTab(project, index) {
    const tab = document.createElement("div");
    tab.setAttribute("data-index", index);
    tab.className = _styles_tab_css__WEBPACK_IMPORTED_MODULE_2__["default"].tab;
    tab.style["border-left"] = "5px solid " + project.color;

    if (this.#app.selectedProject !== index) {
      tab.classList.remove(_styles_tab_css__WEBPACK_IMPORTED_MODULE_2__["default"].active);
    } else {
      document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].main).style["border-left"] = "5px solid " + project.color;
      tab.classList.add(_styles_tab_css__WEBPACK_IMPORTED_MODULE_2__["default"].active);
    }

    const left = document.createElement("div");
    left.className = _styles_tab_css__WEBPACK_IMPORTED_MODULE_2__["default"].left;
    tab.appendChild(left);

    const name = document.createElement("p");
    name.textContent = project.name;
    left.appendChild(name);

    const right = document.createElement("div");
    right.className = _styles_tab_css__WEBPACK_IMPORTED_MODULE_2__["default"].right;
    tab.appendChild(right);

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-xmark", _styles_tab_css__WEBPACK_IMPORTED_MODULE_2__["default"].icon);
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
      this.#app.updateStorage();
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
    todoDiv.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"].todo;

    const left = document.createElement("div");
    left.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"].left;
    todoDiv.appendChild(left);

    const colorDiv = document.createElement("div");
    colorDiv.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"].color;
    left.appendChild(colorDiv);
    colorDiv.style["background-color"] = todo.color;

    const title = document.createElement("div");
    title.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"].title;
    left.appendChild(title);
    title.textContent = todo.title;

    const right = document.createElement("div");
    right.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"].right;
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
      this.#app.updateStorage();
      this.renderTodos();
    });

    if (index === this.#app.selectedTodo) {
      todoDiv.classList.add(_styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"].active);
    }

    this.#todoContainer.appendChild(todoDiv);
  }

  #renderTodoScreen() {
    const projectInfo = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].project);
    projectInfo.innerHTML = "";
    if (this.#app.selectedProject !== -1) {
      const project = this.#app.getSelectedProject();

      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.value = project.name;
      input.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"]["input"];
      projectInfo.appendChild(input);

      const edit = document.createElement("button");
      edit.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"].button;
      const editIcon = document.createElement("i");
      editIcon.classList.add("fa-solid", "fa-pen", "fa-xs");
      edit.appendChild(editIcon);
      projectInfo.appendChild(edit);

      edit.addEventListener("click", () => {
        if (input.value !== "") {
          project.name = input.value;
          this.#app.updateStorage();
          this.renderTabs();
        }
      });

      const inputColor = document.createElement("input");
      inputColor.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"]["input-color"];
      inputColor.value = project.color;
      projectInfo.appendChild(inputColor);

      inputColor.addEventListener("input", () => {
        project.color = inputColor.value;
        this.#app.updateStorage();
        this.renderTabs();
      });
    }

    const todoInfo = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"]["todo"]);
    todoInfo.innerHTML = "";
    if (this.#app.selectedTodo !== -1) {
      const todo = this.#app.getSelectedTodo();

      const left = document.createElement("div");
      left.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"]["left-todo"];
      todoInfo.appendChild(left);

      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.value = todo.title;
      input.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"]["input"];
      left.appendChild(input);

      const edit = document.createElement("button");
      edit.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"].button;
      const editIcon = document.createElement("i");
      editIcon.classList.add("fa-solid", "fa-pen", "fa-xs");
      edit.appendChild(editIcon);
      left.appendChild(edit);

      edit.addEventListener("click", () => {
        if (input.value !== "") {
          todo.title = input.value;
          this.#app.updateStorage();
          this.renderTodos();
        }
      });

      const inputColor = document.createElement("input");
      inputColor.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"]["input-color"];
      inputColor.value = todo.color;
      left.appendChild(inputColor);

      inputColor.addEventListener("input", () => {
        todo.color = inputColor.value;
        this.#app.updateStorage();
        this.renderTodos();
      });

      const right = document.createElement("div");
      right.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"]["right-todo"];
      todoInfo.appendChild(right);

      const dateDiv = document.createElement("div");
      dateDiv.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"].date;
      dateDiv.textContent = "due:";
      right.appendChild(dateDiv);

      const dateInput = document.createElement("input");
      dateInput.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"]["date-input"];
      dateInput.setAttribute("type", "date");
      dateDiv.appendChild(dateInput);
      if (todo.date !== "") {
        dateInput.value = todo.date;
      }
      dateInput.addEventListener("input", () => {
        this.#app.updateStorage();
        todo.date = dateInput.value;
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"]["delete-button"];

      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fa-regular", "fa-trash-can", "fa-lg");
      deleteBtn.appendChild(deleteIcon);

      deleteBtn.addEventListener("click", () => {
        this.#app.getSelectedProject().todos.splice(this.#app.selectedTodo, 1);
        this.#app.selectedTodo = -1;
        this.#app.updateStorage();
        this.renderTodos();
        this.#renderTodoScreen();
      });

      right.appendChild(deleteBtn);
    }

    const todoArea = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"]["todo-area"]);
    todoArea.innerHTML = "";
    if (this.#app.selectedTodo !== -1) {
      const description = document.createElement("textarea");
      description.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"]["todo-description"];
      description.textContent = this.#app.getSelectedTodo().description;
      description.addEventListener("input", () => {
        this.#app.updateStorage();
        this.#app.getSelectedTodo().description = description.value;
      });
      todoArea.appendChild(description);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderingHandler);


/***/ }),

/***/ "./src/classes/storage.js":
/*!********************************!*\
  !*** ./src/classes/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageHandler);


/***/ }),

/***/ "./src/classes/todo.js":
/*!*****************************!*\
  !*** ./src/classes/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/functions/pageLoad.js":
/*!***********************************!*\
  !*** ./src/functions/pageLoad.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");


function pageLoad() {
  const wrapper = document.createElement("div");
  wrapper.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"].wrapper;

  const tabsWrapper = document.createElement("div");
  tabsWrapper.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"]["tabs-wrapper"];
  wrapper.appendChild(tabsWrapper);

  const tabs = document.createElement("div");
  tabs.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"].tabs;
  tabsWrapper.appendChild(tabs);

  const newTabButton = document.createElement("button");
  newTabButton.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"]["new-tab"];
  tabsWrapper.appendChild(newTabButton);

  const checkIcon1 = document.createElement("i");
  checkIcon1.classList.add("fa-solid", "fa-plus", "fa-xl");
  newTabButton.appendChild(checkIcon1);

  const main = document.createElement("div");
  main.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"].main;
  main.style["border-left"] = "5px solid #ffcc00";
  wrapper.appendChild(main);

  const todos = document.createElement("div");
  todos.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"].todos;
  main.appendChild(todos);

  const todosTop = document.createElement("div");
  todosTop.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"]["todos-top"];
  todos.appendChild(todosTop);

  const todosBottom = document.createElement("div");
  todosBottom.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"]["todos-bottom"];
  todos.appendChild(todosBottom);

  const newTodoForm = document.createElement("form");
  newTodoForm.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"]["new-todo-form"];
  todosBottom.appendChild(newTodoForm);

  const formLeft = document.createElement("div");
  formLeft.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"]["form-left"];
  newTodoForm.appendChild(formLeft);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"]["name-input"];
  formLeft.appendChild(nameInput);

  const formRight = document.createElement("div");
  formRight.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"]["form-right"];
  newTodoForm.appendChild(formRight);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"].submit;
  formRight.appendChild(submitButton);

  const checkIcon2 = document.createElement("i");
  checkIcon2.classList.add("fa-solid", "fa-plus", "fa-xl");
  submitButton.appendChild(checkIcon2);

  const todoScreen = document.createElement("div");
  main.appendChild(todoScreen);

  const heading = document.createElement("div");
  heading.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"].heading;
  todoScreen.appendChild(heading);

  const projectInfo = document.createElement("div");
  projectInfo.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"].project;
  heading.appendChild(projectInfo);

  const todoInfo = document.createElement("div");
  todoInfo.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"].todo;
  heading.appendChild(todoInfo);

  const todoArea = document.createElement("div");
  todoArea.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"]["todo-area"];
  todoScreen.appendChild(todoArea);

  document.querySelector("body").appendChild(wrapper);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);


/***/ }),

/***/ "./node_modules/@melloware/coloris/dist/esm/coloris.js":
/*!*************************************************************!*\
  !*** ./node_modules/@melloware/coloris/dist/esm/coloris.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   close: () => (/* binding */ _close),
/* harmony export */   coloris: () => (/* binding */ _coloris),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   init: () => (/* binding */ _init),
/* harmony export */   removeInstance: () => (/* binding */ _removeInstance),
/* harmony export */   set: () => (/* binding */ _set),
/* harmony export */   setInstance: () => (/* binding */ _setInstance),
/* harmony export */   updatePosition: () => (/* binding */ _updatePosition),
/* harmony export */   wrap: () => (/* binding */ _wrap)
/* harmony export */ });
var Coloris = function () {
  /*!
  * Copyright (c) 2021-2023 Momo Bassit.
  * Licensed under the MIT License (MIT)
  * https://github.com/mdbassit/Coloris
  * Version: 0.21.1
  * NPM: https://github.com/melloware/coloris-npm
  */

  return function (window, document, Math, undefined) {
    var ctx = document.createElement('canvas').getContext('2d');
    var currentColor = { r: 0, g: 0, b: 0, h: 0, s: 0, v: 0, a: 1 };
    var container,picker,colorArea,colorMarker,colorPreview,colorValue,clearButton,closeButton,
      hueSlider,hueMarker,alphaSlider,alphaMarker,currentEl,currentFormat,oldColor,keyboardNav,
      colorAreaDims = {};

    // Default settings
    var settings = {
      el: '[data-coloris]',
      parent: 'body',
      theme: 'default',
      themeMode: 'light',
      rtl: false,
      wrap: true,
      margin: 2,
      format: 'hex',
      formatToggle: false,
      swatches: [],
      swatchesOnly: false,
      alpha: true,
      forceAlpha: false,
      focusInput: true,
      selectInput: false,
      inline: false,
      defaultColor: '#000000',
      clearButton: false,
      clearLabel: 'Clear',
      closeButton: false,
      closeLabel: 'Close',
      onChange: function onChange() {return undefined;},
      a11y: {
        open: 'Open color picker',
        close: 'Close color picker',
        clear: 'Clear the selected color',
        marker: 'Saturation: {s}. Brightness: {v}.',
        hueSlider: 'Hue slider',
        alphaSlider: 'Opacity slider',
        input: 'Color value field',
        format: 'Color format',
        swatch: 'Color swatch',
        instruction: 'Saturation and brightness selector. Use up, down, left and right arrow keys to select.'
      }
    };

    // Virtual instances cache
    var instances = {};
    var currentInstanceId = '';
    var defaultInstance = {};
    var hasInstance = false;

    /**
     * Configure the color picker.
     * @param {object} options Configuration options.
     */
    function configure(options) {
      if (typeof options !== 'object') {
        return;
      }var _loop = function _loop()

      {
        switch (key) {
          case 'el':
            bindFields(options.el);
            if (options.wrap !== false) {
              wrapFields(options.el);
            }
            break;
          case 'parent':
            container = document.querySelector(options.parent);
            if (container) {
              container.appendChild(picker);
              settings.parent = options.parent;

              // document.body is special
              if (container === document.body) {
                container = undefined;
              }
            }
            break;
          case 'themeMode':
            settings.themeMode = options.themeMode;
            if (options.themeMode === 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
              settings.themeMode = 'dark';
            }
          // The lack of a break statement is intentional
          case 'theme':
            if (options.theme) {
              settings.theme = options.theme;
            }

            // Set the theme and color scheme
            picker.className = "clr-picker clr-" + settings.theme + " clr-" + settings.themeMode;

            // Update the color picker's position if inline mode is in use
            if (settings.inline) {
              updatePickerPosition();
            }
            break;
          case 'rtl':
            settings.rtl = !!options.rtl;
            document.querySelectorAll('.clr-field').forEach(function (field) {return field.classList.toggle('clr-rtl', settings.rtl);});
            break;
          case 'margin':
            options.margin *= 1;
            settings.margin = !isNaN(options.margin) ? options.margin : settings.margin;
            break;
          case 'wrap':
            if (options.el && options.wrap) {
              wrapFields(options.el);
            }
            break;
          case 'formatToggle':
            settings.formatToggle = !!options.formatToggle;
            getEl('clr-format').style.display = settings.formatToggle ? 'block' : 'none';
            if (settings.formatToggle) {
              settings.format = 'auto';
            }
            break;
          case 'swatches':
            if (Array.isArray(options.swatches)) {
              var swatches = [];

              options.swatches.forEach(function (swatch, i) {
                swatches.push("<button type=\"button\" id=\"clr-swatch-" + i + "\" aria-labelledby=\"clr-swatch-label clr-swatch-" + i + "\" style=\"color: " + swatch + ";\">" + swatch + "</button>");
              });

              getEl('clr-swatches').innerHTML = swatches.length ? "<div>" + swatches.join('') + "</div>" : '';
              settings.swatches = options.swatches.slice();
            }
            break;
          case 'swatchesOnly':
            settings.swatchesOnly = !!options.swatchesOnly;
            picker.setAttribute('data-minimal', settings.swatchesOnly);
            break;
          case 'alpha':
            settings.alpha = !!options.alpha;
            picker.setAttribute('data-alpha', settings.alpha);
            break;
          case 'inline':
            settings.inline = !!options.inline;
            picker.setAttribute('data-inline', settings.inline);

            if (settings.inline) {
              var defaultColor = options.defaultColor || settings.defaultColor;

              currentFormat = getColorFormatFromStr(defaultColor);
              updatePickerPosition();
              setColorFromStr(defaultColor);
            }
            break;
          case 'clearButton':
            // Backward compatibility
            if (typeof options.clearButton === 'object') {
              if (options.clearButton.label) {
                settings.clearLabel = options.clearButton.label;
                clearButton.innerHTML = settings.clearLabel;
              }

              options.clearButton = options.clearButton.show;
            }

            settings.clearButton = !!options.clearButton;
            clearButton.style.display = settings.clearButton ? 'block' : 'none';
            break;
          case 'clearLabel':
            settings.clearLabel = options.clearLabel;
            clearButton.innerHTML = settings.clearLabel;
            break;
          case 'closeButton':
            settings.closeButton = !!options.closeButton;

            if (settings.closeButton) {
              picker.insertBefore(closeButton, colorPreview);
            } else {
              colorPreview.appendChild(closeButton);
            }

            break;
          case 'closeLabel':
            settings.closeLabel = options.closeLabel;
            closeButton.innerHTML = settings.closeLabel;
            break;
          case 'a11y':
            var labels = options.a11y;
            var update = false;

            if (typeof labels === 'object') {
              for (var label in labels) {
                if (labels[label] && settings.a11y[label]) {
                  settings.a11y[label] = labels[label];
                  update = true;
                }
              }
            }

            if (update) {
              var openLabel = getEl('clr-open-label');
              var swatchLabel = getEl('clr-swatch-label');

              openLabel.innerHTML = settings.a11y.open;
              swatchLabel.innerHTML = settings.a11y.swatch;
              closeButton.setAttribute('aria-label', settings.a11y.close);
              clearButton.setAttribute('aria-label', settings.a11y.clear);
              hueSlider.setAttribute('aria-label', settings.a11y.hueSlider);
              alphaSlider.setAttribute('aria-label', settings.a11y.alphaSlider);
              colorValue.setAttribute('aria-label', settings.a11y.input);
              colorArea.setAttribute('aria-label', settings.a11y.instruction);
            }
            break;
          default:
            settings[key] = options[key];
        }
      };for (var key in options) {_loop();}
    }

    /**
     * Add or update a virtual instance.
     * @param {String} selector The CSS selector of the elements to which the instance is attached.
     * @param {Object} options Per-instance options to apply.
     */
    function setVirtualInstance(selector, options) {
      if (typeof selector === 'string' && typeof options === 'object') {
        instances[selector] = options;
        hasInstance = true;
      }
    }

    /**
     * Remove a virtual instance.
     * @param {String} selector The CSS selector of the elements to which the instance is attached.
     */
    function removeVirtualInstance(selector) {
      delete instances[selector];

      if (Object.keys(instances).length === 0) {
        hasInstance = false;

        if (selector === currentInstanceId) {
          resetVirtualInstance();
        }
      }
    }

    /**
     * Attach a virtual instance to an element if it matches a selector.
     * @param {Object} element Target element that will receive a virtual instance if applicable.
     */
    function attachVirtualInstance(element) {
      if (hasInstance) {
        // These options can only be set globally, not per instance
        var unsupportedOptions = ['el', 'wrap', 'rtl', 'inline', 'defaultColor', 'a11y'];var _loop2 = function _loop2()

        {
          var options = instances[selector];

          // If the element matches an instance's CSS selector
          if (element.matches(selector)) {
            currentInstanceId = selector;
            defaultInstance = {};

            // Delete unsupported options
            unsupportedOptions.forEach(function (option) {return delete options[option];});

            // Back up the default options so we can restore them later
            for (var option in options) {
              defaultInstance[option] = Array.isArray(settings[option]) ? settings[option].slice() : settings[option];
            }

            // Set the instance's options
            configure(options);return "break";

          }
        };for (var selector in instances) {var _ret = _loop2();if (_ret === "break") break;}
      }
    }

    /**
     * Revert any per-instance options that were previously applied.
     */
    function resetVirtualInstance() {
      if (Object.keys(defaultInstance).length > 0) {
        configure(defaultInstance);
        currentInstanceId = '';
        defaultInstance = {};
      }
    }

    /**
     * Bind the color picker to input fields that match the selector.
     * @param {string} selector One or more selectors pointing to input fields.
     */
    function bindFields(selector) {
      // Show the color picker on click on the input fields that match the selector
      addListener(document, 'click', selector, function (event) {
        // Skip if inline mode is in use
        if (settings.inline) {
          return;
        }

        // Apply any per-instance options first
        attachVirtualInstance(event.target);

        currentEl = event.target;
        oldColor = currentEl.value;
        currentFormat = getColorFormatFromStr(oldColor);
        picker.classList.add('clr-open');

        updatePickerPosition();
        setColorFromStr(oldColor);

        if (settings.focusInput || settings.selectInput) {
          colorValue.focus({ preventScroll: true });
          colorValue.setSelectionRange(currentEl.selectionStart, currentEl.selectionEnd);
        }

        if (settings.selectInput) {
          colorValue.select();
        }

        // Always focus the first element when using keyboard navigation
        if (keyboardNav || settings.swatchesOnly) {
          getFocusableElements().shift().focus();
        }

        // Trigger an "open" event
        currentEl.dispatchEvent(new Event('open', { bubbles: true }));
      });

      // Update the color preview of the input fields that match the selector
      addListener(document, 'input', selector, function (event) {
        var parent = event.target.parentNode;

        // Only update the preview if the field has been previously wrapped
        if (parent.classList.contains('clr-field')) {
          parent.style.color = event.target.value;
        }
      });
    }

    /**
     * Update the color picker's position and the color gradient's offset
     */
    function updatePickerPosition() {
      if (!picker || !currentEl && !settings.inline) return; //** DO NOT REMOVE: in case called before initialized
      var parent = container;
      var scrollY = window.scrollY;
      var pickerWidth = picker.offsetWidth;
      var pickerHeight = picker.offsetHeight;
      var reposition = { left: false, top: false };
      var parentStyle, parentMarginTop, parentBorderTop;
      var offset = { x: 0, y: 0 };

      if (parent) {
        parentStyle = window.getComputedStyle(parent);
        parentMarginTop = parseFloat(parentStyle.marginTop);
        parentBorderTop = parseFloat(parentStyle.borderTopWidth);

        offset = parent.getBoundingClientRect();
        offset.y += parentBorderTop + scrollY;
      }

      if (!settings.inline) {
        var coords = currentEl.getBoundingClientRect();
        var left = coords.x;
        var top = scrollY + coords.y + coords.height + settings.margin;

        // If the color picker is inside a custom container
        // set the position relative to it
        if (parent) {
          left -= offset.x;
          top -= offset.y;

          if (left + pickerWidth > parent.clientWidth) {
            left += coords.width - pickerWidth;
            reposition.left = true;
          }

          if (top + pickerHeight > parent.clientHeight - parentMarginTop) {
            if (pickerHeight + settings.margin <= coords.top - (offset.y - scrollY)) {
              top -= coords.height + pickerHeight + settings.margin * 2;
              reposition.top = true;
            }
          }

          top += parent.scrollTop;

          // Otherwise set the position relative to the whole document
        } else {
          if (left + pickerWidth > document.documentElement.clientWidth) {
            left += coords.width - pickerWidth;
            reposition.left = true;
          }

          if (top + pickerHeight - scrollY > document.documentElement.clientHeight) {
            if (pickerHeight + settings.margin <= coords.top) {
              top = scrollY + coords.y - pickerHeight - settings.margin;
              reposition.top = true;
            }
          }
        }

        picker.classList.toggle('clr-left', reposition.left);
        picker.classList.toggle('clr-top', reposition.top);
        picker.style.left = left + "px";
        picker.style.top = top + "px";
        offset.x += picker.offsetLeft;
        offset.y += picker.offsetTop;
      }

      colorAreaDims = {
        width: colorArea.offsetWidth,
        height: colorArea.offsetHeight,
        x: colorArea.offsetLeft + offset.x,
        y: colorArea.offsetTop + offset.y
      };
    }

    /**
     * Wrap the linked input fields in a div that adds a color preview.
     * @param {string} selector One or more selectors pointing to input fields.
     */
    function wrapFields(selector) {
      document.querySelectorAll(selector).forEach(function (field) {
        var parentNode = field.parentNode;

        if (!parentNode.classList.contains('clr-field')) {
          var wrapper = document.createElement('div');
          var classes = 'clr-field';

          if (settings.rtl || field.classList.contains('clr-rtl')) {
            classes += ' clr-rtl';
          }

          wrapper.innerHTML = "<button type=\"button\" aria-labelledby=\"clr-open-label\"></button>";
          parentNode.insertBefore(wrapper, field);
          wrapper.setAttribute('class', classes);
          wrapper.style.color = field.value;
          wrapper.appendChild(field);
        }
      });
    }

    /**
     * Close the color picker.
     * @param {boolean} [revert] If true, revert the color to the original value.
     */
    function closePicker(revert) {
      if (currentEl && !settings.inline) {
        var prevEl = currentEl;

        // Revert the color to the original value if needed
        if (revert) {
          // This will prevent the "change" event on the colorValue input to execute its handler
          currentEl = undefined;

          if (oldColor !== prevEl.value) {
            prevEl.value = oldColor;

            // Trigger an "input" event to force update the thumbnail next to the input field
            prevEl.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }

        // Trigger a "change" event if needed
        setTimeout(function () {// Add this to the end of the event loop
          if (oldColor !== prevEl.value) {
            prevEl.dispatchEvent(new Event('change', { bubbles: true }));
          }
        });

        // Hide the picker dialog
        picker.classList.remove('clr-open');

        // Reset any previously set per-instance options
        if (hasInstance) {
          resetVirtualInstance();
        }

        // Trigger a "close" event
        prevEl.dispatchEvent(new Event('close', { bubbles: true }));

        if (settings.focusInput) {
          prevEl.focus({ preventScroll: true });
        }

        // This essentially marks the picker as closed
        currentEl = undefined;
      }
    }

    /**
     * Set the active color from a string.
     * @param {string} str String representing a color.
     */
    function setColorFromStr(str) {
      var rgba = strToRGBA(str);
      var hsva = RGBAtoHSVA(rgba);

      updateMarkerA11yLabel(hsva.s, hsva.v);
      updateColor(rgba, hsva);

      // Update the UI
      hueSlider.value = hsva.h;
      picker.style.color = "hsl(" + hsva.h + ", 100%, 50%)";
      hueMarker.style.left = hsva.h / 360 * 100 + "%";

      colorMarker.style.left = colorAreaDims.width * hsva.s / 100 + "px";
      colorMarker.style.top = colorAreaDims.height - colorAreaDims.height * hsva.v / 100 + "px";

      alphaSlider.value = hsva.a * 100;
      alphaMarker.style.left = hsva.a * 100 + "%";
    }

    /**
     * Guess the color format from a string.
     * @param {string} str String representing a color.
     * @return {string} The color format.
     */
    function getColorFormatFromStr(str) {
      var format = str.substring(0, 3).toLowerCase();

      if (format === 'rgb' || format === 'hsl') {
        return format;
      }

      return 'hex';
    }

    /**
     * Copy the active color to the linked input field.
     * @param {number} [color] Color value to override the active color.
     */
    function pickColor(color) {
      color = color !== undefined ? color : colorValue.value;

      if (currentEl) {
        currentEl.value = color;
        currentEl.dispatchEvent(new Event('input', { bubbles: true }));
      }

      if (settings.onChange) {
        settings.onChange.call(window, color, currentEl);
      }

      document.dispatchEvent(new CustomEvent('coloris:pick', { detail: { color: color, currentEl: currentEl } }));
    }

    /**
     * Set the active color based on a specific point in the color gradient.
     * @param {number} x Left position.
     * @param {number} y Top position.
     */
    function setColorAtPosition(x, y) {
      var hsva = {
        h: hueSlider.value * 1,
        s: x / colorAreaDims.width * 100,
        v: 100 - y / colorAreaDims.height * 100,
        a: alphaSlider.value / 100
      };
      var rgba = HSVAtoRGBA(hsva);

      updateMarkerA11yLabel(hsva.s, hsva.v);
      updateColor(rgba, hsva);
      pickColor();
    }

    /**
     * Update the color marker's accessibility label.
     * @param {number} saturation
     * @param {number} value
     */
    function updateMarkerA11yLabel(saturation, value) {
      var label = settings.a11y.marker;

      saturation = saturation.toFixed(1) * 1;
      value = value.toFixed(1) * 1;
      label = label.replace('{s}', saturation);
      label = label.replace('{v}', value);
      colorMarker.setAttribute('aria-label', label);
    }

    //
    /**
     * Get the pageX and pageY positions of the pointer.
     * @param {object} event The MouseEvent or TouchEvent object.
     * @return {object} The pageX and pageY positions.
     */
    function getPointerPosition(event) {
      return {
        pageX: event.changedTouches ? event.changedTouches[0].pageX : event.pageX,
        pageY: event.changedTouches ? event.changedTouches[0].pageY : event.pageY
      };
    }

    /**
     * Move the color marker when dragged.
     * @param {object} event The MouseEvent object.
     */
    function moveMarker(event) {
      var pointer = getPointerPosition(event);
      var x = pointer.pageX - colorAreaDims.x;
      var y = pointer.pageY - colorAreaDims.y;

      if (container) {
        y += container.scrollTop;
      }

      setMarkerPosition(x, y);

      // Prevent scrolling while dragging the marker
      event.preventDefault();
      event.stopPropagation();
    }

    /**
     * Move the color marker when the arrow keys are pressed.
     * @param {number} offsetX The horizontal amount to move.
     * @param {number} offsetY The vertical amount to move.
     */
    function moveMarkerOnKeydown(offsetX, offsetY) {
      var x = colorMarker.style.left.replace('px', '') * 1 + offsetX;
      var y = colorMarker.style.top.replace('px', '') * 1 + offsetY;

      setMarkerPosition(x, y);
    }

    /**
     * Set the color marker's position.
     * @param {number} x Left position.
     * @param {number} y Top position.
     */
    function setMarkerPosition(x, y) {
      // Make sure the marker doesn't go out of bounds
      x = x < 0 ? 0 : x > colorAreaDims.width ? colorAreaDims.width : x;
      y = y < 0 ? 0 : y > colorAreaDims.height ? colorAreaDims.height : y;

      // Set the position
      colorMarker.style.left = x + "px";
      colorMarker.style.top = y + "px";

      // Update the color
      setColorAtPosition(x, y);

      // Make sure the marker is focused
      colorMarker.focus();
    }

    /**
     * Update the color picker's input field and preview thumb.
     * @param {Object} rgba Red, green, blue and alpha values.
     * @param {Object} [hsva] Hue, saturation, value and alpha values.
     */
    function updateColor(rgba, hsva) {if (rgba === void 0) {rgba = {};}if (hsva === void 0) {hsva = {};}
      var format = settings.format;

      for (var key in rgba) {
        currentColor[key] = rgba[key];
      }

      for (var _key in hsva) {
        currentColor[_key] = hsva[_key];
      }

      var hex = RGBAToHex(currentColor);
      var opaqueHex = hex.substring(0, 7);

      colorMarker.style.color = opaqueHex;
      alphaMarker.parentNode.style.color = opaqueHex;
      alphaMarker.style.color = hex;
      colorPreview.style.color = hex;

      // Force repaint the color and alpha gradients as a workaround for a Google Chrome bug
      colorArea.style.display = 'none';
      colorArea.offsetHeight;
      colorArea.style.display = '';
      alphaMarker.nextElementSibling.style.display = 'none';
      alphaMarker.nextElementSibling.offsetHeight;
      alphaMarker.nextElementSibling.style.display = '';

      if (format === 'mixed') {
        format = currentColor.a === 1 ? 'hex' : 'rgb';
      } else if (format === 'auto') {
        format = currentFormat;
      }

      switch (format) {
        case 'hex':
          colorValue.value = hex;
          break;
        case 'rgb':
          colorValue.value = RGBAToStr(currentColor);
          break;
        case 'hsl':
          colorValue.value = HSLAToStr(HSVAtoHSLA(currentColor));
          break;
      }

      // Select the current format in the format switcher
      document.querySelector(".clr-format [value=\"" + format + "\"]").checked = true;
    }

    /**
     * Set the hue when its slider is moved.
     */
    function setHue() {
      var hue = hueSlider.value * 1;
      var x = colorMarker.style.left.replace('px', '') * 1;
      var y = colorMarker.style.top.replace('px', '') * 1;

      picker.style.color = "hsl(" + hue + ", 100%, 50%)";
      hueMarker.style.left = hue / 360 * 100 + "%";

      setColorAtPosition(x, y);
    }

    /**
     * Set the alpha when its slider is moved.
     */
    function setAlpha() {
      var alpha = alphaSlider.value / 100;

      alphaMarker.style.left = alpha * 100 + "%";
      updateColor({ a: alpha });
      pickColor();
    }

    /**
     * Convert HSVA to RGBA.
     * @param {object} hsva Hue, saturation, value and alpha values.
     * @return {object} Red, green, blue and alpha values.
     */
    function HSVAtoRGBA(hsva) {
      var saturation = hsva.s / 100;
      var value = hsva.v / 100;
      var chroma = saturation * value;
      var hueBy60 = hsva.h / 60;
      var x = chroma * (1 - Math.abs(hueBy60 % 2 - 1));
      var m = value - chroma;

      chroma = chroma + m;
      x = x + m;

      var index = Math.floor(hueBy60) % 6;
      var red = [chroma, x, m, m, x, chroma][index];
      var green = [x, chroma, chroma, x, m, m][index];
      var blue = [m, m, x, chroma, chroma, x][index];

      return {
        r: Math.round(red * 255),
        g: Math.round(green * 255),
        b: Math.round(blue * 255),
        a: hsva.a
      };
    }

    /**
     * Convert HSVA to HSLA.
     * @param {object} hsva Hue, saturation, value and alpha values.
     * @return {object} Hue, saturation, lightness and alpha values.
     */
    function HSVAtoHSLA(hsva) {
      var value = hsva.v / 100;
      var lightness = value * (1 - hsva.s / 100 / 2);
      var saturation;

      if (lightness > 0 && lightness < 1) {
        saturation = Math.round((value - lightness) / Math.min(lightness, 1 - lightness) * 100);
      }

      return {
        h: hsva.h,
        s: saturation || 0,
        l: Math.round(lightness * 100),
        a: hsva.a
      };
    }

    /**
     * Convert RGBA to HSVA.
     * @param {object} rgba Red, green, blue and alpha values.
     * @return {object} Hue, saturation, value and alpha values.
     */
    function RGBAtoHSVA(rgba) {
      var red = rgba.r / 255;
      var green = rgba.g / 255;
      var blue = rgba.b / 255;
      var xmax = Math.max(red, green, blue);
      var xmin = Math.min(red, green, blue);
      var chroma = xmax - xmin;
      var value = xmax;
      var hue = 0;
      var saturation = 0;

      if (chroma) {
        if (xmax === red) {hue = (green - blue) / chroma;}
        if (xmax === green) {hue = 2 + (blue - red) / chroma;}
        if (xmax === blue) {hue = 4 + (red - green) / chroma;}
        if (xmax) {saturation = chroma / xmax;}
      }

      hue = Math.floor(hue * 60);

      return {
        h: hue < 0 ? hue + 360 : hue,
        s: Math.round(saturation * 100),
        v: Math.round(value * 100),
        a: rgba.a
      };
    }

    /**
     * Parse a string to RGBA.
     * @param {string} str String representing a color.
     * @return {object} Red, green, blue and alpha values.
     */
    function strToRGBA(str) {
      var regex = /^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i;
      var match, rgba;

      // Default to black for invalid color strings
      ctx.fillStyle = '#000';

      // Use canvas to convert the string to a valid color string
      ctx.fillStyle = str;
      match = regex.exec(ctx.fillStyle);

      if (match) {
        rgba = {
          r: match[3] * 1,
          g: match[4] * 1,
          b: match[5] * 1,
          a: match[6] * 1
        };

        // Workaround to mitigate a Chromium bug where the alpha value is rounded incorrectly
        rgba.a = +rgba.a.toFixed(2);

      } else {
        match = ctx.fillStyle.replace('#', '').match(/.{2}/g).map(function (h) {return parseInt(h, 16);});
        rgba = {
          r: match[0],
          g: match[1],
          b: match[2],
          a: 1
        };
      }

      return rgba;
    }

    /**
     * Convert RGBA to Hex.
     * @param {object} rgba Red, green, blue and alpha values.
     * @return {string} Hex color string.
     */
    function RGBAToHex(rgba) {
      var R = rgba.r.toString(16);
      var G = rgba.g.toString(16);
      var B = rgba.b.toString(16);
      var A = '';

      if (rgba.r < 16) {
        R = '0' + R;
      }

      if (rgba.g < 16) {
        G = '0' + G;
      }

      if (rgba.b < 16) {
        B = '0' + B;
      }

      if (settings.alpha && (rgba.a < 1 || settings.forceAlpha)) {
        var alpha = rgba.a * 255 | 0;
        A = alpha.toString(16);

        if (alpha < 16) {
          A = '0' + A;
        }
      }

      return '#' + R + G + B + A;
    }

    /**
     * Convert RGBA values to a CSS rgb/rgba string.
     * @param {object} rgba Red, green, blue and alpha values.
     * @return {string} CSS color string.
     */
    function RGBAToStr(rgba) {
      if (!settings.alpha || rgba.a === 1 && !settings.forceAlpha) {
        return "rgb(" + rgba.r + ", " + rgba.g + ", " + rgba.b + ")";
      } else {
        return "rgba(" + rgba.r + ", " + rgba.g + ", " + rgba.b + ", " + rgba.a + ")";
      }
    }

    /**
     * Convert HSLA values to a CSS hsl/hsla string.
     * @param {object} hsla Hue, saturation, lightness and alpha values.
     * @return {string} CSS color string.
     */
    function HSLAToStr(hsla) {
      if (!settings.alpha || hsla.a === 1 && !settings.forceAlpha) {
        return "hsl(" + hsla.h + ", " + hsla.s + "%, " + hsla.l + "%)";
      } else {
        return "hsla(" + hsla.h + ", " + hsla.s + "%, " + hsla.l + "%, " + hsla.a + ")";
      }
    }

    /**
     * Init the color picker.
     */
    function init() {
      if (document.getElementById('clr-picker')) return; //** DO NOT REMOVE: Prevent binding events multiple times
      // Render the UI
      container = undefined;
      picker = document.createElement('div');
      picker.setAttribute('id', 'clr-picker');
      picker.className = 'clr-picker';
      picker.innerHTML =
      "<input id=\"clr-color-value\" name=\"clr-color-value\" class=\"clr-color\" type=\"text\" value=\"\" spellcheck=\"false\" aria-label=\"" + settings.a11y.input + "\">" + ("<div id=\"clr-color-area\" class=\"clr-gradient\" role=\"application\" aria-label=\"" +
      settings.a11y.instruction + "\">") +
      '<div id="clr-color-marker" class="clr-marker" tabindex="0"></div>' +
      '</div>' +
      '<div class="clr-hue">' + ("<input id=\"clr-hue-slider\" name=\"clr-hue-slider\" type=\"range\" min=\"0\" max=\"360\" step=\"1\" aria-label=\"" +
      settings.a11y.hueSlider + "\">") +
      '<div id="clr-hue-marker"></div>' +
      '</div>' +
      '<div class="clr-alpha">' + ("<input id=\"clr-alpha-slider\" name=\"clr-alpha-slider\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" aria-label=\"" +
      settings.a11y.alphaSlider + "\">") +
      '<div id="clr-alpha-marker"></div>' +
      '<span></span>' +
      '</div>' +
      '<div id="clr-format" class="clr-format">' +
      '<fieldset class="clr-segmented">' + ("<legend>" +
      settings.a11y.format + "</legend>") +
      '<input id="clr-f1" type="radio" name="clr-format" value="hex">' +
      '<label for="clr-f1">Hex</label>' +
      '<input id="clr-f2" type="radio" name="clr-format" value="rgb">' +
      '<label for="clr-f2">RGB</label>' +
      '<input id="clr-f3" type="radio" name="clr-format" value="hsl">' +
      '<label for="clr-f3">HSL</label>' +
      '<span></span>' +
      '</fieldset>' +
      '</div>' +
      '<div id="clr-swatches" class="clr-swatches"></div>' + ("<button type=\"button\" id=\"clr-clear\" class=\"clr-clear\" aria-label=\"" +
      settings.a11y.clear + "\">" + settings.clearLabel + "</button>") +
      '<div id="clr-color-preview" class="clr-preview">' + ("<button type=\"button\" id=\"clr-close\" class=\"clr-close\" aria-label=\"" +
      settings.a11y.close + "\">" + settings.closeLabel + "</button>") +
      '</div>' + ("<span id=\"clr-open-label\" hidden>" +
      settings.a11y.open + "</span>") + ("<span id=\"clr-swatch-label\" hidden>" +
      settings.a11y.swatch + "</span>");

      // Append the color picker to the DOM
      document.body.appendChild(picker);

      // Reference the UI elements
      colorArea = getEl('clr-color-area');
      colorMarker = getEl('clr-color-marker');
      clearButton = getEl('clr-clear');
      closeButton = getEl('clr-close');
      colorPreview = getEl('clr-color-preview');
      colorValue = getEl('clr-color-value');
      hueSlider = getEl('clr-hue-slider');
      hueMarker = getEl('clr-hue-marker');
      alphaSlider = getEl('clr-alpha-slider');
      alphaMarker = getEl('clr-alpha-marker');

      // Bind the picker to the default selector
      bindFields(settings.el);
      wrapFields(settings.el);

      addListener(picker, 'mousedown', function (event) {
        picker.classList.remove('clr-keyboard-nav');
        event.stopPropagation();
      });

      addListener(colorArea, 'mousedown', function (event) {
        addListener(document, 'mousemove', moveMarker);
      });

      addListener(colorArea, 'touchstart', function (event) {
        document.addEventListener('touchmove', moveMarker, { passive: false });
      });

      addListener(colorMarker, 'mousedown', function (event) {
        addListener(document, 'mousemove', moveMarker);
      });

      addListener(colorMarker, 'touchstart', function (event) {
        document.addEventListener('touchmove', moveMarker, { passive: false });
      });

      addListener(colorValue, 'change', function (event) {
        var value = colorValue.value;

        if (currentEl || settings.inline) {
          var color = value === '' ? value : setColorFromStr(value);
          pickColor(color);
        }
      });

      addListener(clearButton, 'click', function (event) {
        pickColor('');
        closePicker();
      });

      addListener(closeButton, 'click', function (event) {
        pickColor();
        closePicker();
      });

      addListener(getEl('clr-format'), 'click', '.clr-format input', function (event) {
        currentFormat = event.target.value;
        updateColor();
        pickColor();
      });

      addListener(picker, 'click', '.clr-swatches button', function (event) {
        setColorFromStr(event.target.textContent);
        pickColor();

        if (settings.swatchesOnly) {
          closePicker();
        }
      });

      addListener(document, 'mouseup', function (event) {
        document.removeEventListener('mousemove', moveMarker);
      });

      addListener(document, 'touchend', function (event) {
        document.removeEventListener('touchmove', moveMarker);
      });

      addListener(document, 'mousedown', function (event) {
        keyboardNav = false;
        picker.classList.remove('clr-keyboard-nav');
        closePicker();
      });

      addListener(document, 'keydown', function (event) {
        var key = event.key;
        var target = event.target;
        var shiftKey = event.shiftKey;
        var navKeys = ['Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

        if (key === 'Escape') {
          closePicker(true);

          // Display focus rings when using the keyboard
        } else if (navKeys.includes(key)) {
          keyboardNav = true;
          picker.classList.add('clr-keyboard-nav');
        }

        // Trap the focus within the color picker while it's open
        if (key === 'Tab' && target.matches('.clr-picker *')) {
          var focusables = getFocusableElements();
          var firstFocusable = focusables.shift();
          var lastFocusable = focusables.pop();

          if (shiftKey && target === firstFocusable) {
            lastFocusable.focus();
            event.preventDefault();
          } else if (!shiftKey && target === lastFocusable) {
            firstFocusable.focus();
            event.preventDefault();
          }
        }
      });

      addListener(document, 'click', '.clr-field button', function (event) {
        // Reset any previously set per-instance options
        if (hasInstance) {
          resetVirtualInstance();
        }

        // Open the color picker
        event.target.nextElementSibling.dispatchEvent(new Event('click', { bubbles: true }));
      });

      addListener(colorMarker, 'keydown', function (event) {
        var movements = {
          ArrowUp: [0, -1],
          ArrowDown: [0, 1],
          ArrowLeft: [-1, 0],
          ArrowRight: [1, 0]
        };

        if (Object.keys(movements).includes(event.key)) {
          moveMarkerOnKeydown.apply(void 0, movements[event.key]);
          event.preventDefault();
        }
      });

      addListener(colorArea, 'click', moveMarker);
      addListener(hueSlider, 'input', setHue);
      addListener(alphaSlider, 'input', setAlpha);
    }

    /**
     * Return a list of focusable elements within the color picker.
     * @return {array} The list of focusable DOM elemnts.
     */
    function getFocusableElements() {
      var controls = Array.from(picker.querySelectorAll('input, button'));
      var focusables = controls.filter(function (node) {return !!node.offsetWidth;});

      return focusables;
    }

    /**
     * Shortcut for getElementById to optimize the minified JS.
     * @param {string} id The element id.
     * @return {object} The DOM element with the provided id.
     */
    function getEl(id) {
      return document.getElementById(id);
    }

    /**
     * Shortcut for addEventListener to optimize the minified JS.
     * @param {object} context The context to which the listener is attached.
     * @param {string} type Event type.
     * @param {(string|function)} selector Event target if delegation is used, event handler if not.
     * @param {function} [fn] Event handler if delegation is used.
     */
    function addListener(context, type, selector, fn) {
      var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;

      // Delegate event to the target of the selector
      if (typeof selector === 'string') {
        context.addEventListener(type, function (event) {
          if (matches.call(event.target, selector)) {
            fn.call(event.target, event);
          }
        });

        // If the selector is not a string then it's a function
        // in which case we need a regular event listener
      } else {
        fn = selector;
        context.addEventListener(type, fn);
      }
    }

    /**
     * Call a function only when the DOM is ready.
     * @param {function} fn The function to call.
     * @param {array} [args] Arguments to pass to the function.
     */
    function DOMReady(fn, args) {
      args = args !== undefined ? args : [];

      if (document.readyState !== 'loading') {
        fn.apply(void 0, args);
      } else {
        document.addEventListener('DOMContentLoaded', function () {
          fn.apply(void 0, args);
        });
      }
    }

    // Polyfill for Nodelist.forEach
    if (NodeList !== undefined && NodeList.prototype && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }

    //*****************************************************
    //******* NPM: Custom code starts here ****************
    //*****************************************************

    /**
     * Copy the active color to the linked input field and set the color.
     * @param {string} [color] Color value to override the active color.
     * @param {HTMLelement} [target] the element setting the color on
     */
    function setColor(color, target) {
      currentEl = target;
      oldColor = currentEl.value;
      attachVirtualInstance(target);
      currentFormat = getColorFormatFromStr(color);
      updatePickerPosition();
      setColorFromStr(color);
      pickColor();
      if (oldColor !== color) {
        currentEl.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }

    // Expose the color picker to the global scope
    var Coloris = function () {
      var methods = {
        init: init,
        set: configure,
        wrap: wrapFields,
        close: closePicker,
        setInstance: setVirtualInstance,
        setColor: setColor,
        removeInstance: removeVirtualInstance,
        updatePosition: updatePickerPosition
      };

      function Coloris(options) {
        DOMReady(function () {
          if (options) {
            if (typeof options === 'string') {
              bindFields(options);
            } else {
              configure(options);
            }
          }
        });
      }var _loop3 = function _loop3(key)

      {
        Coloris[key] = function () {for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {args[_key2] = arguments[_key2];}
          DOMReady(methods[key], args);
        };
      };for (var key in methods) {_loop3(key);}

      // handle window resize events re-aligning the panel
      DOMReady(function () {
        window.addEventListener('resize', function (event) {Coloris.updatePosition();});
        window.addEventListener('scroll', function (event) {Coloris.updatePosition();});
      });

      return Coloris;
    }();

    // Ensure init function is available not only as as a default import
    Coloris.coloris = Coloris;

    // Init the color picker when the DOM is ready
    return Coloris;

  }(window, document, Math);
}();

var _coloris = Coloris.coloris;
var _init = Coloris.init;
var _set = Coloris.set;
var _wrap = Coloris.wrap;
var _close = Coloris.close;
var _setInstance = Coloris.setInstance;
var _removeInstance = Coloris.removeInstance;
var _updatePosition = Coloris.updatePosition;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Coloris);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/app.js */ "./src/classes/app.js");


let app = new _classes_app_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxrQkFBa0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRSxlQUFlLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsd0RBQXdEO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyS0FBMks7QUFDM0ssZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSw2REFBNkQsZ0JBQWdCO0FBQzdFLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSw2REFBNkQsZ0JBQWdCO0FBQzdFLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRSxlQUFlO0FBQzFGLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsMkJBQTJCOztBQUVuRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxtQkFBbUI7QUFDbEMsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxlQUFlO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQSxvQ0FBb0MscUVBQXFFLGNBQWMsVUFBVTtBQUNqSTtBQUNBO0FBQ0EsUUFBUSwwQkFBMEI7O0FBRWxDO0FBQ0E7QUFDQSw0REFBNEQsMEJBQTBCO0FBQ3RGLDREQUE0RCwwQkFBMEI7QUFDdEYsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7VUM1dUN2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ25DO0FBQ0EsY0FBYyx1REFBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AbWVsbG93YXJlL2NvbG9yaXMvZGlzdC9jb2xvcmlzLmNzcz9kYjg4Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9jNDc1Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdGFiLmNzcz80Yzk1Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdG9kby5jc3M/MDAyMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2xhc3Nlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NsYXNzZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2xhc3Nlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NsYXNzZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2xhc3Nlcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BtZWxsb3dhcmUvY29sb3Jpcy9kaXN0L2VzbS9jb2xvcmlzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIndyYXBwZXJcIjpcImxmOGhFekE0YUtuMXJEal9QQm42XCIsXCJ0YWJzLXdyYXBwZXJcIjpcIm1FUWZ5bnF1NVJ1cWljSW9BOEs5XCIsXCJ0YWJzXCI6XCJuTlN5UEdjcnlaUXdUSXJVVmNlc1wiLFwibmV3LXRhYlwiOlwiV0NCV1JDUUV3TUw3NU9veHhaMm9cIixcIm1haW5cIjpcImFpYjBIM3RTV0M3MTBCU3k2ZGxBXCIsXCJ0b2Rvc1wiOlwidVdxdGhMQXJaWm51aEUydnRzTW9cIixcInRvZG9zLXRvcFwiOlwidTJDVTM1RWtNdTBmMnVxdUFXNExcIixcInRvZG9zLWJvdHRvbVwiOlwiZG00cFFTaHEzU2xEODhiektpTXpcIixcImluYWN0aXZlXCI6XCJJdVdBbjhEMEFDR2prUHpIVnJ2ZlwiLFwibmV3LXRvZG8tZm9ybVwiOlwiUEVCblV3d1UxV0d2akYyanUzYlZcIixcIm5hbWUtaW5wdXRcIjpcImthbzVRQ1FJVFptUXE1QVVBSGRjXCIsXCJzdWJtaXRcIjpcImMwQXk5dmFtMUt3bGJPTnd0N1p6XCIsXCJoZWFkaW5nXCI6XCJ6cHVXcGZfemttYkF5aVFYc051OVwiLFwicHJvamVjdFwiOlwiSnB4MWVXNk96aFZUaDZIaW5wc0dcIixcInRvZG9cIjpcIm9naFp2Qm1uc1NYU2hibU1TdldUXCIsXCJ0b2RvLWFyZWFcIjpcIlU1Y3EwcUltdVNkbTFOTHFCeGU2XCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1widGFiXCI6XCJGZlpIdDd5Zm1oMkFCV3hRSDA3cFwiLFwiYWN0aXZlXCI6XCJld1djM05pcmprM2Q5bXVYakJYWlwiLFwibGVmdFwiOlwiclVZUG9fUGw2WGhseDVtak5QcFFcIixcInJpZ2h0XCI6XCJZOGFHYThmUGJlNzI1ajZRSm40YlwiLFwiaWNvblwiOlwid016WUtWdlZvcFlPRGh6ZE9GdkFcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJ0b2RvXCI6XCJhdkJlazhxa1BKWWl0M2xyOEIwUVwiLFwibGVmdFwiOlwiQksxU2xyNTlHa0tlVXBnVmJfU3ZcIixcImNvbG9yXCI6XCJzVWxvMXAyaG9RWkNsV0xJUTdadVwiLFwidGl0bGVcIjpcIkVSV0tQTjhIbl8wYUZ1ZmxNWTIwXCIsXCJhY3RpdmVcIjpcImxZWEowVHF6YjB1TERKSDladndOXCIsXCJyaWdodFwiOlwicDhXSVZEX1oxWlZlWjh6VUVOVDlcIixcImlucHV0XCI6XCJoOW92Z2s3SXZfX3N5ZWZSU1dyUVwiLFwicHJvamVjdC1pbnB1dFwiOlwiSXVNdlg3b2Q4c1NGMWRyZGNXVFhcIixcImlucHV0LWNvbG9yXCI6XCJram5lY0tIUzhMYzVETGM4eE4zblwiLFwibGVmdC10b2RvXCI6XCJtcVowaFUyWTBxUm96bFV2ZDlYQlwiLFwicmlnaHQtdG9kb1wiOlwieTRLTldUdDE5bHRDSUc4Y1UzS3BcIixcImJ1dHRvblwiOlwieERsTWZ2ZlJvYzNxaWdWV2ZrcWNcIixcImRhdGVcIjpcIkxvSmJON09rV3ZfTmdLRzJiQjFHXCIsXCJkYXRlLWlucHV0XCI6XCJBWXhHOW5NeU9OOVJNUFJEUFY1ZlwiLFwiZGVsZXRlLWJ1dHRvblwiOlwiQnJ6Um5pZVBJTjFqZlVfczN3S3pcIixcInRvZG8tZGVzY3JpcHRpb25cIjpcIkFJekhLeGRmYXp5emJYTFhjeFZzXCJ9OyIsImltcG9ydCBSZW5kZXJIYW5kbGVyIGZyb20gXCIuL3JlbmRlci5qc1wiO1xyXG5pbXBvcnQgU3RvcmFnZUhhbmRsZXIgZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8uanNcIjtcclxuXHJcbmNsYXNzIFRvZG9BcHAge1xyXG4gICNyZW5kZXJIYW5kbGVyO1xyXG4gICNzdG9yYWdlSGFuZGxlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IC0xO1xyXG4gICAgdGhpcy5zZWxlY3RlZFRvZG8gPSAtMTtcclxuICAgIHRoaXMuI3N0b3JhZ2VIYW5kbGVyID0gbmV3IFN0b3JhZ2VIYW5kbGVyKHRoaXMpO1xyXG4gICAgdGhpcy4jcmVuZGVySGFuZGxlciA9IG5ldyBSZW5kZXJIYW5kbGVyKHRoaXMpO1xyXG4gICAgdGhpcy4jcmVuZGVySGFuZGxlci5pbml0aWFsUmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTdG9yYWdlKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgc2VsZWN0ZWRQcm9qZWN0OiB0aGlzLnNlbGVjdGVkUHJvamVjdCxcclxuICAgICAgc2VsZWN0ZWRUb2RvOiB0aGlzLnNlbGVjdGVkVG9kbyxcclxuICAgICAgcHJvamVjdHM6IHRoaXMucHJvamVjdHMsXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB0aGlzLiNzdG9yYWdlSGFuZGxlci51cGRhdGVTdG9yYWdlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgbG9hZEZyb21TdG9yYWdlKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBkYXRhLnNlbGVjdGVkUHJvamVjdDtcclxuICAgIHRoaXMuc2VsZWN0ZWRUb2RvID0gZGF0YS5zZWxlY3RlZFRvZG87XHJcbiAgICBkYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgIGFkZFByb2plY3QocHJvamVjdC5uYW1lLCBwcm9qZWN0LmNvbG9yLCB0aGlzLnByb2plY3RzKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5wcm9qZWN0cyk7XHJcbiAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgICAgIGFkZFRvZG9Ub1Byb2plY3QoXHJcbiAgICAgICAgICB0b2RvLnRpdGxlLFxyXG4gICAgICAgICAgdG9kby5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIHRvZG8uZGF0YSxcclxuICAgICAgICAgIHRvZG8uY29sb3IsXHJcbiAgICAgICAgICB0aGlzLnByb2plY3RzW2luZGV4XSxcclxuICAgICAgICAgIHRvZG8uY2hlY2tlZFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lID0gXCJOZXcgUHJvamVjdFwiLCBjb2xvciA9IFwiI2ZmY2MwMFwiLCBhcnJheSkge1xyXG4gICAgICBhcnJheS5wdXNoKG5ldyBQcm9qZWN0KG5hbWUsIGNvbG9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9kb1RvUHJvamVjdChcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uID0gXCJcIixcclxuICAgICAgZGF0ZSA9IFwiXCIsXHJcbiAgICAgIGNvbG9yID0gXCIjMDM0ZWZjXCIsXHJcbiAgICAgIGFycmF5LFxyXG4gICAgICBjaGVja2VkXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgY29sb3IpO1xyXG4gICAgICBpZiAoY2hlY2tlZCkgdG9kby5jaGVjaygpO1xyXG4gICAgICBhcnJheS5hZGQodG9kbyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0KG5hbWUgPSBcIk5ldyBQcm9qZWN0XCIsIGNvbG9yID0gXCIjZmZjYzAwXCIpIHtcclxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgpKTtcclxuICAgIHRoaXMudXBkYXRlU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24gPSBcIlwiLCBkYXRlID0gXCJcIiwgY29sb3IgPSBcIiMwMzRlZmNcIikge1xyXG4gICAgdGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkUHJvamVjdF0uYWRkKG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgY29sb3IpKTtcclxuICAgIHRoaXMudXBkYXRlU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRUb2RvKCkge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQcm9qZWN0ICE9PSAtMSAmJiB0aGlzLnNlbGVjdGVkVG9kbyAhPT0gLTEpXHJcbiAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRQcm9qZWN0XS50b2Rvc1t0aGlzLnNlbGVjdGVkVG9kb107XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZFByb2plY3QoKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFByb2plY3QgIT09IC0xKSByZXR1cm4gdGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkUHJvamVjdF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvQXBwO1xyXG4iLCJjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gXCJOZXcgUHJvamVjdFwiLCBjb2xvciA9IFwiI2ZmY2MwMFwiKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gIH1cclxuXHJcbiAgYWRkKHRvZG8pIHtcclxuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShpbmRleCkge1xyXG4gICAgaWYgKHRoaXMudG9kb3NbaW5kZXhdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGVsZXRlIHRoaXMudG9kb3NbaW5kZXhdO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcclxuIiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gXCIuLi9mdW5jdGlvbnMvcGFnZUxvYWQuanNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHRhYlN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3RhYi5jc3NcIjtcclxuaW1wb3J0IHRvZG9TdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy90b2RvLmNzc1wiO1xyXG5pbXBvcnQgXCJAbWVsbG93YXJlL2NvbG9yaXMvZGlzdC9jb2xvcmlzLmNzc1wiO1xyXG5pbXBvcnQgQ29sb3JpcyBmcm9tIFwiQG1lbGxvd2FyZS9jb2xvcmlzXCI7XHJcblxyXG5jbGFzcyBSZW5kZXJpbmdIYW5kbGVyIHtcclxuICAjdGFiQ29udGFpbmVyO1xyXG4gICN0b2RvQ29udGFpbmVyO1xyXG4gICNhcHA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFwcCkge1xyXG4gICAgdGhpcy4jYXBwID0gYXBwO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbFJlbmRlcigpIHtcclxuICAgIHBhZ2VMb2FkKCk7XHJcbiAgICB0aGlzLiNhZGRFdmVudExpc3RlbmVyTmV3VGFiKCk7XHJcbiAgICB0aGlzLiNhZGRFdmVudExpc3RlbmVyc05ld1RvZG8oKTtcclxuICAgIHRoaXMuI3RhYkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZXMudGFicyk7XHJcbiAgICB0aGlzLiN0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlc1tcInRvZG9zLXRvcFwiXSk7XHJcbiAgICB0aGlzLnJlbmRlckFsbCgpO1xyXG4gICAgQ29sb3Jpcy5pbml0KCk7XHJcbiAgICBDb2xvcmlzKHtcclxuICAgICAgdGhlbWVNb2RlOiBcImxpZ2h0XCIsXHJcbiAgICAgIGFscGhhOiBmYWxzZSxcclxuICAgICAgc3dhdGNoZXM6IFtcIiMwYWIzMGFcIiwgXCIjZmZjYzAwXCIsIFwiIzAzNGVmY1wiLCBcIiNkMTI2MzFcIl0sXHJcbiAgICAgIGVsOiBcIi5cIiArIHRvZG9TdHlsZXNbXCJpbnB1dC1jb2xvclwiXSxcclxuICAgICAgd3JhcDogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICNhZGRFdmVudExpc3RlbmVyTmV3VGFiKCkge1xyXG4gICAgY29uc3QgbmV3VGFiQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlc1tcIm5ldy10YWJcIl0pO1xyXG4gICAgbmV3VGFiQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuI2FwcC5hZGRQcm9qZWN0KCk7XHJcbiAgICAgIGlmICh0aGlzLiNhcHAuc2VsZWN0ZWRQcm9qZWN0ID09PSAtMSkge1xyXG4gICAgICAgIHRoaXMuI2FwcC5zZWxlY3RlZFByb2plY3QgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuI2FwcC51cGRhdGVTdG9yYWdlKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyQWxsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICNhZGRFdmVudExpc3RlbmVyc05ld1RvZG8oKSB7XHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGVzLnN1Ym1pdCk7XHJcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHRoaXMuI2FwcC5wcm9qZWN0cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGVzW1wibmFtZS1pbnB1dFwiXSk7XHJcbiAgICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgIHRoaXMuI2FwcC5hZGRUb2RvKGlucHV0LnZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiNhcHAuYWRkVG9kbyhcIk5ldyBUb2RvXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuI2FwcC51cGRhdGVTdG9yYWdlKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyVG9kb3MoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQWxsKCkge1xyXG4gICAgdGhpcy5yZW5kZXJUYWJzKCk7XHJcbiAgICB0aGlzLnJlbmRlclRvZG9zKCk7XHJcbiAgICB0aGlzLiNyZW5kZXJUb2RvU2NyZWVuKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJUYWJzKCkge1xyXG4gICAgdGhpcy4jdGFiQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB0aGlzLiNhcHAucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHRoaXMuI3JlbmRlclRhYihwcm9qZWN0LCBpbmRleCkpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZXMuc3VibWl0KTtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlc1tcIm5hbWUtaW5wdXRcIl0pO1xyXG4gICAgaWYgKHRoaXMuI2FwcC5wcm9qZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5pbmFjdGl2ZSk7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmluYWN0aXZlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5pbmFjdGl2ZSk7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoc3R5bGVzLmluYWN0aXZlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNyZW5kZXJUYWIocHJvamVjdCwgaW5kZXgpIHtcclxuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YWIuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpbmRleCk7XHJcbiAgICB0YWIuY2xhc3NOYW1lID0gdGFiU3R5bGVzLnRhYjtcclxuICAgIHRhYi5zdHlsZVtcImJvcmRlci1sZWZ0XCJdID0gXCI1cHggc29saWQgXCIgKyBwcm9qZWN0LmNvbG9yO1xyXG5cclxuICAgIGlmICh0aGlzLiNhcHAuc2VsZWN0ZWRQcm9qZWN0ICE9PSBpbmRleCkge1xyXG4gICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSh0YWJTdHlsZXMuYWN0aXZlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZXMubWFpbikuc3R5bGVbXCJib3JkZXItbGVmdFwiXSA9IFwiNXB4IHNvbGlkIFwiICsgcHJvamVjdC5jb2xvcjtcclxuICAgICAgdGFiLmNsYXNzTGlzdC5hZGQodGFiU3R5bGVzLmFjdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZWZ0LmNsYXNzTmFtZSA9IHRhYlN0eWxlcy5sZWZ0O1xyXG4gICAgdGFiLmFwcGVuZENoaWxkKGxlZnQpO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICBsZWZ0LmFwcGVuZENoaWxkKG5hbWUpO1xyXG5cclxuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJpZ2h0LmNsYXNzTmFtZSA9IHRhYlN0eWxlcy5yaWdodDtcclxuICAgIHRhYi5hcHBlbmRDaGlsZChyaWdodCk7XHJcblxyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS14bWFya1wiLCB0YWJTdHlsZXMuaWNvbik7XHJcbiAgICBpY29uLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgcmlnaHQuYXBwZW5kQ2hpbGQoaWNvbik7XHJcblxyXG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT09IFwic3ZnXCIgfHwgZS50YXJnZXQubm9kZU5hbWUgPT09IFwicGF0aFwiKSB7XHJcbiAgICAgICAgdGhpcy4jYXBwLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgZGVsZXRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRlbGV0ZWQpIHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuI2FwcC5zZWxlY3RlZFByb2plY3QgJiYgaW5kZXggPT09IHRoaXMuI2FwcC5wcm9qZWN0cy5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuI2FwcC5zZWxlY3RlZFByb2plY3QgPSBpbmRleCAtIDE7XHJcbiAgICAgICAgICB0aGlzLiNhcHAuc2VsZWN0ZWRUb2RvID0gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IHRoaXMuI2FwcC5zZWxlY3RlZFByb2plY3QpIHtcclxuICAgICAgICAgIHRoaXMuI2FwcC5zZWxlY3RlZFByb2plY3QgPSB0aGlzLiNhcHAuc2VsZWN0ZWRQcm9qZWN0IC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuI2FwcC5zZWxlY3RlZFByb2plY3QgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuI2FwcC5zZWxlY3RlZFByb2plY3QgPSBpbmRleDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiNhcHAuc2VsZWN0ZWRUb2RvID0gLTE7XHJcbiAgICAgIHRoaXMuI2FwcC51cGRhdGVTdG9yYWdlKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyQWxsKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuI3RhYkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWIpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVG9kb3MoKSB7XHJcbiAgICB0aGlzLiN0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy4jYXBwLnByb2plY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy4jYXBwLmdldFNlbGVjdGVkUHJvamVjdCgpLnRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB0aGlzLiNyZW5kZXJUb2RvKHRvZG8sIGluZGV4KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjcmVuZGVyVG9kbyh0b2RvLCBpbmRleCkge1xyXG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2RvRGl2LmNsYXNzTmFtZSA9IHRvZG9TdHlsZXMudG9kbztcclxuXHJcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxlZnQuY2xhc3NOYW1lID0gdG9kb1N0eWxlcy5sZWZ0O1xyXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChsZWZ0KTtcclxuXHJcbiAgICBjb25zdCBjb2xvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb2xvckRpdi5jbGFzc05hbWUgPSB0b2RvU3R5bGVzLmNvbG9yO1xyXG4gICAgbGVmdC5hcHBlbmRDaGlsZChjb2xvckRpdik7XHJcbiAgICBjb2xvckRpdi5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSB0b2RvLmNvbG9yO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlLmNsYXNzTmFtZSA9IHRvZG9TdHlsZXMudGl0bGU7XHJcbiAgICBsZWZ0LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcclxuXHJcbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByaWdodC5jbGFzc05hbWUgPSB0b2RvU3R5bGVzLnJpZ2h0O1xyXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChyaWdodCk7XHJcblxyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEteGxcIik7XHJcbiAgICByaWdodC5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgIGlmICh0b2RvLmlzQ2hlY2tlZCgpKSB7XHJcbiAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZShcImZhLXJlZ3VsYXJcIiwgXCJmYS1zcXVhcmUtY2hlY2tcIik7XHJcbiAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtc3F1YXJlLWNoZWNrXCIpO1xyXG4gICAgICBpY29uLnN0eWxlLmNvbG9yID0gXCIjMGFiMzBhXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1zb2xpZFwiLCBcImZhLXNxdWFyZS1jaGVja1wiKTtcclxuICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiLCBcImZhLXNxdWFyZS1jaGVja1wiLCBcImZhLXhsXCIpO1xyXG4gICAgICBpY29uLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgfVxyXG4gICAgdG9kb0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT09IFwic3ZnXCIgfHwgdGFyZ2V0Lm5vZGVOYW1lID09PSBcInBhdGhcIikge1xyXG4gICAgICAgIHRvZG8uY2hlY2soKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy4jYXBwLnNlbGVjdGVkVG9kbyA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4jYXBwLnNlbGVjdGVkVG9kbyA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuI3JlbmRlclRvZG9TY3JlZW4oKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiNhcHAudXBkYXRlU3RvcmFnZSgpO1xyXG4gICAgICB0aGlzLnJlbmRlclRvZG9zKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaW5kZXggPT09IHRoaXMuI2FwcC5zZWxlY3RlZFRvZG8pIHtcclxuICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKHRvZG9TdHlsZXMuYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLiN0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EaXYpO1xyXG4gIH1cclxuXHJcbiAgI3JlbmRlclRvZG9TY3JlZW4oKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZXMucHJvamVjdCk7XHJcbiAgICBwcm9qZWN0SW5mby5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaWYgKHRoaXMuI2FwcC5zZWxlY3RlZFByb2plY3QgIT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLiNhcHAuZ2V0U2VsZWN0ZWRQcm9qZWN0KCk7XHJcblxyXG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICBpbnB1dC5jbGFzc05hbWUgPSB0b2RvU3R5bGVzW1wiaW5wdXRcIl07XHJcbiAgICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHJcbiAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBlZGl0LmNsYXNzTmFtZSA9IHRvZG9TdHlsZXMuYnV0dG9uO1xyXG4gICAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1wZW5cIiwgXCJmYS14c1wiKTtcclxuICAgICAgZWRpdC5hcHBlbmRDaGlsZChlZGl0SWNvbik7XHJcbiAgICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKGVkaXQpO1xyXG5cclxuICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgcHJvamVjdC5uYW1lID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICB0aGlzLiNhcHAudXBkYXRlU3RvcmFnZSgpO1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJUYWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGlucHV0Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgIGlucHV0Q29sb3IuY2xhc3NOYW1lID0gdG9kb1N0eWxlc1tcImlucHV0LWNvbG9yXCJdO1xyXG4gICAgICBpbnB1dENvbG9yLnZhbHVlID0gcHJvamVjdC5jb2xvcjtcclxuICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoaW5wdXRDb2xvcik7XHJcblxyXG4gICAgICBpbnB1dENvbG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdC5jb2xvciA9IGlucHV0Q29sb3IudmFsdWU7XHJcbiAgICAgICAgdGhpcy4jYXBwLnVwZGF0ZVN0b3JhZ2UoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclRhYnMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9kb0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGVzW1widG9kb1wiXSk7XHJcbiAgICB0b2RvSW5mby5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaWYgKHRoaXMuI2FwcC5zZWxlY3RlZFRvZG8gIT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IHRvZG8gPSB0aGlzLiNhcHAuZ2V0U2VsZWN0ZWRUb2RvKCk7XHJcblxyXG4gICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbGVmdC5jbGFzc05hbWUgPSB0b2RvU3R5bGVzW1wibGVmdC10b2RvXCJdO1xyXG4gICAgICB0b2RvSW5mby5hcHBlbmRDaGlsZChsZWZ0KTtcclxuXHJcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgICAgaW5wdXQudmFsdWUgPSB0b2RvLnRpdGxlO1xyXG4gICAgICBpbnB1dC5jbGFzc05hbWUgPSB0b2RvU3R5bGVzW1wiaW5wdXRcIl07XHJcbiAgICAgIGxlZnQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIGVkaXQuY2xhc3NOYW1lID0gdG9kb1N0eWxlcy5idXR0b247XHJcbiAgICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXBlblwiLCBcImZhLXhzXCIpO1xyXG4gICAgICBlZGl0LmFwcGVuZENoaWxkKGVkaXRJY29uKTtcclxuICAgICAgbGVmdC5hcHBlbmRDaGlsZChlZGl0KTtcclxuXHJcbiAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcclxuICAgICAgICAgIHRvZG8udGl0bGUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgIHRoaXMuI2FwcC51cGRhdGVTdG9yYWdlKCk7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlclRvZG9zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGlucHV0Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgIGlucHV0Q29sb3IuY2xhc3NOYW1lID0gdG9kb1N0eWxlc1tcImlucHV0LWNvbG9yXCJdO1xyXG4gICAgICBpbnB1dENvbG9yLnZhbHVlID0gdG9kby5jb2xvcjtcclxuICAgICAgbGVmdC5hcHBlbmRDaGlsZChpbnB1dENvbG9yKTtcclxuXHJcbiAgICAgIGlucHV0Q29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0b2RvLmNvbG9yID0gaW5wdXRDb2xvci52YWx1ZTtcclxuICAgICAgICB0aGlzLiNhcHAudXBkYXRlU3RvcmFnZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyVG9kb3MoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHJpZ2h0LmNsYXNzTmFtZSA9IHRvZG9TdHlsZXNbXCJyaWdodC10b2RvXCJdO1xyXG4gICAgICB0b2RvSW5mby5hcHBlbmRDaGlsZChyaWdodCk7XHJcblxyXG4gICAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZGF0ZURpdi5jbGFzc05hbWUgPSB0b2RvU3R5bGVzLmRhdGU7XHJcbiAgICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBcImR1ZTpcIjtcclxuICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XHJcblxyXG4gICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgIGRhdGVJbnB1dC5jbGFzc05hbWUgPSB0b2RvU3R5bGVzW1wiZGF0ZS1pbnB1dFwiXTtcclxuICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xyXG4gICAgICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcbiAgICAgIGlmICh0b2RvLmRhdGUgIT09IFwiXCIpIHtcclxuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSB0b2RvLmRhdGU7XHJcbiAgICAgIH1cclxuICAgICAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jYXBwLnVwZGF0ZVN0b3JhZ2UoKTtcclxuICAgICAgICB0b2RvLmRhdGUgPSBkYXRlSW5wdXQudmFsdWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IHRvZG9TdHlsZXNbXCJkZWxldGUtYnV0dG9uXCJdO1xyXG5cclxuICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIsIFwiZmEtdHJhc2gtY2FuXCIsIFwiZmEtbGdcIik7XHJcbiAgICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcclxuXHJcbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2FwcC5nZXRTZWxlY3RlZFByb2plY3QoKS50b2Rvcy5zcGxpY2UodGhpcy4jYXBwLnNlbGVjdGVkVG9kbywgMSk7XHJcbiAgICAgICAgdGhpcy4jYXBwLnNlbGVjdGVkVG9kbyA9IC0xO1xyXG4gICAgICAgIHRoaXMuI2FwcC51cGRhdGVTdG9yYWdlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJUb2RvcygpO1xyXG4gICAgICAgIHRoaXMuI3JlbmRlclRvZG9TY3JlZW4oKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByaWdodC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZG9BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlc1tcInRvZG8tYXJlYVwiXSk7XHJcbiAgICB0b2RvQXJlYS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaWYgKHRoaXMuI2FwcC5zZWxlY3RlZFRvZG8gIT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSB0b2RvU3R5bGVzW1widG9kby1kZXNjcmlwdGlvblwiXTtcclxuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLiNhcHAuZ2V0U2VsZWN0ZWRUb2RvKCkuZGVzY3JpcHRpb247XHJcbiAgICAgIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jYXBwLnVwZGF0ZVN0b3JhZ2UoKTtcclxuICAgICAgICB0aGlzLiNhcHAuZ2V0U2VsZWN0ZWRUb2RvKCkuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRvZG9BcmVhLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmluZ0hhbmRsZXI7XHJcbiIsImNsYXNzIFN0b3JhZ2VIYW5kbGVyIHtcclxuICAjYXBwO1xyXG4gICNkYXRhO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHApIHtcclxuICAgIHRoaXMuI2FwcCA9IGFwcDtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlbGVjdGVkUHJvamVjdFwiKSkge1xyXG4gICAgICBjb25zdCBkYXRhT2JqID0ge1xyXG4gICAgICAgIHNlbGVjdGVkUHJvamVjdDogcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZWxlY3RlZFByb2plY3RcIikpLFxyXG4gICAgICAgIHNlbGVjdGVkVG9kbzogcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZWxlY3RlZFRvZG9cIikpLFxyXG4gICAgICAgIHByb2plY3RzOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhT2JqKTtcclxuICAgICAgdGhpcy4jYXBwLmxvYWRGcm9tU3RvcmFnZShkYXRhT2JqKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0b3JhZ2UoZGF0YSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZWxlY3RlZFByb2plY3RcIiwgZGF0YS5zZWxlY3RlZFByb2plY3QpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZWxlY3RlZFRvZG9cIiwgZGF0YS5zZWxlY3RlZFRvZG8pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShkYXRhLnByb2plY3RzKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlSGFuZGxlcjtcclxuIiwiY2xhc3MgVG9kbyB7XHJcbiAgY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24gPSBcIlwiLCBkYXRlID0gXCJcIiwgY29sb3IgPSBcIiMwMzRlZmNcIikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcblxyXG4gIGNoZWNrKCkge1xyXG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcclxuICB9XHJcblxyXG4gIGlzQ2hlY2tlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoZWNrZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XHJcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd3JhcHBlci5jbGFzc05hbWUgPSBzdHlsZXMud3JhcHBlcjtcclxuXHJcbiAgY29uc3QgdGFic1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhYnNXcmFwcGVyLmNsYXNzTmFtZSA9IHN0eWxlc1tcInRhYnMtd3JhcHBlclwiXTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRhYnNXcmFwcGVyKTtcclxuXHJcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFicy5jbGFzc05hbWUgPSBzdHlsZXMudGFicztcclxuICB0YWJzV3JhcHBlci5hcHBlbmRDaGlsZCh0YWJzKTtcclxuXHJcbiAgY29uc3QgbmV3VGFiQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBuZXdUYWJCdXR0b24uY2xhc3NOYW1lID0gc3R5bGVzW1wibmV3LXRhYlwiXTtcclxuICB0YWJzV3JhcHBlci5hcHBlbmRDaGlsZChuZXdUYWJCdXR0b24pO1xyXG5cclxuICBjb25zdCBjaGVja0ljb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgY2hlY2tJY29uMS5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1wbHVzXCIsIFwiZmEteGxcIik7XHJcbiAgbmV3VGFiQnV0dG9uLmFwcGVuZENoaWxkKGNoZWNrSWNvbjEpO1xyXG5cclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtYWluLmNsYXNzTmFtZSA9IHN0eWxlcy5tYWluO1xyXG4gIG1haW4uc3R5bGVbXCJib3JkZXItbGVmdFwiXSA9IFwiNXB4IHNvbGlkICNmZmNjMDBcIjtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb3MuY2xhc3NOYW1lID0gc3R5bGVzLnRvZG9zO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQodG9kb3MpO1xyXG5cclxuICBjb25zdCB0b2Rvc1RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb3NUb3AuY2xhc3NOYW1lID0gc3R5bGVzW1widG9kb3MtdG9wXCJdO1xyXG4gIHRvZG9zLmFwcGVuZENoaWxkKHRvZG9zVG9wKTtcclxuXHJcbiAgY29uc3QgdG9kb3NCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvZG9zQm90dG9tLmNsYXNzTmFtZSA9IHN0eWxlc1tcInRvZG9zLWJvdHRvbVwiXTtcclxuICB0b2Rvcy5hcHBlbmRDaGlsZCh0b2Rvc0JvdHRvbSk7XHJcblxyXG4gIGNvbnN0IG5ld1RvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgbmV3VG9kb0Zvcm0uY2xhc3NOYW1lID0gc3R5bGVzW1wibmV3LXRvZG8tZm9ybVwiXTtcclxuICB0b2Rvc0JvdHRvbS5hcHBlbmRDaGlsZChuZXdUb2RvRm9ybSk7XHJcblxyXG4gIGNvbnN0IGZvcm1MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb3JtTGVmdC5jbGFzc05hbWUgPSBzdHlsZXNbXCJmb3JtLWxlZnRcIl07XHJcbiAgbmV3VG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUxlZnQpO1xyXG5cclxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcclxuICBuYW1lSW5wdXQuY2xhc3NOYW1lID0gc3R5bGVzW1wibmFtZS1pbnB1dFwiXTtcclxuICBmb3JtTGVmdC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG5cclxuICBjb25zdCBmb3JtUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvcm1SaWdodC5jbGFzc05hbWUgPSBzdHlsZXNbXCJmb3JtLXJpZ2h0XCJdO1xyXG4gIG5ld1RvZG9Gb3JtLmFwcGVuZENoaWxkKGZvcm1SaWdodCk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XHJcbiAgc3VibWl0QnV0dG9uLmNsYXNzTmFtZSA9IHN0eWxlcy5zdWJtaXQ7XHJcbiAgZm9ybVJpZ2h0LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IGNoZWNrSWNvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICBjaGVja0ljb24yLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXBsdXNcIiwgXCJmYS14bFwiKTtcclxuICBzdWJtaXRCdXR0b24uYXBwZW5kQ2hpbGQoY2hlY2tJY29uMik7XHJcblxyXG4gIGNvbnN0IHRvZG9TY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQodG9kb1NjcmVlbik7XHJcblxyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRpbmcuY2xhc3NOYW1lID0gc3R5bGVzLmhlYWRpbmc7XHJcbiAgdG9kb1NjcmVlbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RJbmZvLmNsYXNzTmFtZSA9IHN0eWxlcy5wcm9qZWN0O1xyXG4gIGhlYWRpbmcuYXBwZW5kQ2hpbGQocHJvamVjdEluZm8pO1xyXG5cclxuICBjb25zdCB0b2RvSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb0luZm8uY2xhc3NOYW1lID0gc3R5bGVzLnRvZG87XHJcbiAgaGVhZGluZy5hcHBlbmRDaGlsZCh0b2RvSW5mbyk7XHJcblxyXG4gIGNvbnN0IHRvZG9BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0b2RvQXJlYS5jbGFzc05hbWUgPSBzdHlsZXNbXCJ0b2RvLWFyZWFcIl07XHJcbiAgdG9kb1NjcmVlbi5hcHBlbmRDaGlsZCh0b2RvQXJlYSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZDtcclxuIiwidmFyIENvbG9yaXMgPSBmdW5jdGlvbiAoKSB7XG4gIC8qIVxyXG4gICogQ29weXJpZ2h0IChjKSAyMDIxLTIwMjMgTW9tbyBCYXNzaXQuXHJcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVClcclxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tZGJhc3NpdC9Db2xvcmlzXHJcbiAgKiBWZXJzaW9uOiAwLjIxLjFcclxuICAqIE5QTTogaHR0cHM6Ly9naXRodWIuY29tL21lbGxvd2FyZS9jb2xvcmlzLW5wbVxyXG4gICovXG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCBNYXRoLCB1bmRlZmluZWQpIHtcbiAgICB2YXIgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB2YXIgY3VycmVudENvbG9yID0geyByOiAwLCBnOiAwLCBiOiAwLCBoOiAwLCBzOiAwLCB2OiAwLCBhOiAxIH07XG4gICAgdmFyIGNvbnRhaW5lcixwaWNrZXIsY29sb3JBcmVhLGNvbG9yTWFya2VyLGNvbG9yUHJldmlldyxjb2xvclZhbHVlLGNsZWFyQnV0dG9uLGNsb3NlQnV0dG9uLFxuICAgICAgaHVlU2xpZGVyLGh1ZU1hcmtlcixhbHBoYVNsaWRlcixhbHBoYU1hcmtlcixjdXJyZW50RWwsY3VycmVudEZvcm1hdCxvbGRDb2xvcixrZXlib2FyZE5hdixcbiAgICAgIGNvbG9yQXJlYURpbXMgPSB7fTtcblxuICAgIC8vIERlZmF1bHQgc2V0dGluZ3NcbiAgICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgICBlbDogJ1tkYXRhLWNvbG9yaXNdJyxcbiAgICAgIHBhcmVudDogJ2JvZHknLFxuICAgICAgdGhlbWU6ICdkZWZhdWx0JyxcbiAgICAgIHRoZW1lTW9kZTogJ2xpZ2h0JyxcbiAgICAgIHJ0bDogZmFsc2UsXG4gICAgICB3cmFwOiB0cnVlLFxuICAgICAgbWFyZ2luOiAyLFxuICAgICAgZm9ybWF0OiAnaGV4JyxcbiAgICAgIGZvcm1hdFRvZ2dsZTogZmFsc2UsXG4gICAgICBzd2F0Y2hlczogW10sXG4gICAgICBzd2F0Y2hlc09ubHk6IGZhbHNlLFxuICAgICAgYWxwaGE6IHRydWUsXG4gICAgICBmb3JjZUFscGhhOiBmYWxzZSxcbiAgICAgIGZvY3VzSW5wdXQ6IHRydWUsXG4gICAgICBzZWxlY3RJbnB1dDogZmFsc2UsXG4gICAgICBpbmxpbmU6IGZhbHNlLFxuICAgICAgZGVmYXVsdENvbG9yOiAnIzAwMDAwMCcsXG4gICAgICBjbGVhckJ1dHRvbjogZmFsc2UsXG4gICAgICBjbGVhckxhYmVsOiAnQ2xlYXInLFxuICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxuICAgICAgY2xvc2VMYWJlbDogJ0Nsb3NlJyxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHtyZXR1cm4gdW5kZWZpbmVkO30sXG4gICAgICBhMTF5OiB7XG4gICAgICAgIG9wZW46ICdPcGVuIGNvbG9yIHBpY2tlcicsXG4gICAgICAgIGNsb3NlOiAnQ2xvc2UgY29sb3IgcGlja2VyJyxcbiAgICAgICAgY2xlYXI6ICdDbGVhciB0aGUgc2VsZWN0ZWQgY29sb3InLFxuICAgICAgICBtYXJrZXI6ICdTYXR1cmF0aW9uOiB7c30uIEJyaWdodG5lc3M6IHt2fS4nLFxuICAgICAgICBodWVTbGlkZXI6ICdIdWUgc2xpZGVyJyxcbiAgICAgICAgYWxwaGFTbGlkZXI6ICdPcGFjaXR5IHNsaWRlcicsXG4gICAgICAgIGlucHV0OiAnQ29sb3IgdmFsdWUgZmllbGQnLFxuICAgICAgICBmb3JtYXQ6ICdDb2xvciBmb3JtYXQnLFxuICAgICAgICBzd2F0Y2g6ICdDb2xvciBzd2F0Y2gnLFxuICAgICAgICBpbnN0cnVjdGlvbjogJ1NhdHVyYXRpb24gYW5kIGJyaWdodG5lc3Mgc2VsZWN0b3IuIFVzZSB1cCwgZG93biwgbGVmdCBhbmQgcmlnaHQgYXJyb3cga2V5cyB0byBzZWxlY3QuJ1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBWaXJ0dWFsIGluc3RhbmNlcyBjYWNoZVxuICAgIHZhciBpbnN0YW5jZXMgPSB7fTtcbiAgICB2YXIgY3VycmVudEluc3RhbmNlSWQgPSAnJztcbiAgICB2YXIgZGVmYXVsdEluc3RhbmNlID0ge307XG4gICAgdmFyIGhhc0luc3RhbmNlID0gZmFsc2U7XG5cbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZSB0aGUgY29sb3IgcGlja2VyLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgQ29uZmlndXJhdGlvbiBvcHRpb25zLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gY29uZmlndXJlKG9wdGlvbnMpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfXZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKClcblxuICAgICAge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgJ2VsJzpcbiAgICAgICAgICAgIGJpbmRGaWVsZHMob3B0aW9ucy5lbCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy53cmFwICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICB3cmFwRmllbGRzKG9wdGlvbnMuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncGFyZW50JzpcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5wYXJlbnQpO1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGlja2VyKTtcbiAgICAgICAgICAgICAgc2V0dGluZ3MucGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG5cbiAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuYm9keSBpcyBzcGVjaWFsXG4gICAgICAgICAgICAgIGlmIChjb250YWluZXIgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3RoZW1lTW9kZSc6XG4gICAgICAgICAgICBzZXR0aW5ncy50aGVtZU1vZGUgPSBvcHRpb25zLnRoZW1lTW9kZTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRoZW1lTW9kZSA9PT0gJ2F1dG8nICYmIHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xuICAgICAgICAgICAgICBzZXR0aW5ncy50aGVtZU1vZGUgPSAnZGFyayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLy8gVGhlIGxhY2sgb2YgYSBicmVhayBzdGF0ZW1lbnQgaXMgaW50ZW50aW9uYWxcbiAgICAgICAgICBjYXNlICd0aGVtZSc6XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50aGVtZSkge1xuICAgICAgICAgICAgICBzZXR0aW5ncy50aGVtZSA9IG9wdGlvbnMudGhlbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgdGhlbWUgYW5kIGNvbG9yIHNjaGVtZVxuICAgICAgICAgICAgcGlja2VyLmNsYXNzTmFtZSA9IFwiY2xyLXBpY2tlciBjbHItXCIgKyBzZXR0aW5ncy50aGVtZSArIFwiIGNsci1cIiArIHNldHRpbmdzLnRoZW1lTW9kZTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjb2xvciBwaWNrZXIncyBwb3NpdGlvbiBpZiBpbmxpbmUgbW9kZSBpcyBpbiB1c2VcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5pbmxpbmUpIHtcbiAgICAgICAgICAgICAgdXBkYXRlUGlja2VyUG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3J0bCc6XG4gICAgICAgICAgICBzZXR0aW5ncy5ydGwgPSAhIW9wdGlvbnMucnRsO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsci1maWVsZCcpLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7cmV0dXJuIGZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2Nsci1ydGwnLCBzZXR0aW5ncy5ydGwpO30pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbWFyZ2luJzpcbiAgICAgICAgICAgIG9wdGlvbnMubWFyZ2luICo9IDE7XG4gICAgICAgICAgICBzZXR0aW5ncy5tYXJnaW4gPSAhaXNOYU4ob3B0aW9ucy5tYXJnaW4pID8gb3B0aW9ucy5tYXJnaW4gOiBzZXR0aW5ncy5tYXJnaW47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd3cmFwJzpcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmVsICYmIG9wdGlvbnMud3JhcCkge1xuICAgICAgICAgICAgICB3cmFwRmllbGRzKG9wdGlvbnMuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZm9ybWF0VG9nZ2xlJzpcbiAgICAgICAgICAgIHNldHRpbmdzLmZvcm1hdFRvZ2dsZSA9ICEhb3B0aW9ucy5mb3JtYXRUb2dnbGU7XG4gICAgICAgICAgICBnZXRFbCgnY2xyLWZvcm1hdCcpLnN0eWxlLmRpc3BsYXkgPSBzZXR0aW5ncy5mb3JtYXRUb2dnbGUgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmZvcm1hdFRvZ2dsZSkge1xuICAgICAgICAgICAgICBzZXR0aW5ncy5mb3JtYXQgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzd2F0Y2hlcyc6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnN3YXRjaGVzKSkge1xuICAgICAgICAgICAgICB2YXIgc3dhdGNoZXMgPSBbXTtcblxuICAgICAgICAgICAgICBvcHRpb25zLnN3YXRjaGVzLmZvckVhY2goZnVuY3Rpb24gKHN3YXRjaCwgaSkge1xuICAgICAgICAgICAgICAgIHN3YXRjaGVzLnB1c2goXCI8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImNsci1zd2F0Y2gtXCIgKyBpICsgXCJcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiY2xyLXN3YXRjaC1sYWJlbCBjbHItc3dhdGNoLVwiICsgaSArIFwiXFxcIiBzdHlsZT1cXFwiY29sb3I6IFwiICsgc3dhdGNoICsgXCI7XFxcIj5cIiArIHN3YXRjaCArIFwiPC9idXR0b24+XCIpO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBnZXRFbCgnY2xyLXN3YXRjaGVzJykuaW5uZXJIVE1MID0gc3dhdGNoZXMubGVuZ3RoID8gXCI8ZGl2PlwiICsgc3dhdGNoZXMuam9pbignJykgKyBcIjwvZGl2PlwiIDogJyc7XG4gICAgICAgICAgICAgIHNldHRpbmdzLnN3YXRjaGVzID0gb3B0aW9ucy5zd2F0Y2hlcy5zbGljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc3dhdGNoZXNPbmx5JzpcbiAgICAgICAgICAgIHNldHRpbmdzLnN3YXRjaGVzT25seSA9ICEhb3B0aW9ucy5zd2F0Y2hlc09ubHk7XG4gICAgICAgICAgICBwaWNrZXIuc2V0QXR0cmlidXRlKCdkYXRhLW1pbmltYWwnLCBzZXR0aW5ncy5zd2F0Y2hlc09ubHkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWxwaGEnOlxuICAgICAgICAgICAgc2V0dGluZ3MuYWxwaGEgPSAhIW9wdGlvbnMuYWxwaGE7XG4gICAgICAgICAgICBwaWNrZXIuc2V0QXR0cmlidXRlKCdkYXRhLWFscGhhJywgc2V0dGluZ3MuYWxwaGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW5saW5lJzpcbiAgICAgICAgICAgIHNldHRpbmdzLmlubGluZSA9ICEhb3B0aW9ucy5pbmxpbmU7XG4gICAgICAgICAgICBwaWNrZXIuc2V0QXR0cmlidXRlKCdkYXRhLWlubGluZScsIHNldHRpbmdzLmlubGluZSk7XG5cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5pbmxpbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGRlZmF1bHRDb2xvciA9IG9wdGlvbnMuZGVmYXVsdENvbG9yIHx8IHNldHRpbmdzLmRlZmF1bHRDb2xvcjtcblxuICAgICAgICAgICAgICBjdXJyZW50Rm9ybWF0ID0gZ2V0Q29sb3JGb3JtYXRGcm9tU3RyKGRlZmF1bHRDb2xvcik7XG4gICAgICAgICAgICAgIHVwZGF0ZVBpY2tlclBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgIHNldENvbG9yRnJvbVN0cihkZWZhdWx0Q29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2xlYXJCdXR0b24nOlxuICAgICAgICAgICAgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmNsZWFyQnV0dG9uID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jbGVhckJ1dHRvbi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIHNldHRpbmdzLmNsZWFyTGFiZWwgPSBvcHRpb25zLmNsZWFyQnV0dG9uLmxhYmVsO1xuICAgICAgICAgICAgICAgIGNsZWFyQnV0dG9uLmlubmVySFRNTCA9IHNldHRpbmdzLmNsZWFyTGFiZWw7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvcHRpb25zLmNsZWFyQnV0dG9uID0gb3B0aW9ucy5jbGVhckJ1dHRvbi5zaG93O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXR0aW5ncy5jbGVhckJ1dHRvbiA9ICEhb3B0aW9ucy5jbGVhckJ1dHRvbjtcbiAgICAgICAgICAgIGNsZWFyQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBzZXR0aW5ncy5jbGVhckJ1dHRvbiA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjbGVhckxhYmVsJzpcbiAgICAgICAgICAgIHNldHRpbmdzLmNsZWFyTGFiZWwgPSBvcHRpb25zLmNsZWFyTGFiZWw7XG4gICAgICAgICAgICBjbGVhckJ1dHRvbi5pbm5lckhUTUwgPSBzZXR0aW5ncy5jbGVhckxhYmVsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2xvc2VCdXR0b24nOlxuICAgICAgICAgICAgc2V0dGluZ3MuY2xvc2VCdXR0b24gPSAhIW9wdGlvbnMuY2xvc2VCdXR0b247XG5cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5jbG9zZUJ1dHRvbikge1xuICAgICAgICAgICAgICBwaWNrZXIuaW5zZXJ0QmVmb3JlKGNsb3NlQnV0dG9uLCBjb2xvclByZXZpZXcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sb3JQcmV2aWV3LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2xvc2VMYWJlbCc6XG4gICAgICAgICAgICBzZXR0aW5ncy5jbG9zZUxhYmVsID0gb3B0aW9ucy5jbG9zZUxhYmVsO1xuICAgICAgICAgICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gc2V0dGluZ3MuY2xvc2VMYWJlbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ExMXknOlxuICAgICAgICAgICAgdmFyIGxhYmVscyA9IG9wdGlvbnMuYTExeTtcbiAgICAgICAgICAgIHZhciB1cGRhdGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYWJlbHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGxhYmVsIGluIGxhYmVscykge1xuICAgICAgICAgICAgICAgIGlmIChsYWJlbHNbbGFiZWxdICYmIHNldHRpbmdzLmExMXlbbGFiZWxdKSB7XG4gICAgICAgICAgICAgICAgICBzZXR0aW5ncy5hMTF5W2xhYmVsXSA9IGxhYmVsc1tsYWJlbF07XG4gICAgICAgICAgICAgICAgICB1cGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgICAgIHZhciBvcGVuTGFiZWwgPSBnZXRFbCgnY2xyLW9wZW4tbGFiZWwnKTtcbiAgICAgICAgICAgICAgdmFyIHN3YXRjaExhYmVsID0gZ2V0RWwoJ2Nsci1zd2F0Y2gtbGFiZWwnKTtcblxuICAgICAgICAgICAgICBvcGVuTGFiZWwuaW5uZXJIVE1MID0gc2V0dGluZ3MuYTExeS5vcGVuO1xuICAgICAgICAgICAgICBzd2F0Y2hMYWJlbC5pbm5lckhUTUwgPSBzZXR0aW5ncy5hMTF5LnN3YXRjaDtcbiAgICAgICAgICAgICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgc2V0dGluZ3MuYTExeS5jbG9zZSk7XG4gICAgICAgICAgICAgIGNsZWFyQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHNldHRpbmdzLmExMXkuY2xlYXIpO1xuICAgICAgICAgICAgICBodWVTbGlkZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgc2V0dGluZ3MuYTExeS5odWVTbGlkZXIpO1xuICAgICAgICAgICAgICBhbHBoYVNsaWRlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBzZXR0aW5ncy5hMTF5LmFscGhhU2xpZGVyKTtcbiAgICAgICAgICAgICAgY29sb3JWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBzZXR0aW5ncy5hMTF5LmlucHV0KTtcbiAgICAgICAgICAgICAgY29sb3JBcmVhLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHNldHRpbmdzLmExMXkuaW5zdHJ1Y3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNldHRpbmdzW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgIH1cbiAgICAgIH07Zm9yICh2YXIga2V5IGluIG9wdGlvbnMpIHtfbG9vcCgpO31cbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEFkZCBvciB1cGRhdGUgYSB2aXJ0dWFsIGluc3RhbmNlLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIFRoZSBDU1Mgc2VsZWN0b3Igb2YgdGhlIGVsZW1lbnRzIHRvIHdoaWNoIHRoZSBpbnN0YW5jZSBpcyBhdHRhY2hlZC5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFBlci1pbnN0YW5jZSBvcHRpb25zIHRvIGFwcGx5LlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0VmlydHVhbEluc3RhbmNlKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaW5zdGFuY2VzW3NlbGVjdG9yXSA9IG9wdGlvbnM7XG4gICAgICAgIGhhc0luc3RhbmNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIHZpcnR1YWwgaW5zdGFuY2UuXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgVGhlIENTUyBzZWxlY3RvciBvZiB0aGUgZWxlbWVudHMgdG8gd2hpY2ggdGhlIGluc3RhbmNlIGlzIGF0dGFjaGVkLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlVmlydHVhbEluc3RhbmNlKHNlbGVjdG9yKSB7XG4gICAgICBkZWxldGUgaW5zdGFuY2VzW3NlbGVjdG9yXTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGluc3RhbmNlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGhhc0luc3RhbmNlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSBjdXJyZW50SW5zdGFuY2VJZCkge1xuICAgICAgICAgIHJlc2V0VmlydHVhbEluc3RhbmNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEF0dGFjaCBhIHZpcnR1YWwgaW5zdGFuY2UgdG8gYW4gZWxlbWVudCBpZiBpdCBtYXRjaGVzIGEgc2VsZWN0b3IuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBUYXJnZXQgZWxlbWVudCB0aGF0IHdpbGwgcmVjZWl2ZSBhIHZpcnR1YWwgaW5zdGFuY2UgaWYgYXBwbGljYWJsZS5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGF0dGFjaFZpcnR1YWxJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgICBpZiAoaGFzSW5zdGFuY2UpIHtcbiAgICAgICAgLy8gVGhlc2Ugb3B0aW9ucyBjYW4gb25seSBiZSBzZXQgZ2xvYmFsbHksIG5vdCBwZXIgaW5zdGFuY2VcbiAgICAgICAgdmFyIHVuc3VwcG9ydGVkT3B0aW9ucyA9IFsnZWwnLCAnd3JhcCcsICdydGwnLCAnaW5saW5lJywgJ2RlZmF1bHRDb2xvcicsICdhMTF5J107dmFyIF9sb29wMiA9IGZ1bmN0aW9uIF9sb29wMigpXG5cbiAgICAgICAge1xuICAgICAgICAgIHZhciBvcHRpb25zID0gaW5zdGFuY2VzW3NlbGVjdG9yXTtcblxuICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50IG1hdGNoZXMgYW4gaW5zdGFuY2UncyBDU1Mgc2VsZWN0b3JcbiAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgY3VycmVudEluc3RhbmNlSWQgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGRlZmF1bHRJbnN0YW5jZSA9IHt9O1xuXG4gICAgICAgICAgICAvLyBEZWxldGUgdW5zdXBwb3J0ZWQgb3B0aW9uc1xuICAgICAgICAgICAgdW5zdXBwb3J0ZWRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbikge3JldHVybiBkZWxldGUgb3B0aW9uc1tvcHRpb25dO30pO1xuXG4gICAgICAgICAgICAvLyBCYWNrIHVwIHRoZSBkZWZhdWx0IG9wdGlvbnMgc28gd2UgY2FuIHJlc3RvcmUgdGhlbSBsYXRlclxuICAgICAgICAgICAgZm9yICh2YXIgb3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgZGVmYXVsdEluc3RhbmNlW29wdGlvbl0gPSBBcnJheS5pc0FycmF5KHNldHRpbmdzW29wdGlvbl0pID8gc2V0dGluZ3Nbb3B0aW9uXS5zbGljZSgpIDogc2V0dGluZ3Nbb3B0aW9uXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBpbnN0YW5jZSdzIG9wdGlvbnNcbiAgICAgICAgICAgIGNvbmZpZ3VyZShvcHRpb25zKTtyZXR1cm4gXCJicmVha1wiO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9O2ZvciAodmFyIHNlbGVjdG9yIGluIGluc3RhbmNlcykge3ZhciBfcmV0ID0gX2xvb3AyKCk7aWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7fVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogUmV2ZXJ0IGFueSBwZXItaW5zdGFuY2Ugb3B0aW9ucyB0aGF0IHdlcmUgcHJldmlvdXNseSBhcHBsaWVkLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVzZXRWaXJ0dWFsSW5zdGFuY2UoKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZGVmYXVsdEluc3RhbmNlKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbmZpZ3VyZShkZWZhdWx0SW5zdGFuY2UpO1xuICAgICAgICBjdXJyZW50SW5zdGFuY2VJZCA9ICcnO1xuICAgICAgICBkZWZhdWx0SW5zdGFuY2UgPSB7fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEJpbmQgdGhlIGNvbG9yIHBpY2tlciB0byBpbnB1dCBmaWVsZHMgdGhhdCBtYXRjaCB0aGUgc2VsZWN0b3IuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgT25lIG9yIG1vcmUgc2VsZWN0b3JzIHBvaW50aW5nIHRvIGlucHV0IGZpZWxkcy5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGJpbmRGaWVsZHMoc2VsZWN0b3IpIHtcbiAgICAgIC8vIFNob3cgdGhlIGNvbG9yIHBpY2tlciBvbiBjbGljayBvbiB0aGUgaW5wdXQgZmllbGRzIHRoYXQgbWF0Y2ggdGhlIHNlbGVjdG9yXG4gICAgICBhZGRMaXN0ZW5lcihkb2N1bWVudCwgJ2NsaWNrJywgc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBTa2lwIGlmIGlubGluZSBtb2RlIGlzIGluIHVzZVxuICAgICAgICBpZiAoc2V0dGluZ3MuaW5saW5lKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwbHkgYW55IHBlci1pbnN0YW5jZSBvcHRpb25zIGZpcnN0XG4gICAgICAgIGF0dGFjaFZpcnR1YWxJbnN0YW5jZShldmVudC50YXJnZXQpO1xuXG4gICAgICAgIGN1cnJlbnRFbCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgb2xkQ29sb3IgPSBjdXJyZW50RWwudmFsdWU7XG4gICAgICAgIGN1cnJlbnRGb3JtYXQgPSBnZXRDb2xvckZvcm1hdEZyb21TdHIob2xkQ29sb3IpO1xuICAgICAgICBwaWNrZXIuY2xhc3NMaXN0LmFkZCgnY2xyLW9wZW4nKTtcblxuICAgICAgICB1cGRhdGVQaWNrZXJQb3NpdGlvbigpO1xuICAgICAgICBzZXRDb2xvckZyb21TdHIob2xkQ29sb3IpO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncy5mb2N1c0lucHV0IHx8IHNldHRpbmdzLnNlbGVjdElucHV0KSB7XG4gICAgICAgICAgY29sb3JWYWx1ZS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgY29sb3JWYWx1ZS5zZXRTZWxlY3Rpb25SYW5nZShjdXJyZW50RWwuc2VsZWN0aW9uU3RhcnQsIGN1cnJlbnRFbC5zZWxlY3Rpb25FbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLnNlbGVjdElucHV0KSB7XG4gICAgICAgICAgY29sb3JWYWx1ZS5zZWxlY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsd2F5cyBmb2N1cyB0aGUgZmlyc3QgZWxlbWVudCB3aGVuIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICAgICAgaWYgKGtleWJvYXJkTmF2IHx8IHNldHRpbmdzLnN3YXRjaGVzT25seSkge1xuICAgICAgICAgIGdldEZvY3VzYWJsZUVsZW1lbnRzKCkuc2hpZnQoKS5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJpZ2dlciBhbiBcIm9wZW5cIiBldmVudFxuICAgICAgICBjdXJyZW50RWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ29wZW4nLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgY29sb3IgcHJldmlldyBvZiB0aGUgaW5wdXQgZmllbGRzIHRoYXQgbWF0Y2ggdGhlIHNlbGVjdG9yXG4gICAgICBhZGRMaXN0ZW5lcihkb2N1bWVudCwgJ2lucHV0Jywgc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgcGFyZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIHByZXZpZXcgaWYgdGhlIGZpZWxkIGhhcyBiZWVuIHByZXZpb3VzbHkgd3JhcHBlZFxuICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnY2xyLWZpZWxkJykpIHtcbiAgICAgICAgICBwYXJlbnQuc3R5bGUuY29sb3IgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb2xvciBwaWNrZXIncyBwb3NpdGlvbiBhbmQgdGhlIGNvbG9yIGdyYWRpZW50J3Mgb2Zmc2V0XHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVQaWNrZXJQb3NpdGlvbigpIHtcbiAgICAgIGlmICghcGlja2VyIHx8ICFjdXJyZW50RWwgJiYgIXNldHRpbmdzLmlubGluZSkgcmV0dXJuOyAvLyoqIERPIE5PVCBSRU1PVkU6IGluIGNhc2UgY2FsbGVkIGJlZm9yZSBpbml0aWFsaXplZFxuICAgICAgdmFyIHBhcmVudCA9IGNvbnRhaW5lcjtcbiAgICAgIHZhciBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICB2YXIgcGlja2VyV2lkdGggPSBwaWNrZXIub2Zmc2V0V2lkdGg7XG4gICAgICB2YXIgcGlja2VySGVpZ2h0ID0gcGlja2VyLm9mZnNldEhlaWdodDtcbiAgICAgIHZhciByZXBvc2l0aW9uID0geyBsZWZ0OiBmYWxzZSwgdG9wOiBmYWxzZSB9O1xuICAgICAgdmFyIHBhcmVudFN0eWxlLCBwYXJlbnRNYXJnaW5Ub3AsIHBhcmVudEJvcmRlclRvcDtcbiAgICAgIHZhciBvZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCk7XG4gICAgICAgIHBhcmVudE1hcmdpblRvcCA9IHBhcnNlRmxvYXQocGFyZW50U3R5bGUubWFyZ2luVG9wKTtcbiAgICAgICAgcGFyZW50Qm9yZGVyVG9wID0gcGFyc2VGbG9hdChwYXJlbnRTdHlsZS5ib3JkZXJUb3BXaWR0aCk7XG5cbiAgICAgICAgb2Zmc2V0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBvZmZzZXQueSArPSBwYXJlbnRCb3JkZXJUb3AgKyBzY3JvbGxZO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNldHRpbmdzLmlubGluZSkge1xuICAgICAgICB2YXIgY29vcmRzID0gY3VycmVudEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgbGVmdCA9IGNvb3Jkcy54O1xuICAgICAgICB2YXIgdG9wID0gc2Nyb2xsWSArIGNvb3Jkcy55ICsgY29vcmRzLmhlaWdodCArIHNldHRpbmdzLm1hcmdpbjtcblxuICAgICAgICAvLyBJZiB0aGUgY29sb3IgcGlja2VyIGlzIGluc2lkZSBhIGN1c3RvbSBjb250YWluZXJcbiAgICAgICAgLy8gc2V0IHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byBpdFxuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgbGVmdCAtPSBvZmZzZXQueDtcbiAgICAgICAgICB0b3AgLT0gb2Zmc2V0Lnk7XG5cbiAgICAgICAgICBpZiAobGVmdCArIHBpY2tlcldpZHRoID4gcGFyZW50LmNsaWVudFdpZHRoKSB7XG4gICAgICAgICAgICBsZWZ0ICs9IGNvb3Jkcy53aWR0aCAtIHBpY2tlcldpZHRoO1xuICAgICAgICAgICAgcmVwb3NpdGlvbi5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodG9wICsgcGlja2VySGVpZ2h0ID4gcGFyZW50LmNsaWVudEhlaWdodCAtIHBhcmVudE1hcmdpblRvcCkge1xuICAgICAgICAgICAgaWYgKHBpY2tlckhlaWdodCArIHNldHRpbmdzLm1hcmdpbiA8PSBjb29yZHMudG9wIC0gKG9mZnNldC55IC0gc2Nyb2xsWSkpIHtcbiAgICAgICAgICAgICAgdG9wIC09IGNvb3Jkcy5oZWlnaHQgKyBwaWNrZXJIZWlnaHQgKyBzZXR0aW5ncy5tYXJnaW4gKiAyO1xuICAgICAgICAgICAgICByZXBvc2l0aW9uLnRvcCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9wICs9IHBhcmVudC5zY3JvbGxUb3A7XG5cbiAgICAgICAgICAvLyBPdGhlcndpc2Ugc2V0IHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgd2hvbGUgZG9jdW1lbnRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobGVmdCArIHBpY2tlcldpZHRoID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSB7XG4gICAgICAgICAgICBsZWZ0ICs9IGNvb3Jkcy53aWR0aCAtIHBpY2tlcldpZHRoO1xuICAgICAgICAgICAgcmVwb3NpdGlvbi5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodG9wICsgcGlja2VySGVpZ2h0IC0gc2Nyb2xsWSA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIGlmIChwaWNrZXJIZWlnaHQgKyBzZXR0aW5ncy5tYXJnaW4gPD0gY29vcmRzLnRvcCkge1xuICAgICAgICAgICAgICB0b3AgPSBzY3JvbGxZICsgY29vcmRzLnkgLSBwaWNrZXJIZWlnaHQgLSBzZXR0aW5ncy5tYXJnaW47XG4gICAgICAgICAgICAgIHJlcG9zaXRpb24udG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwaWNrZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2xyLWxlZnQnLCByZXBvc2l0aW9uLmxlZnQpO1xuICAgICAgICBwaWNrZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2xyLXRvcCcsIHJlcG9zaXRpb24udG9wKTtcbiAgICAgICAgcGlja2VyLnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xuICAgICAgICBwaWNrZXIuc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xuICAgICAgICBvZmZzZXQueCArPSBwaWNrZXIub2Zmc2V0TGVmdDtcbiAgICAgICAgb2Zmc2V0LnkgKz0gcGlja2VyLm9mZnNldFRvcDtcbiAgICAgIH1cblxuICAgICAgY29sb3JBcmVhRGltcyA9IHtcbiAgICAgICAgd2lkdGg6IGNvbG9yQXJlYS5vZmZzZXRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb2xvckFyZWEub2Zmc2V0SGVpZ2h0LFxuICAgICAgICB4OiBjb2xvckFyZWEub2Zmc2V0TGVmdCArIG9mZnNldC54LFxuICAgICAgICB5OiBjb2xvckFyZWEub2Zmc2V0VG9wICsgb2Zmc2V0LnlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBXcmFwIHRoZSBsaW5rZWQgaW5wdXQgZmllbGRzIGluIGEgZGl2IHRoYXQgYWRkcyBhIGNvbG9yIHByZXZpZXcuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgT25lIG9yIG1vcmUgc2VsZWN0b3JzIHBvaW50aW5nIHRvIGlucHV0IGZpZWxkcy5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHdyYXBGaWVsZHMoc2VsZWN0b3IpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIHZhciBwYXJlbnROb2RlID0gZmllbGQucGFyZW50Tm9kZTtcblxuICAgICAgICBpZiAoIXBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbHItZmllbGQnKSkge1xuICAgICAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdmFyIGNsYXNzZXMgPSAnY2xyLWZpZWxkJztcblxuICAgICAgICAgIGlmIChzZXR0aW5ncy5ydGwgfHwgZmllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbHItcnRsJykpIHtcbiAgICAgICAgICAgIGNsYXNzZXMgKz0gJyBjbHItcnRsJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9IFwiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiY2xyLW9wZW4tbGFiZWxcXFwiPjwvYnV0dG9uPlwiO1xuICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGZpZWxkKTtcbiAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc2VzKTtcbiAgICAgICAgICB3cmFwcGVyLnN0eWxlLmNvbG9yID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChmaWVsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ2xvc2UgdGhlIGNvbG9yIHBpY2tlci5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JldmVydF0gSWYgdHJ1ZSwgcmV2ZXJ0IHRoZSBjb2xvciB0byB0aGUgb3JpZ2luYWwgdmFsdWUuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjbG9zZVBpY2tlcihyZXZlcnQpIHtcbiAgICAgIGlmIChjdXJyZW50RWwgJiYgIXNldHRpbmdzLmlubGluZSkge1xuICAgICAgICB2YXIgcHJldkVsID0gY3VycmVudEVsO1xuXG4gICAgICAgIC8vIFJldmVydCB0aGUgY29sb3IgdG8gdGhlIG9yaWdpbmFsIHZhbHVlIGlmIG5lZWRlZFxuICAgICAgICBpZiAocmV2ZXJ0KSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHByZXZlbnQgdGhlIFwiY2hhbmdlXCIgZXZlbnQgb24gdGhlIGNvbG9yVmFsdWUgaW5wdXQgdG8gZXhlY3V0ZSBpdHMgaGFuZGxlclxuICAgICAgICAgIGN1cnJlbnRFbCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIGlmIChvbGRDb2xvciAhPT0gcHJldkVsLnZhbHVlKSB7XG4gICAgICAgICAgICBwcmV2RWwudmFsdWUgPSBvbGRDb2xvcjtcblxuICAgICAgICAgICAgLy8gVHJpZ2dlciBhbiBcImlucHV0XCIgZXZlbnQgdG8gZm9yY2UgdXBkYXRlIHRoZSB0aHVtYm5haWwgbmV4dCB0byB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgICAgIHByZXZFbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyaWdnZXIgYSBcImNoYW5nZVwiIGV2ZW50IGlmIG5lZWRlZFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsvLyBBZGQgdGhpcyB0byB0aGUgZW5kIG9mIHRoZSBldmVudCBsb29wXG4gICAgICAgICAgaWYgKG9sZENvbG9yICE9PSBwcmV2RWwudmFsdWUpIHtcbiAgICAgICAgICAgIHByZXZFbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJywgeyBidWJibGVzOiB0cnVlIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhpZGUgdGhlIHBpY2tlciBkaWFsb2dcbiAgICAgICAgcGlja2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsci1vcGVuJyk7XG5cbiAgICAgICAgLy8gUmVzZXQgYW55IHByZXZpb3VzbHkgc2V0IHBlci1pbnN0YW5jZSBvcHRpb25zXG4gICAgICAgIGlmIChoYXNJbnN0YW5jZSkge1xuICAgICAgICAgIHJlc2V0VmlydHVhbEluc3RhbmNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIGEgXCJjbG9zZVwiIGV2ZW50XG4gICAgICAgIHByZXZFbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xvc2UnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncy5mb2N1c0lucHV0KSB7XG4gICAgICAgICAgcHJldkVsLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgZXNzZW50aWFsbHkgbWFya3MgdGhlIHBpY2tlciBhcyBjbG9zZWRcbiAgICAgICAgY3VycmVudEVsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBhY3RpdmUgY29sb3IgZnJvbSBhIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgU3RyaW5nIHJlcHJlc2VudGluZyBhIGNvbG9yLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0Q29sb3JGcm9tU3RyKHN0cikge1xuICAgICAgdmFyIHJnYmEgPSBzdHJUb1JHQkEoc3RyKTtcbiAgICAgIHZhciBoc3ZhID0gUkdCQXRvSFNWQShyZ2JhKTtcblxuICAgICAgdXBkYXRlTWFya2VyQTExeUxhYmVsKGhzdmEucywgaHN2YS52KTtcbiAgICAgIHVwZGF0ZUNvbG9yKHJnYmEsIGhzdmEpO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIFVJXG4gICAgICBodWVTbGlkZXIudmFsdWUgPSBoc3ZhLmg7XG4gICAgICBwaWNrZXIuc3R5bGUuY29sb3IgPSBcImhzbChcIiArIGhzdmEuaCArIFwiLCAxMDAlLCA1MCUpXCI7XG4gICAgICBodWVNYXJrZXIuc3R5bGUubGVmdCA9IGhzdmEuaCAvIDM2MCAqIDEwMCArIFwiJVwiO1xuXG4gICAgICBjb2xvck1hcmtlci5zdHlsZS5sZWZ0ID0gY29sb3JBcmVhRGltcy53aWR0aCAqIGhzdmEucyAvIDEwMCArIFwicHhcIjtcbiAgICAgIGNvbG9yTWFya2VyLnN0eWxlLnRvcCA9IGNvbG9yQXJlYURpbXMuaGVpZ2h0IC0gY29sb3JBcmVhRGltcy5oZWlnaHQgKiBoc3ZhLnYgLyAxMDAgKyBcInB4XCI7XG5cbiAgICAgIGFscGhhU2xpZGVyLnZhbHVlID0gaHN2YS5hICogMTAwO1xuICAgICAgYWxwaGFNYXJrZXIuc3R5bGUubGVmdCA9IGhzdmEuYSAqIDEwMCArIFwiJVwiO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogR3Vlc3MgdGhlIGNvbG9yIGZvcm1hdCBmcm9tIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciBTdHJpbmcgcmVwcmVzZW50aW5nIGEgY29sb3IuXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBjb2xvciBmb3JtYXQuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRDb2xvckZvcm1hdEZyb21TdHIoc3RyKSB7XG4gICAgICB2YXIgZm9ybWF0ID0gc3RyLnN1YnN0cmluZygwLCAzKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAoZm9ybWF0ID09PSAncmdiJyB8fCBmb3JtYXQgPT09ICdoc2wnKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnaGV4JztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIENvcHkgdGhlIGFjdGl2ZSBjb2xvciB0byB0aGUgbGlua2VkIGlucHV0IGZpZWxkLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtjb2xvcl0gQ29sb3IgdmFsdWUgdG8gb3ZlcnJpZGUgdGhlIGFjdGl2ZSBjb2xvci5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHBpY2tDb2xvcihjb2xvcikge1xuICAgICAgY29sb3IgPSBjb2xvciAhPT0gdW5kZWZpbmVkID8gY29sb3IgOiBjb2xvclZhbHVlLnZhbHVlO1xuXG4gICAgICBpZiAoY3VycmVudEVsKSB7XG4gICAgICAgIGN1cnJlbnRFbC52YWx1ZSA9IGNvbG9yO1xuICAgICAgICBjdXJyZW50RWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JywgeyBidWJibGVzOiB0cnVlIH0pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmdzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHNldHRpbmdzLm9uQ2hhbmdlLmNhbGwod2luZG93LCBjb2xvciwgY3VycmVudEVsKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NvbG9yaXM6cGljaycsIHsgZGV0YWlsOiB7IGNvbG9yOiBjb2xvciwgY3VycmVudEVsOiBjdXJyZW50RWwgfSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGFjdGl2ZSBjb2xvciBiYXNlZCBvbiBhIHNwZWNpZmljIHBvaW50IGluIHRoZSBjb2xvciBncmFkaWVudC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IExlZnQgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBUb3AgcG9zaXRpb24uXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRDb2xvckF0UG9zaXRpb24oeCwgeSkge1xuICAgICAgdmFyIGhzdmEgPSB7XG4gICAgICAgIGg6IGh1ZVNsaWRlci52YWx1ZSAqIDEsXG4gICAgICAgIHM6IHggLyBjb2xvckFyZWFEaW1zLndpZHRoICogMTAwLFxuICAgICAgICB2OiAxMDAgLSB5IC8gY29sb3JBcmVhRGltcy5oZWlnaHQgKiAxMDAsXG4gICAgICAgIGE6IGFscGhhU2xpZGVyLnZhbHVlIC8gMTAwXG4gICAgICB9O1xuICAgICAgdmFyIHJnYmEgPSBIU1ZBdG9SR0JBKGhzdmEpO1xuXG4gICAgICB1cGRhdGVNYXJrZXJBMTF5TGFiZWwoaHN2YS5zLCBoc3ZhLnYpO1xuICAgICAgdXBkYXRlQ29sb3IocmdiYSwgaHN2YSk7XG4gICAgICBwaWNrQ29sb3IoKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY29sb3IgbWFya2VyJ3MgYWNjZXNzaWJpbGl0eSBsYWJlbC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzYXR1cmF0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZU1hcmtlckExMXlMYWJlbChzYXR1cmF0aW9uLCB2YWx1ZSkge1xuICAgICAgdmFyIGxhYmVsID0gc2V0dGluZ3MuYTExeS5tYXJrZXI7XG5cbiAgICAgIHNhdHVyYXRpb24gPSBzYXR1cmF0aW9uLnRvRml4ZWQoMSkgKiAxO1xuICAgICAgdmFsdWUgPSB2YWx1ZS50b0ZpeGVkKDEpICogMTtcbiAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSgne3N9Jywgc2F0dXJhdGlvbik7XG4gICAgICBsYWJlbCA9IGxhYmVsLnJlcGxhY2UoJ3t2fScsIHZhbHVlKTtcbiAgICAgIGNvbG9yTWFya2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICB9XG5cbiAgICAvL1xuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBwYWdlWCBhbmQgcGFnZVkgcG9zaXRpb25zIG9mIHRoZSBwb2ludGVyLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBNb3VzZUV2ZW50IG9yIFRvdWNoRXZlbnQgb2JqZWN0LlxyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgcGFnZVggYW5kIHBhZ2VZIHBvc2l0aW9ucy5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFBvaW50ZXJQb3NpdGlvbihldmVudCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVg6IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5wYWdlWCxcbiAgICAgICAgcGFnZVk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5wYWdlWVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIE1vdmUgdGhlIGNvbG9yIG1hcmtlciB3aGVuIGRyYWdnZWQuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIE1vdXNlRXZlbnQgb2JqZWN0LlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gbW92ZU1hcmtlcihldmVudCkge1xuICAgICAgdmFyIHBvaW50ZXIgPSBnZXRQb2ludGVyUG9zaXRpb24oZXZlbnQpO1xuICAgICAgdmFyIHggPSBwb2ludGVyLnBhZ2VYIC0gY29sb3JBcmVhRGltcy54O1xuICAgICAgdmFyIHkgPSBwb2ludGVyLnBhZ2VZIC0gY29sb3JBcmVhRGltcy55O1xuXG4gICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgIHkgKz0gY29udGFpbmVyLnNjcm9sbFRvcDtcbiAgICAgIH1cblxuICAgICAgc2V0TWFya2VyUG9zaXRpb24oeCwgeSk7XG5cbiAgICAgIC8vIFByZXZlbnQgc2Nyb2xsaW5nIHdoaWxlIGRyYWdnaW5nIHRoZSBtYXJrZXJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIE1vdmUgdGhlIGNvbG9yIG1hcmtlciB3aGVuIHRoZSBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFggVGhlIGhvcml6b250YWwgYW1vdW50IHRvIG1vdmUuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0WSBUaGUgdmVydGljYWwgYW1vdW50IHRvIG1vdmUuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtb3ZlTWFya2VyT25LZXlkb3duKG9mZnNldFgsIG9mZnNldFkpIHtcbiAgICAgIHZhciB4ID0gY29sb3JNYXJrZXIuc3R5bGUubGVmdC5yZXBsYWNlKCdweCcsICcnKSAqIDEgKyBvZmZzZXRYO1xuICAgICAgdmFyIHkgPSBjb2xvck1hcmtlci5zdHlsZS50b3AucmVwbGFjZSgncHgnLCAnJykgKiAxICsgb2Zmc2V0WTtcblxuICAgICAgc2V0TWFya2VyUG9zaXRpb24oeCwgeSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGNvbG9yIG1hcmtlcidzIHBvc2l0aW9uLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggTGVmdCBwb3NpdGlvbi5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRvcCBwb3NpdGlvbi5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldE1hcmtlclBvc2l0aW9uKHgsIHkpIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgbWFya2VyIGRvZXNuJ3QgZ28gb3V0IG9mIGJvdW5kc1xuICAgICAgeCA9IHggPCAwID8gMCA6IHggPiBjb2xvckFyZWFEaW1zLndpZHRoID8gY29sb3JBcmVhRGltcy53aWR0aCA6IHg7XG4gICAgICB5ID0geSA8IDAgPyAwIDogeSA+IGNvbG9yQXJlYURpbXMuaGVpZ2h0ID8gY29sb3JBcmVhRGltcy5oZWlnaHQgOiB5O1xuXG4gICAgICAvLyBTZXQgdGhlIHBvc2l0aW9uXG4gICAgICBjb2xvck1hcmtlci5zdHlsZS5sZWZ0ID0geCArIFwicHhcIjtcbiAgICAgIGNvbG9yTWFya2VyLnN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgY29sb3JcbiAgICAgIHNldENvbG9yQXRQb3NpdGlvbih4LCB5KTtcblxuICAgICAgLy8gTWFrZSBzdXJlIHRoZSBtYXJrZXIgaXMgZm9jdXNlZFxuICAgICAgY29sb3JNYXJrZXIuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY29sb3IgcGlja2VyJ3MgaW5wdXQgZmllbGQgYW5kIHByZXZpZXcgdGh1bWIuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmdiYSBSZWQsIGdyZWVuLCBibHVlIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2hzdmFdIEh1ZSwgc2F0dXJhdGlvbiwgdmFsdWUgYW5kIGFscGhhIHZhbHVlcy5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbG9yKHJnYmEsIGhzdmEpIHtpZiAocmdiYSA9PT0gdm9pZCAwKSB7cmdiYSA9IHt9O31pZiAoaHN2YSA9PT0gdm9pZCAwKSB7aHN2YSA9IHt9O31cbiAgICAgIHZhciBmb3JtYXQgPSBzZXR0aW5ncy5mb3JtYXQ7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiByZ2JhKSB7XG4gICAgICAgIGN1cnJlbnRDb2xvcltrZXldID0gcmdiYVtrZXldO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfa2V5IGluIGhzdmEpIHtcbiAgICAgICAgY3VycmVudENvbG9yW19rZXldID0gaHN2YVtfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGhleCA9IFJHQkFUb0hleChjdXJyZW50Q29sb3IpO1xuICAgICAgdmFyIG9wYXF1ZUhleCA9IGhleC5zdWJzdHJpbmcoMCwgNyk7XG5cbiAgICAgIGNvbG9yTWFya2VyLnN0eWxlLmNvbG9yID0gb3BhcXVlSGV4O1xuICAgICAgYWxwaGFNYXJrZXIucGFyZW50Tm9kZS5zdHlsZS5jb2xvciA9IG9wYXF1ZUhleDtcbiAgICAgIGFscGhhTWFya2VyLnN0eWxlLmNvbG9yID0gaGV4O1xuICAgICAgY29sb3JQcmV2aWV3LnN0eWxlLmNvbG9yID0gaGV4O1xuXG4gICAgICAvLyBGb3JjZSByZXBhaW50IHRoZSBjb2xvciBhbmQgYWxwaGEgZ3JhZGllbnRzIGFzIGEgd29ya2Fyb3VuZCBmb3IgYSBHb29nbGUgQ2hyb21lIGJ1Z1xuICAgICAgY29sb3JBcmVhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBjb2xvckFyZWEub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29sb3JBcmVhLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgIGFscGhhTWFya2VyLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgYWxwaGFNYXJrZXIubmV4dEVsZW1lbnRTaWJsaW5nLm9mZnNldEhlaWdodDtcbiAgICAgIGFscGhhTWFya2VyLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICAgIGlmIChmb3JtYXQgPT09ICdtaXhlZCcpIHtcbiAgICAgICAgZm9ybWF0ID0gY3VycmVudENvbG9yLmEgPT09IDEgPyAnaGV4JyA6ICdyZ2InO1xuICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdhdXRvJykge1xuICAgICAgICBmb3JtYXQgPSBjdXJyZW50Rm9ybWF0O1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgICBjYXNlICdoZXgnOlxuICAgICAgICAgIGNvbG9yVmFsdWUudmFsdWUgPSBoZXg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JnYic6XG4gICAgICAgICAgY29sb3JWYWx1ZS52YWx1ZSA9IFJHQkFUb1N0cihjdXJyZW50Q29sb3IpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdoc2wnOlxuICAgICAgICAgIGNvbG9yVmFsdWUudmFsdWUgPSBIU0xBVG9TdHIoSFNWQXRvSFNMQShjdXJyZW50Q29sb3IpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gU2VsZWN0IHRoZSBjdXJyZW50IGZvcm1hdCBpbiB0aGUgZm9ybWF0IHN3aXRjaGVyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsci1mb3JtYXQgW3ZhbHVlPVxcXCJcIiArIGZvcm1hdCArIFwiXFxcIl1cIikuY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGh1ZSB3aGVuIGl0cyBzbGlkZXIgaXMgbW92ZWQuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRIdWUoKSB7XG4gICAgICB2YXIgaHVlID0gaHVlU2xpZGVyLnZhbHVlICogMTtcbiAgICAgIHZhciB4ID0gY29sb3JNYXJrZXIuc3R5bGUubGVmdC5yZXBsYWNlKCdweCcsICcnKSAqIDE7XG4gICAgICB2YXIgeSA9IGNvbG9yTWFya2VyLnN0eWxlLnRvcC5yZXBsYWNlKCdweCcsICcnKSAqIDE7XG5cbiAgICAgIHBpY2tlci5zdHlsZS5jb2xvciA9IFwiaHNsKFwiICsgaHVlICsgXCIsIDEwMCUsIDUwJSlcIjtcbiAgICAgIGh1ZU1hcmtlci5zdHlsZS5sZWZ0ID0gaHVlIC8gMzYwICogMTAwICsgXCIlXCI7XG5cbiAgICAgIHNldENvbG9yQXRQb3NpdGlvbih4LCB5KTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgYWxwaGEgd2hlbiBpdHMgc2xpZGVyIGlzIG1vdmVkLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0QWxwaGEoKSB7XG4gICAgICB2YXIgYWxwaGEgPSBhbHBoYVNsaWRlci52YWx1ZSAvIDEwMDtcblxuICAgICAgYWxwaGFNYXJrZXIuc3R5bGUubGVmdCA9IGFscGhhICogMTAwICsgXCIlXCI7XG4gICAgICB1cGRhdGVDb2xvcih7IGE6IGFscGhhIH0pO1xuICAgICAgcGlja0NvbG9yKCk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IEhTVkEgdG8gUkdCQS5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBoc3ZhIEh1ZSwgc2F0dXJhdGlvbiwgdmFsdWUgYW5kIGFscGhhIHZhbHVlcy5cclxuICAgICAqIEByZXR1cm4ge29iamVjdH0gUmVkLCBncmVlbiwgYmx1ZSBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gSFNWQXRvUkdCQShoc3ZhKSB7XG4gICAgICB2YXIgc2F0dXJhdGlvbiA9IGhzdmEucyAvIDEwMDtcbiAgICAgIHZhciB2YWx1ZSA9IGhzdmEudiAvIDEwMDtcbiAgICAgIHZhciBjaHJvbWEgPSBzYXR1cmF0aW9uICogdmFsdWU7XG4gICAgICB2YXIgaHVlQnk2MCA9IGhzdmEuaCAvIDYwO1xuICAgICAgdmFyIHggPSBjaHJvbWEgKiAoMSAtIE1hdGguYWJzKGh1ZUJ5NjAgJSAyIC0gMSkpO1xuICAgICAgdmFyIG0gPSB2YWx1ZSAtIGNocm9tYTtcblxuICAgICAgY2hyb21hID0gY2hyb21hICsgbTtcbiAgICAgIHggPSB4ICsgbTtcblxuICAgICAgdmFyIGluZGV4ID0gTWF0aC5mbG9vcihodWVCeTYwKSAlIDY7XG4gICAgICB2YXIgcmVkID0gW2Nocm9tYSwgeCwgbSwgbSwgeCwgY2hyb21hXVtpbmRleF07XG4gICAgICB2YXIgZ3JlZW4gPSBbeCwgY2hyb21hLCBjaHJvbWEsIHgsIG0sIG1dW2luZGV4XTtcbiAgICAgIHZhciBibHVlID0gW20sIG0sIHgsIGNocm9tYSwgY2hyb21hLCB4XVtpbmRleF07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHI6IE1hdGgucm91bmQocmVkICogMjU1KSxcbiAgICAgICAgZzogTWF0aC5yb3VuZChncmVlbiAqIDI1NSksXG4gICAgICAgIGI6IE1hdGgucm91bmQoYmx1ZSAqIDI1NSksXG4gICAgICAgIGE6IGhzdmEuYVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgSFNWQSB0byBIU0xBLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGhzdmEgSHVlLCBzYXR1cmF0aW9uLCB2YWx1ZSBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBIdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcyBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gSFNWQXRvSFNMQShoc3ZhKSB7XG4gICAgICB2YXIgdmFsdWUgPSBoc3ZhLnYgLyAxMDA7XG4gICAgICB2YXIgbGlnaHRuZXNzID0gdmFsdWUgKiAoMSAtIGhzdmEucyAvIDEwMCAvIDIpO1xuICAgICAgdmFyIHNhdHVyYXRpb247XG5cbiAgICAgIGlmIChsaWdodG5lc3MgPiAwICYmIGxpZ2h0bmVzcyA8IDEpIHtcbiAgICAgICAgc2F0dXJhdGlvbiA9IE1hdGgucm91bmQoKHZhbHVlIC0gbGlnaHRuZXNzKSAvIE1hdGgubWluKGxpZ2h0bmVzcywgMSAtIGxpZ2h0bmVzcykgKiAxMDApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoOiBoc3ZhLmgsXG4gICAgICAgIHM6IHNhdHVyYXRpb24gfHwgMCxcbiAgICAgICAgbDogTWF0aC5yb3VuZChsaWdodG5lc3MgKiAxMDApLFxuICAgICAgICBhOiBoc3ZhLmFcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IFJHQkEgdG8gSFNWQS5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZ2JhIFJlZCwgZ3JlZW4sIGJsdWUgYW5kIGFscGhhIHZhbHVlcy5cclxuICAgICAqIEByZXR1cm4ge29iamVjdH0gSHVlLCBzYXR1cmF0aW9uLCB2YWx1ZSBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gUkdCQXRvSFNWQShyZ2JhKSB7XG4gICAgICB2YXIgcmVkID0gcmdiYS5yIC8gMjU1O1xuICAgICAgdmFyIGdyZWVuID0gcmdiYS5nIC8gMjU1O1xuICAgICAgdmFyIGJsdWUgPSByZ2JhLmIgLyAyNTU7XG4gICAgICB2YXIgeG1heCA9IE1hdGgubWF4KHJlZCwgZ3JlZW4sIGJsdWUpO1xuICAgICAgdmFyIHhtaW4gPSBNYXRoLm1pbihyZWQsIGdyZWVuLCBibHVlKTtcbiAgICAgIHZhciBjaHJvbWEgPSB4bWF4IC0geG1pbjtcbiAgICAgIHZhciB2YWx1ZSA9IHhtYXg7XG4gICAgICB2YXIgaHVlID0gMDtcbiAgICAgIHZhciBzYXR1cmF0aW9uID0gMDtcblxuICAgICAgaWYgKGNocm9tYSkge1xuICAgICAgICBpZiAoeG1heCA9PT0gcmVkKSB7aHVlID0gKGdyZWVuIC0gYmx1ZSkgLyBjaHJvbWE7fVxuICAgICAgICBpZiAoeG1heCA9PT0gZ3JlZW4pIHtodWUgPSAyICsgKGJsdWUgLSByZWQpIC8gY2hyb21hO31cbiAgICAgICAgaWYgKHhtYXggPT09IGJsdWUpIHtodWUgPSA0ICsgKHJlZCAtIGdyZWVuKSAvIGNocm9tYTt9XG4gICAgICAgIGlmICh4bWF4KSB7c2F0dXJhdGlvbiA9IGNocm9tYSAvIHhtYXg7fVxuICAgICAgfVxuXG4gICAgICBodWUgPSBNYXRoLmZsb29yKGh1ZSAqIDYwKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaDogaHVlIDwgMCA/IGh1ZSArIDM2MCA6IGh1ZSxcbiAgICAgICAgczogTWF0aC5yb3VuZChzYXR1cmF0aW9uICogMTAwKSxcbiAgICAgICAgdjogTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCksXG4gICAgICAgIGE6IHJnYmEuYVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFBhcnNlIGEgc3RyaW5nIHRvIFJHQkEuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyByZXByZXNlbnRpbmcgYSBjb2xvci5cclxuICAgICAqIEByZXR1cm4ge29iamVjdH0gUmVkLCBncmVlbiwgYmx1ZSBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc3RyVG9SR0JBKHN0cikge1xuICAgICAgdmFyIHJlZ2V4ID0gL14oKHJnYmEpfHJnYilbXFxEXSsoW1xcZC5dKylbXFxEXSsoW1xcZC5dKylbXFxEXSsoW1xcZC5dKylbXFxEXSo/KFtcXGQuXSt8JCkvaTtcbiAgICAgIHZhciBtYXRjaCwgcmdiYTtcblxuICAgICAgLy8gRGVmYXVsdCB0byBibGFjayBmb3IgaW52YWxpZCBjb2xvciBzdHJpbmdzXG4gICAgICBjdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuXG4gICAgICAvLyBVc2UgY2FudmFzIHRvIGNvbnZlcnQgdGhlIHN0cmluZyB0byBhIHZhbGlkIGNvbG9yIHN0cmluZ1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHN0cjtcbiAgICAgIG1hdGNoID0gcmVnZXguZXhlYyhjdHguZmlsbFN0eWxlKTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJnYmEgPSB7XG4gICAgICAgICAgcjogbWF0Y2hbM10gKiAxLFxuICAgICAgICAgIGc6IG1hdGNoWzRdICogMSxcbiAgICAgICAgICBiOiBtYXRjaFs1XSAqIDEsXG4gICAgICAgICAgYTogbWF0Y2hbNl0gKiAxXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gV29ya2Fyb3VuZCB0byBtaXRpZ2F0ZSBhIENocm9taXVtIGJ1ZyB3aGVyZSB0aGUgYWxwaGEgdmFsdWUgaXMgcm91bmRlZCBpbmNvcnJlY3RseVxuICAgICAgICByZ2JhLmEgPSArcmdiYS5hLnRvRml4ZWQoMik7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGNoID0gY3R4LmZpbGxTdHlsZS5yZXBsYWNlKCcjJywgJycpLm1hdGNoKC8uezJ9L2cpLm1hcChmdW5jdGlvbiAoaCkge3JldHVybiBwYXJzZUludChoLCAxNik7fSk7XG4gICAgICAgIHJnYmEgPSB7XG4gICAgICAgICAgcjogbWF0Y2hbMF0sXG4gICAgICAgICAgZzogbWF0Y2hbMV0sXG4gICAgICAgICAgYjogbWF0Y2hbMl0sXG4gICAgICAgICAgYTogMVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmdiYTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgUkdCQSB0byBIZXguXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmdiYSBSZWQsIGdyZWVuLCBibHVlIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IEhleCBjb2xvciBzdHJpbmcuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSR0JBVG9IZXgocmdiYSkge1xuICAgICAgdmFyIFIgPSByZ2JhLnIudG9TdHJpbmcoMTYpO1xuICAgICAgdmFyIEcgPSByZ2JhLmcudG9TdHJpbmcoMTYpO1xuICAgICAgdmFyIEIgPSByZ2JhLmIudG9TdHJpbmcoMTYpO1xuICAgICAgdmFyIEEgPSAnJztcblxuICAgICAgaWYgKHJnYmEuciA8IDE2KSB7XG4gICAgICAgIFIgPSAnMCcgKyBSO1xuICAgICAgfVxuXG4gICAgICBpZiAocmdiYS5nIDwgMTYpIHtcbiAgICAgICAgRyA9ICcwJyArIEc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZ2JhLmIgPCAxNikge1xuICAgICAgICBCID0gJzAnICsgQjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmdzLmFscGhhICYmIChyZ2JhLmEgPCAxIHx8IHNldHRpbmdzLmZvcmNlQWxwaGEpKSB7XG4gICAgICAgIHZhciBhbHBoYSA9IHJnYmEuYSAqIDI1NSB8IDA7XG4gICAgICAgIEEgPSBhbHBoYS50b1N0cmluZygxNik7XG5cbiAgICAgICAgaWYgKGFscGhhIDwgMTYpIHtcbiAgICAgICAgICBBID0gJzAnICsgQTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gJyMnICsgUiArIEcgKyBCICsgQTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgUkdCQSB2YWx1ZXMgdG8gYSBDU1MgcmdiL3JnYmEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJnYmEgUmVkLCBncmVlbiwgYmx1ZSBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBDU1MgY29sb3Igc3RyaW5nLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gUkdCQVRvU3RyKHJnYmEpIHtcbiAgICAgIGlmICghc2V0dGluZ3MuYWxwaGEgfHwgcmdiYS5hID09PSAxICYmICFzZXR0aW5ncy5mb3JjZUFscGhhKSB7XG4gICAgICAgIHJldHVybiBcInJnYihcIiArIHJnYmEuciArIFwiLCBcIiArIHJnYmEuZyArIFwiLCBcIiArIHJnYmEuYiArIFwiKVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwicmdiYShcIiArIHJnYmEuciArIFwiLCBcIiArIHJnYmEuZyArIFwiLCBcIiArIHJnYmEuYiArIFwiLCBcIiArIHJnYmEuYSArIFwiKVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBIU0xBIHZhbHVlcyB0byBhIENTUyBoc2wvaHNsYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaHNsYSBIdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcyBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBDU1MgY29sb3Igc3RyaW5nLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gSFNMQVRvU3RyKGhzbGEpIHtcbiAgICAgIGlmICghc2V0dGluZ3MuYWxwaGEgfHwgaHNsYS5hID09PSAxICYmICFzZXR0aW5ncy5mb3JjZUFscGhhKSB7XG4gICAgICAgIHJldHVybiBcImhzbChcIiArIGhzbGEuaCArIFwiLCBcIiArIGhzbGEucyArIFwiJSwgXCIgKyBoc2xhLmwgKyBcIiUpXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJoc2xhKFwiICsgaHNsYS5oICsgXCIsIFwiICsgaHNsYS5zICsgXCIlLCBcIiArIGhzbGEubCArIFwiJSwgXCIgKyBoc2xhLmEgKyBcIilcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEluaXQgdGhlIGNvbG9yIHBpY2tlci5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsci1waWNrZXInKSkgcmV0dXJuOyAvLyoqIERPIE5PVCBSRU1PVkU6IFByZXZlbnQgYmluZGluZyBldmVudHMgbXVsdGlwbGUgdGltZXNcbiAgICAgIC8vIFJlbmRlciB0aGUgVUlcbiAgICAgIGNvbnRhaW5lciA9IHVuZGVmaW5lZDtcbiAgICAgIHBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcGlja2VyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xyLXBpY2tlcicpO1xuICAgICAgcGlja2VyLmNsYXNzTmFtZSA9ICdjbHItcGlja2VyJztcbiAgICAgIHBpY2tlci5pbm5lckhUTUwgPVxuICAgICAgXCI8aW5wdXQgaWQ9XFxcImNsci1jb2xvci12YWx1ZVxcXCIgbmFtZT1cXFwiY2xyLWNvbG9yLXZhbHVlXFxcIiBjbGFzcz1cXFwiY2xyLWNvbG9yXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwiXFxcIiBzcGVsbGNoZWNrPVxcXCJmYWxzZVxcXCIgYXJpYS1sYWJlbD1cXFwiXCIgKyBzZXR0aW5ncy5hMTF5LmlucHV0ICsgXCJcXFwiPlwiICsgKFwiPGRpdiBpZD1cXFwiY2xyLWNvbG9yLWFyZWFcXFwiIGNsYXNzPVxcXCJjbHItZ3JhZGllbnRcXFwiIHJvbGU9XFxcImFwcGxpY2F0aW9uXFxcIiBhcmlhLWxhYmVsPVxcXCJcIiArXG4gICAgICBzZXR0aW5ncy5hMTF5Lmluc3RydWN0aW9uICsgXCJcXFwiPlwiKSArXG4gICAgICAnPGRpdiBpZD1cImNsci1jb2xvci1tYXJrZXJcIiBjbGFzcz1cImNsci1tYXJrZXJcIiB0YWJpbmRleD1cIjBcIj48L2Rpdj4nICtcbiAgICAgICc8L2Rpdj4nICtcbiAgICAgICc8ZGl2IGNsYXNzPVwiY2xyLWh1ZVwiPicgKyAoXCI8aW5wdXQgaWQ9XFxcImNsci1odWUtc2xpZGVyXFxcIiBuYW1lPVxcXCJjbHItaHVlLXNsaWRlclxcXCIgdHlwZT1cXFwicmFuZ2VcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIzNjBcXFwiIHN0ZXA9XFxcIjFcXFwiIGFyaWEtbGFiZWw9XFxcIlwiICtcbiAgICAgIHNldHRpbmdzLmExMXkuaHVlU2xpZGVyICsgXCJcXFwiPlwiKSArXG4gICAgICAnPGRpdiBpZD1cImNsci1odWUtbWFya2VyXCI+PC9kaXY+JyArXG4gICAgICAnPC9kaXY+JyArXG4gICAgICAnPGRpdiBjbGFzcz1cImNsci1hbHBoYVwiPicgKyAoXCI8aW5wdXQgaWQ9XFxcImNsci1hbHBoYS1zbGlkZXJcXFwiIG5hbWU9XFxcImNsci1hbHBoYS1zbGlkZXJcXFwiIHR5cGU9XFxcInJhbmdlXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMTAwXFxcIiBzdGVwPVxcXCIxXFxcIiBhcmlhLWxhYmVsPVxcXCJcIiArXG4gICAgICBzZXR0aW5ncy5hMTF5LmFscGhhU2xpZGVyICsgXCJcXFwiPlwiKSArXG4gICAgICAnPGRpdiBpZD1cImNsci1hbHBoYS1tYXJrZXJcIj48L2Rpdj4nICtcbiAgICAgICc8c3Bhbj48L3NwYW4+JyArXG4gICAgICAnPC9kaXY+JyArXG4gICAgICAnPGRpdiBpZD1cImNsci1mb3JtYXRcIiBjbGFzcz1cImNsci1mb3JtYXRcIj4nICtcbiAgICAgICc8ZmllbGRzZXQgY2xhc3M9XCJjbHItc2VnbWVudGVkXCI+JyArIChcIjxsZWdlbmQ+XCIgK1xuICAgICAgc2V0dGluZ3MuYTExeS5mb3JtYXQgKyBcIjwvbGVnZW5kPlwiKSArXG4gICAgICAnPGlucHV0IGlkPVwiY2xyLWYxXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNsci1mb3JtYXRcIiB2YWx1ZT1cImhleFwiPicgK1xuICAgICAgJzxsYWJlbCBmb3I9XCJjbHItZjFcIj5IZXg8L2xhYmVsPicgK1xuICAgICAgJzxpbnB1dCBpZD1cImNsci1mMlwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjbHItZm9ybWF0XCIgdmFsdWU9XCJyZ2JcIj4nICtcbiAgICAgICc8bGFiZWwgZm9yPVwiY2xyLWYyXCI+UkdCPC9sYWJlbD4nICtcbiAgICAgICc8aW5wdXQgaWQ9XCJjbHItZjNcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2xyLWZvcm1hdFwiIHZhbHVlPVwiaHNsXCI+JyArXG4gICAgICAnPGxhYmVsIGZvcj1cImNsci1mM1wiPkhTTDwvbGFiZWw+JyArXG4gICAgICAnPHNwYW4+PC9zcGFuPicgK1xuICAgICAgJzwvZmllbGRzZXQ+JyArXG4gICAgICAnPC9kaXY+JyArXG4gICAgICAnPGRpdiBpZD1cImNsci1zd2F0Y2hlc1wiIGNsYXNzPVwiY2xyLXN3YXRjaGVzXCI+PC9kaXY+JyArIChcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwiY2xyLWNsZWFyXFxcIiBjbGFzcz1cXFwiY2xyLWNsZWFyXFxcIiBhcmlhLWxhYmVsPVxcXCJcIiArXG4gICAgICBzZXR0aW5ncy5hMTF5LmNsZWFyICsgXCJcXFwiPlwiICsgc2V0dGluZ3MuY2xlYXJMYWJlbCArIFwiPC9idXR0b24+XCIpICtcbiAgICAgICc8ZGl2IGlkPVwiY2xyLWNvbG9yLXByZXZpZXdcIiBjbGFzcz1cImNsci1wcmV2aWV3XCI+JyArIChcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwiY2xyLWNsb3NlXFxcIiBjbGFzcz1cXFwiY2xyLWNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJcIiArXG4gICAgICBzZXR0aW5ncy5hMTF5LmNsb3NlICsgXCJcXFwiPlwiICsgc2V0dGluZ3MuY2xvc2VMYWJlbCArIFwiPC9idXR0b24+XCIpICtcbiAgICAgICc8L2Rpdj4nICsgKFwiPHNwYW4gaWQ9XFxcImNsci1vcGVuLWxhYmVsXFxcIiBoaWRkZW4+XCIgK1xuICAgICAgc2V0dGluZ3MuYTExeS5vcGVuICsgXCI8L3NwYW4+XCIpICsgKFwiPHNwYW4gaWQ9XFxcImNsci1zd2F0Y2gtbGFiZWxcXFwiIGhpZGRlbj5cIiArXG4gICAgICBzZXR0aW5ncy5hMTF5LnN3YXRjaCArIFwiPC9zcGFuPlwiKTtcblxuICAgICAgLy8gQXBwZW5kIHRoZSBjb2xvciBwaWNrZXIgdG8gdGhlIERPTVxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwaWNrZXIpO1xuXG4gICAgICAvLyBSZWZlcmVuY2UgdGhlIFVJIGVsZW1lbnRzXG4gICAgICBjb2xvckFyZWEgPSBnZXRFbCgnY2xyLWNvbG9yLWFyZWEnKTtcbiAgICAgIGNvbG9yTWFya2VyID0gZ2V0RWwoJ2Nsci1jb2xvci1tYXJrZXInKTtcbiAgICAgIGNsZWFyQnV0dG9uID0gZ2V0RWwoJ2Nsci1jbGVhcicpO1xuICAgICAgY2xvc2VCdXR0b24gPSBnZXRFbCgnY2xyLWNsb3NlJyk7XG4gICAgICBjb2xvclByZXZpZXcgPSBnZXRFbCgnY2xyLWNvbG9yLXByZXZpZXcnKTtcbiAgICAgIGNvbG9yVmFsdWUgPSBnZXRFbCgnY2xyLWNvbG9yLXZhbHVlJyk7XG4gICAgICBodWVTbGlkZXIgPSBnZXRFbCgnY2xyLWh1ZS1zbGlkZXInKTtcbiAgICAgIGh1ZU1hcmtlciA9IGdldEVsKCdjbHItaHVlLW1hcmtlcicpO1xuICAgICAgYWxwaGFTbGlkZXIgPSBnZXRFbCgnY2xyLWFscGhhLXNsaWRlcicpO1xuICAgICAgYWxwaGFNYXJrZXIgPSBnZXRFbCgnY2xyLWFscGhhLW1hcmtlcicpO1xuXG4gICAgICAvLyBCaW5kIHRoZSBwaWNrZXIgdG8gdGhlIGRlZmF1bHQgc2VsZWN0b3JcbiAgICAgIGJpbmRGaWVsZHMoc2V0dGluZ3MuZWwpO1xuICAgICAgd3JhcEZpZWxkcyhzZXR0aW5ncy5lbCk7XG5cbiAgICAgIGFkZExpc3RlbmVyKHBpY2tlciwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBwaWNrZXIuY2xhc3NMaXN0LnJlbW92ZSgnY2xyLWtleWJvYXJkLW5hdicpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGRMaXN0ZW5lcihjb2xvckFyZWEsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3ZlTWFya2VyKTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGRMaXN0ZW5lcihjb2xvckFyZWEsICd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG1vdmVNYXJrZXIsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICB9KTtcblxuICAgICAgYWRkTGlzdGVuZXIoY29sb3JNYXJrZXIsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3ZlTWFya2VyKTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGRMaXN0ZW5lcihjb2xvck1hcmtlciwgJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgbW92ZU1hcmtlciwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGRMaXN0ZW5lcihjb2xvclZhbHVlLCAnY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGNvbG9yVmFsdWUudmFsdWU7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRFbCB8fCBzZXR0aW5ncy5pbmxpbmUpIHtcbiAgICAgICAgICB2YXIgY29sb3IgPSB2YWx1ZSA9PT0gJycgPyB2YWx1ZSA6IHNldENvbG9yRnJvbVN0cih2YWx1ZSk7XG4gICAgICAgICAgcGlja0NvbG9yKGNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGNsZWFyQnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcGlja0NvbG9yKCcnKTtcbiAgICAgICAgY2xvc2VQaWNrZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGRMaXN0ZW5lcihjbG9zZUJ1dHRvbiwgJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHBpY2tDb2xvcigpO1xuICAgICAgICBjbG9zZVBpY2tlcigpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGdldEVsKCdjbHItZm9ybWF0JyksICdjbGljaycsICcuY2xyLWZvcm1hdCBpbnB1dCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjdXJyZW50Rm9ybWF0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB1cGRhdGVDb2xvcigpO1xuICAgICAgICBwaWNrQ29sb3IoKTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGRMaXN0ZW5lcihwaWNrZXIsICdjbGljaycsICcuY2xyLXN3YXRjaGVzIGJ1dHRvbicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBzZXRDb2xvckZyb21TdHIoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgcGlja0NvbG9yKCk7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLnN3YXRjaGVzT25seSkge1xuICAgICAgICAgIGNsb3NlUGlja2VyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBhZGRMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNldXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZU1hcmtlcik7XG4gICAgICB9KTtcblxuICAgICAgYWRkTGlzdGVuZXIoZG9jdW1lbnQsICd0b3VjaGVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBtb3ZlTWFya2VyKTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGRMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBrZXlib2FyZE5hdiA9IGZhbHNlO1xuICAgICAgICBwaWNrZXIuY2xhc3NMaXN0LnJlbW92ZSgnY2xyLWtleWJvYXJkLW5hdicpO1xuICAgICAgICBjbG9zZVBpY2tlcigpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGRvY3VtZW50LCAna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIga2V5ID0gZXZlbnQua2V5O1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcbiAgICAgICAgdmFyIG5hdktleXMgPSBbJ1RhYicsICdBcnJvd1VwJywgJ0Fycm93RG93bicsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCddO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgY2xvc2VQaWNrZXIodHJ1ZSk7XG5cbiAgICAgICAgICAvLyBEaXNwbGF5IGZvY3VzIHJpbmdzIHdoZW4gdXNpbmcgdGhlIGtleWJvYXJkXG4gICAgICAgIH0gZWxzZSBpZiAobmF2S2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAga2V5Ym9hcmROYXYgPSB0cnVlO1xuICAgICAgICAgIHBpY2tlci5jbGFzc0xpc3QuYWRkKCdjbHIta2V5Ym9hcmQtbmF2Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmFwIHRoZSBmb2N1cyB3aXRoaW4gdGhlIGNvbG9yIHBpY2tlciB3aGlsZSBpdCdzIG9wZW5cbiAgICAgICAgaWYgKGtleSA9PT0gJ1RhYicgJiYgdGFyZ2V0Lm1hdGNoZXMoJy5jbHItcGlja2VyIConKSkge1xuICAgICAgICAgIHZhciBmb2N1c2FibGVzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKTtcbiAgICAgICAgICB2YXIgZmlyc3RGb2N1c2FibGUgPSBmb2N1c2FibGVzLnNoaWZ0KCk7XG4gICAgICAgICAgdmFyIGxhc3RGb2N1c2FibGUgPSBmb2N1c2FibGVzLnBvcCgpO1xuXG4gICAgICAgICAgaWYgKHNoaWZ0S2V5ICYmIHRhcmdldCA9PT0gZmlyc3RGb2N1c2FibGUpIHtcbiAgICAgICAgICAgIGxhc3RGb2N1c2FibGUuZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfSBlbHNlIGlmICghc2hpZnRLZXkgJiYgdGFyZ2V0ID09PSBsYXN0Rm9jdXNhYmxlKSB7XG4gICAgICAgICAgICBmaXJzdEZvY3VzYWJsZS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBhZGRMaXN0ZW5lcihkb2N1bWVudCwgJ2NsaWNrJywgJy5jbHItZmllbGQgYnV0dG9uJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIFJlc2V0IGFueSBwcmV2aW91c2x5IHNldCBwZXItaW5zdGFuY2Ugb3B0aW9uc1xuICAgICAgICBpZiAoaGFzSW5zdGFuY2UpIHtcbiAgICAgICAgICByZXNldFZpcnR1YWxJbnN0YW5jZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT3BlbiB0aGUgY29sb3IgcGlja2VyXG4gICAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJywgeyBidWJibGVzOiB0cnVlIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGRMaXN0ZW5lcihjb2xvck1hcmtlciwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIG1vdmVtZW50cyA9IHtcbiAgICAgICAgICBBcnJvd1VwOiBbMCwgLTFdLFxuICAgICAgICAgIEFycm93RG93bjogWzAsIDFdLFxuICAgICAgICAgIEFycm93TGVmdDogWy0xLCAwXSxcbiAgICAgICAgICBBcnJvd1JpZ2h0OiBbMSwgMF1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMobW92ZW1lbnRzKS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICAgICAgbW92ZU1hcmtlck9uS2V5ZG93bi5hcHBseSh2b2lkIDAsIG1vdmVtZW50c1tldmVudC5rZXldKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgYWRkTGlzdGVuZXIoY29sb3JBcmVhLCAnY2xpY2snLCBtb3ZlTWFya2VyKTtcbiAgICAgIGFkZExpc3RlbmVyKGh1ZVNsaWRlciwgJ2lucHV0Jywgc2V0SHVlKTtcbiAgICAgIGFkZExpc3RlbmVyKGFscGhhU2xpZGVyLCAnaW5wdXQnLCBzZXRBbHBoYSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSBsaXN0IG9mIGZvY3VzYWJsZSBlbGVtZW50cyB3aXRoaW4gdGhlIGNvbG9yIHBpY2tlci5cclxuICAgICAqIEByZXR1cm4ge2FycmF5fSBUaGUgbGlzdCBvZiBmb2N1c2FibGUgRE9NIGVsZW1udHMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRGb2N1c2FibGVFbGVtZW50cygpIHtcbiAgICAgIHZhciBjb250cm9scyA9IEFycmF5LmZyb20ocGlja2VyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBidXR0b24nKSk7XG4gICAgICB2YXIgZm9jdXNhYmxlcyA9IGNvbnRyb2xzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge3JldHVybiAhIW5vZGUub2Zmc2V0V2lkdGg7fSk7XG5cbiAgICAgIHJldHVybiBmb2N1c2FibGVzO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2hvcnRjdXQgZm9yIGdldEVsZW1lbnRCeUlkIHRvIG9wdGltaXplIHRoZSBtaW5pZmllZCBKUy5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgZWxlbWVudCBpZC5cclxuICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIERPTSBlbGVtZW50IHdpdGggdGhlIHByb3ZpZGVkIGlkLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0RWwoaWQpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTaG9ydGN1dCBmb3IgYWRkRXZlbnRMaXN0ZW5lciB0byBvcHRpbWl6ZSB0aGUgbWluaWZpZWQgSlMuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgY29udGV4dCB0byB3aGljaCB0aGUgbGlzdGVuZXIgaXMgYXR0YWNoZWQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBFdmVudCB0eXBlLlxyXG4gICAgICogQHBhcmFtIHsoc3RyaW5nfGZ1bmN0aW9uKX0gc2VsZWN0b3IgRXZlbnQgdGFyZ2V0IGlmIGRlbGVnYXRpb24gaXMgdXNlZCwgZXZlbnQgaGFuZGxlciBpZiBub3QuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZm5dIEV2ZW50IGhhbmRsZXIgaWYgZGVsZWdhdGlvbiBpcyB1c2VkLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoY29udGV4dCwgdHlwZSwgc2VsZWN0b3IsIGZuKSB7XG4gICAgICB2YXIgbWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICAgIC8vIERlbGVnYXRlIGV2ZW50IHRvIHRoZSB0YXJnZXQgb2YgdGhlIHNlbGVjdG9yXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb250ZXh0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChldmVudC50YXJnZXQsIHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgZm4uY2FsbChldmVudC50YXJnZXQsIGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIElmIHRoZSBzZWxlY3RvciBpcyBub3QgYSBzdHJpbmcgdGhlbiBpdCdzIGEgZnVuY3Rpb25cbiAgICAgICAgLy8gaW4gd2hpY2ggY2FzZSB3ZSBuZWVkIGEgcmVndWxhciBldmVudCBsaXN0ZW5lclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4gPSBzZWxlY3RvcjtcbiAgICAgICAgY29udGV4dC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIENhbGwgYSBmdW5jdGlvbiBvbmx5IHdoZW4gdGhlIERPTSBpcyByZWFkeS5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsLlxyXG4gICAgICogQHBhcmFtIHthcnJheX0gW2FyZ3NdIEFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBmdW5jdGlvbi5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIERPTVJlYWR5KGZuLCBhcmdzKSB7XG4gICAgICBhcmdzID0gYXJncyAhPT0gdW5kZWZpbmVkID8gYXJncyA6IFtdO1xuXG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBvbHlmaWxsIGZvciBOb2RlbGlzdC5mb3JFYWNoXG4gICAgaWYgKE5vZGVMaXN0ICE9PSB1bmRlZmluZWQgJiYgTm9kZUxpc3QucHJvdG90eXBlICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgICAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbiAgICB9XG5cbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy8qKioqKioqIE5QTTogQ3VzdG9tIGNvZGUgc3RhcnRzIGhlcmUgKioqKioqKioqKioqKioqKlxuICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8qKlxyXG4gICAgICogQ29weSB0aGUgYWN0aXZlIGNvbG9yIHRvIHRoZSBsaW5rZWQgaW5wdXQgZmllbGQgYW5kIHNldCB0aGUgY29sb3IuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvbG9yXSBDb2xvciB2YWx1ZSB0byBvdmVycmlkZSB0aGUgYWN0aXZlIGNvbG9yLlxyXG4gICAgICogQHBhcmFtIHtIVE1MZWxlbWVudH0gW3RhcmdldF0gdGhlIGVsZW1lbnQgc2V0dGluZyB0aGUgY29sb3Igb25cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldENvbG9yKGNvbG9yLCB0YXJnZXQpIHtcbiAgICAgIGN1cnJlbnRFbCA9IHRhcmdldDtcbiAgICAgIG9sZENvbG9yID0gY3VycmVudEVsLnZhbHVlO1xuICAgICAgYXR0YWNoVmlydHVhbEluc3RhbmNlKHRhcmdldCk7XG4gICAgICBjdXJyZW50Rm9ybWF0ID0gZ2V0Q29sb3JGb3JtYXRGcm9tU3RyKGNvbG9yKTtcbiAgICAgIHVwZGF0ZVBpY2tlclBvc2l0aW9uKCk7XG4gICAgICBzZXRDb2xvckZyb21TdHIoY29sb3IpO1xuICAgICAgcGlja0NvbG9yKCk7XG4gICAgICBpZiAob2xkQ29sb3IgIT09IGNvbG9yKSB7XG4gICAgICAgIGN1cnJlbnRFbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJywgeyBidWJibGVzOiB0cnVlIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHBvc2UgdGhlIGNvbG9yIHBpY2tlciB0byB0aGUgZ2xvYmFsIHNjb3BlXG4gICAgdmFyIENvbG9yaXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbWV0aG9kcyA9IHtcbiAgICAgICAgaW5pdDogaW5pdCxcbiAgICAgICAgc2V0OiBjb25maWd1cmUsXG4gICAgICAgIHdyYXA6IHdyYXBGaWVsZHMsXG4gICAgICAgIGNsb3NlOiBjbG9zZVBpY2tlcixcbiAgICAgICAgc2V0SW5zdGFuY2U6IHNldFZpcnR1YWxJbnN0YW5jZSxcbiAgICAgICAgc2V0Q29sb3I6IHNldENvbG9yLFxuICAgICAgICByZW1vdmVJbnN0YW5jZTogcmVtb3ZlVmlydHVhbEluc3RhbmNlLFxuICAgICAgICB1cGRhdGVQb3NpdGlvbjogdXBkYXRlUGlja2VyUG9zaXRpb25cbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIENvbG9yaXMob3B0aW9ucykge1xuICAgICAgICBET01SZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgYmluZEZpZWxkcyhvcHRpb25zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyZShvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfXZhciBfbG9vcDMgPSBmdW5jdGlvbiBfbG9vcDMoa2V5KVxuXG4gICAgICB7XG4gICAgICAgIENvbG9yaXNba2V5XSA9IGZ1bmN0aW9uICgpIHtmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW47IF9rZXkyKyspIHthcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07fVxuICAgICAgICAgIERPTVJlYWR5KG1ldGhvZHNba2V5XSwgYXJncyk7XG4gICAgICAgIH07XG4gICAgICB9O2ZvciAodmFyIGtleSBpbiBtZXRob2RzKSB7X2xvb3AzKGtleSk7fVxuXG4gICAgICAvLyBoYW5kbGUgd2luZG93IHJlc2l6ZSBldmVudHMgcmUtYWxpZ25pbmcgdGhlIHBhbmVsXG4gICAgICBET01SZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoZXZlbnQpIHtDb2xvcmlzLnVwZGF0ZVBvc2l0aW9uKCk7fSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoZXZlbnQpIHtDb2xvcmlzLnVwZGF0ZVBvc2l0aW9uKCk7fSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIENvbG9yaXM7XG4gICAgfSgpO1xuXG4gICAgLy8gRW5zdXJlIGluaXQgZnVuY3Rpb24gaXMgYXZhaWxhYmxlIG5vdCBvbmx5IGFzIGFzIGEgZGVmYXVsdCBpbXBvcnRcbiAgICBDb2xvcmlzLmNvbG9yaXMgPSBDb2xvcmlzO1xuXG4gICAgLy8gSW5pdCB0aGUgY29sb3IgcGlja2VyIHdoZW4gdGhlIERPTSBpcyByZWFkeVxuICAgIHJldHVybiBDb2xvcmlzO1xuXG4gIH0od2luZG93LCBkb2N1bWVudCwgTWF0aCk7XG59KCk7XG5cbnZhciBfY29sb3JpcyA9IENvbG9yaXMuY29sb3JpcztcbnZhciBfaW5pdCA9IENvbG9yaXMuaW5pdDtcbnZhciBfc2V0ID0gQ29sb3Jpcy5zZXQ7XG52YXIgX3dyYXAgPSBDb2xvcmlzLndyYXA7XG52YXIgX2Nsb3NlID0gQ29sb3Jpcy5jbG9zZTtcbnZhciBfc2V0SW5zdGFuY2UgPSBDb2xvcmlzLnNldEluc3RhbmNlO1xudmFyIF9yZW1vdmVJbnN0YW5jZSA9IENvbG9yaXMucmVtb3ZlSW5zdGFuY2U7XG52YXIgX3VwZGF0ZVBvc2l0aW9uID0gQ29sb3Jpcy51cGRhdGVQb3NpdGlvbjtcbmV4cG9ydCBkZWZhdWx0IENvbG9yaXM7XG5leHBvcnQge1xuICBfY29sb3JpcyBhcyBjb2xvcmlzLFxuICBfY2xvc2UgYXMgY2xvc2UsXG4gIF9pbml0IGFzIGluaXQsXG4gIF9zZXQgYXMgc2V0LFxuICBfd3JhcCBhcyB3cmFwLFxuICBfc2V0SW5zdGFuY2UgYXMgc2V0SW5zdGFuY2UsXG4gIF9yZW1vdmVJbnN0YW5jZSBhcyByZW1vdmVJbnN0YW5jZSxcbiAgX3VwZGF0ZVBvc2l0aW9uIGFzIHVwZGF0ZVBvc2l0aW9uIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXBwIGZyb20gXCIuL2NsYXNzZXMvYXBwLmpzXCI7XHJcblxyXG5sZXQgYXBwID0gbmV3IEFwcCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=