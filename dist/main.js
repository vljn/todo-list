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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"lf8hEzA4aKn1rDj_PBn6","tabs-wrapper":"mEQfynqu5RuqicIoA8K9","tabs":"nNSyPGcryZQwTIrUVces","new-tab":"WCBWRCQEwML75OoxxZ2o","main":"aib0H3tSWC710BSy6dlA","todos":"uWqthLArZZnuhE2vtsMo","todos-top":"u2CU35EkMu0f2uquAW4L","todos-bottom":"dm4pQShq3SlD88bzKiMz","inactive":"IuWAn8D0ACGjkPzHVrvf","new-todo-form":"PEBnUwwU1WGvjF2ju3bV","name-input":"kao5QCQITZmQq5AUAHdc","submit":"c0Ay9vam1KwlbONwt7Zz","heading":"zpuWpf_zkmbAyiQXsNu9","project":"Jpx1eW6OzhVTh6HinpsG","todo":"oghZvBmnsSXShbmMSvWT"});

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"todo":"avBek8qkPJYit3lr8B0Q","left":"BK1Slr59GkKeUpgVb_Sv","color":"sUlo1p2hoQZClWLIQ7Zu","active":"lYXJ0Tqzb0uLDJH9ZvwN","right":"p8WIVD_Z1ZVeZ8zUENT9","project-input":"IuMvX7od8sSF1drdcWTX","button":"xDlMfvfRoc3qigVWfkqc","edit":"TA3xoEtA0ZErk9Aw4l6V","todo-description":"AIzHKxdfazyzbXLXcxVs"});

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
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/classes/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/classes/todo.js");




class TodoApp {
  #renderHandler;

  constructor() {
    this.projects = [new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]("My Todos")];
    this.selectedProject = 0;
    this.selectedTodo = -1;

    this.addTodo("My Todo 1", "lorem ipsum", new Date(2023, 7, 28));
    this.addTodo("My Todo 2", "lorem ipsum", new Date(2023, 7, 29));
    this.addTodo("My Todo 3", "lorem ipsum", new Date(2023, 7, 30));
    this.#renderHandler = new _render_js__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    this.#renderHandler.initialRender();
  }

  addProject(name = "New Project", color = "#ffcc00") {
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]());
  }

  addTodo(title, description = "", date = "", color = "#034efc") {
    this.projects[this.selectedProject].add(new _todo_js__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, date, color));
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
  }

  #addEventListenerNewTab() {
    const newTabButton = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"]["new-tab"]);
    newTabButton.addEventListener("click", () => {
      this.#app.addProject();
      if (this.#app.selectedProject === -1) {
        this.#app.selectedProject = 0;
      }
      this.renderAll();
    });
  }

  #addEventListenersNewTodo() {
    if (this.#app.projects.length === 0) return;
    const submitButton = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].submit);
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      const input = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"]["name-input"]);
      if (input.value !== "") {
        this.#app.addTodo(input.value);
      } else {
        this.#app.addTodo("New Todo");
      }
      this.renderAll();
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
      document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].main).style["border-left"] = "5px solid " + project.color;
    } else {
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
      this.renderAll();
    });
    this.#tabContainer.appendChild(tab);
  }

  renderTodos() {
    this.#todoContainer.innerHTML = "";
    if (this.#app.projects.length > 0) {
      this.#app.projects[this.#app.selectedProject].todos.forEach((todo, index) =>
        this.#renderTodo(todo, index)
      );
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
      }
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
    console.log(this.#app.selectedProject);
    if (this.#app.selectedProject !== -1) {
      const project = this.#app.projects[this.#app.selectedProject];

      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.value = project.name;
      input.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"]["project-input"];
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
          this.renderTabs();
        }
      });

      const color = document.createElement("button");
      color.className = _styles_todo_css__WEBPACK_IMPORTED_MODULE_3__["default"].button;
      const colorIcon = document.createElement("i");
      colorIcon.classList.add("fa-solid", "fa-palette", "fa-xs");
      color.appendChild(colorIcon);
      projectInfo.appendChild(color);

      color.addEventListener("click", () => {
        _melloware_coloris__WEBPACK_IMPORTED_MODULE_5__["default"].init();
        (0,_melloware_coloris__WEBPACK_IMPORTED_MODULE_5__["default"])({ el: "#coloris" });
      });
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderingHandler);


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
  #checked = false;

  constructor(title, description = "", date = "", color = "#034efc") {
    this.title = title;
    this.description = description;
    this.date = date;
    this.color = color;
  }

  check() {
    this.#checked = !this.#checked;
  }

  isChecked() {
    return this.#checked;
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
  todoScreen.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"]["todo-screen"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSx3REFBd0Q7QUFDdEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJLQUEySztBQUMzSyxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMEJBQTBCO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGOztBQUV6RjtBQUNBOztBQUVB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QUN0RixPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7OztVQzV1Q3ZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUM7QUFDbkM7QUFDQSxjQUFjLHVEQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BtZWxsb3dhcmUvY29sb3Jpcy9kaXN0L2NvbG9yaXMuY3NzP2RiODgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2M0NzUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy90YWIuY3NzPzRjOTUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy90b2RvLmNzcz8wMDIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jbGFzc2VzL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2xhc3Nlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jbGFzc2VzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2xhc3Nlcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BtZWxsb3dhcmUvY29sb3Jpcy9kaXN0L2VzbS9jb2xvcmlzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIndyYXBwZXJcIjpcImxmOGhFekE0YUtuMXJEal9QQm42XCIsXCJ0YWJzLXdyYXBwZXJcIjpcIm1FUWZ5bnF1NVJ1cWljSW9BOEs5XCIsXCJ0YWJzXCI6XCJuTlN5UEdjcnlaUXdUSXJVVmNlc1wiLFwibmV3LXRhYlwiOlwiV0NCV1JDUUV3TUw3NU9veHhaMm9cIixcIm1haW5cIjpcImFpYjBIM3RTV0M3MTBCU3k2ZGxBXCIsXCJ0b2Rvc1wiOlwidVdxdGhMQXJaWm51aEUydnRzTW9cIixcInRvZG9zLXRvcFwiOlwidTJDVTM1RWtNdTBmMnVxdUFXNExcIixcInRvZG9zLWJvdHRvbVwiOlwiZG00cFFTaHEzU2xEODhiektpTXpcIixcImluYWN0aXZlXCI6XCJJdVdBbjhEMEFDR2prUHpIVnJ2ZlwiLFwibmV3LXRvZG8tZm9ybVwiOlwiUEVCblV3d1UxV0d2akYyanUzYlZcIixcIm5hbWUtaW5wdXRcIjpcImthbzVRQ1FJVFptUXE1QVVBSGRjXCIsXCJzdWJtaXRcIjpcImMwQXk5dmFtMUt3bGJPTnd0N1p6XCIsXCJoZWFkaW5nXCI6XCJ6cHVXcGZfemttYkF5aVFYc051OVwiLFwicHJvamVjdFwiOlwiSnB4MWVXNk96aFZUaDZIaW5wc0dcIixcInRvZG9cIjpcIm9naFp2Qm1uc1NYU2hibU1TdldUXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1widGFiXCI6XCJGZlpIdDd5Zm1oMkFCV3hRSDA3cFwiLFwiYWN0aXZlXCI6XCJld1djM05pcmprM2Q5bXVYakJYWlwiLFwibGVmdFwiOlwiclVZUG9fUGw2WGhseDVtak5QcFFcIixcInJpZ2h0XCI6XCJZOGFHYThmUGJlNzI1ajZRSm40YlwiLFwiaWNvblwiOlwid016WUtWdlZvcFlPRGh6ZE9GdkFcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJ0b2RvXCI6XCJhdkJlazhxa1BKWWl0M2xyOEIwUVwiLFwibGVmdFwiOlwiQksxU2xyNTlHa0tlVXBnVmJfU3ZcIixcImNvbG9yXCI6XCJzVWxvMXAyaG9RWkNsV0xJUTdadVwiLFwiYWN0aXZlXCI6XCJsWVhKMFRxemIwdUxESkg5WnZ3TlwiLFwicmlnaHRcIjpcInA4V0lWRF9aMVpWZVo4elVFTlQ5XCIsXCJwcm9qZWN0LWlucHV0XCI6XCJJdU12WDdvZDhzU0YxZHJkY1dUWFwiLFwiYnV0dG9uXCI6XCJ4RGxNZnZmUm9jM3FpZ1ZXZmtxY1wiLFwiZWRpdFwiOlwiVEEzeG9FdEEwWkVyazlBdzRsNlZcIixcInRvZG8tZGVzY3JpcHRpb25cIjpcIkFJekhLeGRmYXp5emJYTFhjeFZzXCJ9OyIsImltcG9ydCBSZW5kZXJIYW5kbGVyIGZyb20gXCIuL3JlbmRlci5qc1wiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8uanNcIjtcclxuXHJcbmNsYXNzIFRvZG9BcHAge1xyXG4gICNyZW5kZXJIYW5kbGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbbmV3IFByb2plY3QoXCJNeSBUb2Rvc1wiKV07XHJcbiAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IDA7XHJcbiAgICB0aGlzLnNlbGVjdGVkVG9kbyA9IC0xO1xyXG5cclxuICAgIHRoaXMuYWRkVG9kbyhcIk15IFRvZG8gMVwiLCBcImxvcmVtIGlwc3VtXCIsIG5ldyBEYXRlKDIwMjMsIDcsIDI4KSk7XHJcbiAgICB0aGlzLmFkZFRvZG8oXCJNeSBUb2RvIDJcIiwgXCJsb3JlbSBpcHN1bVwiLCBuZXcgRGF0ZSgyMDIzLCA3LCAyOSkpO1xyXG4gICAgdGhpcy5hZGRUb2RvKFwiTXkgVG9kbyAzXCIsIFwibG9yZW0gaXBzdW1cIiwgbmV3IERhdGUoMjAyMywgNywgMzApKTtcclxuICAgIHRoaXMuI3JlbmRlckhhbmRsZXIgPSBuZXcgUmVuZGVySGFuZGxlcih0aGlzKTtcclxuICAgIHRoaXMuI3JlbmRlckhhbmRsZXIuaW5pdGlhbFJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdChuYW1lID0gXCJOZXcgUHJvamVjdFwiLCBjb2xvciA9IFwiI2ZmY2MwMFwiKSB7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoKSk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiA9IFwiXCIsIGRhdGUgPSBcIlwiLCBjb2xvciA9IFwiIzAzNGVmY1wiKSB7XHJcbiAgICB0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRQcm9qZWN0XS5hZGQobmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBjb2xvcikpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0FwcDtcclxuIiwiY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSA9IFwiTmV3IFByb2plY3RcIiwgY29sb3IgPSBcIiNmZmNjMDBcIikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcblxyXG4gIGFkZCh0b2RvKSB7XHJcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoaW5kZXgpIHtcclxuICAgIGlmICh0aGlzLnRvZG9zW2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLnRvZG9zW2luZGV4XTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XHJcbiIsImltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi4vZnVuY3Rpb25zL3BhZ2VMb2FkLmpzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB0YWJTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy90YWIuY3NzXCI7XHJcbmltcG9ydCB0b2RvU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdG9kby5jc3NcIjtcclxuaW1wb3J0IFwiQG1lbGxvd2FyZS9jb2xvcmlzL2Rpc3QvY29sb3Jpcy5jc3NcIjtcclxuaW1wb3J0IENvbG9yaXMgZnJvbSBcIkBtZWxsb3dhcmUvY29sb3Jpc1wiO1xyXG5cclxuY2xhc3MgUmVuZGVyaW5nSGFuZGxlciB7XHJcbiAgI3RhYkNvbnRhaW5lcjtcclxuICAjdG9kb0NvbnRhaW5lcjtcclxuICAjYXBwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHApIHtcclxuICAgIHRoaXMuI2FwcCA9IGFwcDtcclxuICB9XHJcblxyXG4gIGluaXRpYWxSZW5kZXIoKSB7XHJcbiAgICBwYWdlTG9hZCgpO1xyXG4gICAgdGhpcy4jYWRkRXZlbnRMaXN0ZW5lck5ld1RhYigpO1xyXG4gICAgdGhpcy4jYWRkRXZlbnRMaXN0ZW5lcnNOZXdUb2RvKCk7XHJcbiAgICB0aGlzLiN0YWJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGVzLnRhYnMpO1xyXG4gICAgdGhpcy4jdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZXNbXCJ0b2Rvcy10b3BcIl0pO1xyXG4gICAgdGhpcy5yZW5kZXJBbGwoKTtcclxuICB9XHJcblxyXG4gICNhZGRFdmVudExpc3RlbmVyTmV3VGFiKCkge1xyXG4gICAgY29uc3QgbmV3VGFiQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlc1tcIm5ldy10YWJcIl0pO1xyXG4gICAgbmV3VGFiQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuI2FwcC5hZGRQcm9qZWN0KCk7XHJcbiAgICAgIGlmICh0aGlzLiNhcHAuc2VsZWN0ZWRQcm9qZWN0ID09PSAtMSkge1xyXG4gICAgICAgIHRoaXMuI2FwcC5zZWxlY3RlZFByb2plY3QgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVuZGVyQWxsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICNhZGRFdmVudExpc3RlbmVyc05ld1RvZG8oKSB7XHJcbiAgICBpZiAodGhpcy4jYXBwLnByb2plY3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlcy5zdWJtaXQpO1xyXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlc1tcIm5hbWUtaW5wdXRcIl0pO1xyXG4gICAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcclxuICAgICAgICB0aGlzLiNhcHAuYWRkVG9kbyhpbnB1dC52YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4jYXBwLmFkZFRvZG8oXCJOZXcgVG9kb1wiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlbmRlckFsbCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJBbGwoKSB7XHJcbiAgICB0aGlzLnJlbmRlclRhYnMoKTtcclxuICAgIHRoaXMucmVuZGVyVG9kb3MoKTtcclxuICAgIHRoaXMuI3JlbmRlclRvZG9TY3JlZW4oKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclRhYnMoKSB7XHJcbiAgICB0aGlzLiN0YWJDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHRoaXMuI2FwcC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4gdGhpcy4jcmVuZGVyVGFiKHByb2plY3QsIGluZGV4KSk7XHJcblxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlcy5zdWJtaXQpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGVzW1wibmFtZS1pbnB1dFwiXSk7XHJcbiAgICBpZiAodGhpcy4jYXBwLnByb2plY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmluYWN0aXZlKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuaW5hY3RpdmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmluYWN0aXZlKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChzdHlsZXMuaW5hY3RpdmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI3JlbmRlclRhYihwcm9qZWN0LCBpbmRleCkge1xyXG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGluZGV4KTtcclxuICAgIHRhYi5jbGFzc05hbWUgPSB0YWJTdHlsZXMudGFiO1xyXG4gICAgdGFiLnN0eWxlW1wiYm9yZGVyLWxlZnRcIl0gPSBcIjVweCBzb2xpZCBcIiArIHByb2plY3QuY29sb3I7XHJcblxyXG4gICAgaWYgKHRoaXMuI2FwcC5zZWxlY3RlZFByb2plY3QgIT09IGluZGV4KSB7XHJcbiAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKHRhYlN0eWxlcy5hY3RpdmUpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGVzLm1haW4pLnN0eWxlW1wiYm9yZGVyLWxlZnRcIl0gPSBcIjVweCBzb2xpZCBcIiArIHByb2plY3QuY29sb3I7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YWIuY2xhc3NMaXN0LmFkZCh0YWJTdHlsZXMuYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxlZnQuY2xhc3NOYW1lID0gdGFiU3R5bGVzLmxlZnQ7XHJcbiAgICB0YWIuYXBwZW5kQ2hpbGQobGVmdCk7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgIGxlZnQuYXBwZW5kQ2hpbGQobmFtZSk7XHJcblxyXG4gICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmlnaHQuY2xhc3NOYW1lID0gdGFiU3R5bGVzLnJpZ2h0O1xyXG4gICAgdGFiLmFwcGVuZENoaWxkKHJpZ2h0KTtcclxuXHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXhtYXJrXCIsIHRhYlN0eWxlcy5pY29uKTtcclxuICAgIGljb24uc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICByaWdodC5hcHBlbmRDaGlsZChpY29uKTtcclxuXHJcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGxldCBkZWxldGVkID0gZmFsc2U7XHJcbiAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PT0gXCJzdmdcIiB8fCBlLnRhcmdldC5ub2RlTmFtZSA9PT0gXCJwYXRoXCIpIHtcclxuICAgICAgICB0aGlzLiNhcHAucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBkZWxldGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGVsZXRlZCkge1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy4jYXBwLnNlbGVjdGVkUHJvamVjdCAmJiBpbmRleCA9PT0gdGhpcy4jYXBwLnByb2plY3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy4jYXBwLnNlbGVjdGVkUHJvamVjdCA9IGluZGV4IC0gMTtcclxuICAgICAgICAgIHRoaXMuI2FwcC5zZWxlY3RlZFRvZG8gPSAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgdGhpcy4jYXBwLnNlbGVjdGVkUHJvamVjdCkge1xyXG4gICAgICAgICAgdGhpcy4jYXBwLnNlbGVjdGVkUHJvamVjdCA9IHRoaXMuI2FwcC5zZWxlY3RlZFByb2plY3QgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy4jYXBwLnNlbGVjdGVkUHJvamVjdCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4jYXBwLnNlbGVjdGVkUHJvamVjdCA9IGluZGV4O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuI2FwcC5zZWxlY3RlZFRvZG8gPSAtMTtcclxuICAgICAgdGhpcy5yZW5kZXJBbGwoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy4jdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJUb2RvcygpIHtcclxuICAgIHRoaXMuI3RvZG9Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGlmICh0aGlzLiNhcHAucHJvamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLiNhcHAucHJvamVjdHNbdGhpcy4jYXBwLnNlbGVjdGVkUHJvamVjdF0udG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+XHJcbiAgICAgICAgdGhpcy4jcmVuZGVyVG9kbyh0b2RvLCBpbmRleClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNyZW5kZXJUb2RvKHRvZG8sIGluZGV4KSB7XHJcbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRvZG9EaXYuY2xhc3NOYW1lID0gdG9kb1N0eWxlcy50b2RvO1xyXG5cclxuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGVmdC5jbGFzc05hbWUgPSB0b2RvU3R5bGVzLmxlZnQ7XHJcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGxlZnQpO1xyXG5cclxuICAgIGNvbnN0IGNvbG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbG9yRGl2LmNsYXNzTmFtZSA9IHRvZG9TdHlsZXMuY29sb3I7XHJcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGNvbG9yRGl2KTtcclxuICAgIGNvbG9yRGl2LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IHRvZG8uY29sb3I7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gdG9kb1N0eWxlcy50aXRsZTtcclxuICAgIGxlZnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xyXG5cclxuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJpZ2h0LmNsYXNzTmFtZSA9IHRvZG9TdHlsZXMucmlnaHQ7XHJcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHJpZ2h0KTtcclxuXHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJmYS14bFwiKTtcclxuICAgIHJpZ2h0LmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgaWYgKHRvZG8uaXNDaGVja2VkKCkpIHtcclxuICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtcmVndWxhclwiLCBcImZhLXNxdWFyZS1jaGVja1wiKTtcclxuICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1zcXVhcmUtY2hlY2tcIik7XHJcbiAgICAgIGljb24uc3R5bGUuY29sb3IgPSBcIiMwYWIzMGFcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZShcImZhLXNvbGlkXCIsIFwiZmEtc3F1YXJlLWNoZWNrXCIpO1xyXG4gICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIsIFwiZmEtc3F1YXJlLWNoZWNrXCIsIFwiZmEteGxcIik7XHJcbiAgICAgIGljb24uc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICB9XHJcbiAgICB0b2RvRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gXCJzdmdcIiB8fCB0YXJnZXQubm9kZU5hbWUgPT09IFwicGF0aFwiKSB7XHJcbiAgICAgICAgdG9kby5jaGVjaygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLiNhcHAuc2VsZWN0ZWRUb2RvID09PSBpbmRleCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiNhcHAuc2VsZWN0ZWRUb2RvID0gaW5kZXg7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZW5kZXJUb2RvcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLiNhcHAuc2VsZWN0ZWRUb2RvKSB7XHJcbiAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCh0b2RvU3R5bGVzLmFjdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4jdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcclxuICB9XHJcblxyXG4gICNyZW5kZXJUb2RvU2NyZWVuKCkge1xyXG4gICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGVzLnByb2plY3QpO1xyXG4gICAgcHJvamVjdEluZm8uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuI2FwcC5zZWxlY3RlZFByb2plY3QpO1xyXG4gICAgaWYgKHRoaXMuI2FwcC5zZWxlY3RlZFByb2plY3QgIT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLiNhcHAucHJvamVjdHNbdGhpcy4jYXBwLnNlbGVjdGVkUHJvamVjdF07XHJcblxyXG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICBpbnB1dC5jbGFzc05hbWUgPSB0b2RvU3R5bGVzW1wicHJvamVjdC1pbnB1dFwiXTtcclxuICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIGVkaXQuY2xhc3NOYW1lID0gdG9kb1N0eWxlcy5idXR0b247XHJcbiAgICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXBlblwiLCBcImZhLXhzXCIpO1xyXG4gICAgICBlZGl0LmFwcGVuZENoaWxkKGVkaXRJY29uKTtcclxuICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoZWRpdCk7XHJcblxyXG4gICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICBwcm9qZWN0Lm5hbWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgIHRoaXMucmVuZGVyVGFicygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBjb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIGNvbG9yLmNsYXNzTmFtZSA9IHRvZG9TdHlsZXMuYnV0dG9uO1xyXG4gICAgICBjb25zdCBjb2xvckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgICAgY29sb3JJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXBhbGV0dGVcIiwgXCJmYS14c1wiKTtcclxuICAgICAgY29sb3IuYXBwZW5kQ2hpbGQoY29sb3JJY29uKTtcclxuICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoY29sb3IpO1xyXG5cclxuICAgICAgY29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBDb2xvcmlzLmluaXQoKTtcclxuICAgICAgICBDb2xvcmlzKHsgZWw6IFwiI2NvbG9yaXNcIiB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJpbmdIYW5kbGVyO1xyXG4iLCJjbGFzcyBUb2RvIHtcclxuICAjY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24gPSBcIlwiLCBkYXRlID0gXCJcIiwgY29sb3IgPSBcIiMwMzRlZmNcIikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcblxyXG4gIGNoZWNrKCkge1xyXG4gICAgdGhpcy4jY2hlY2tlZCA9ICF0aGlzLiNjaGVja2VkO1xyXG4gIH1cclxuXHJcbiAgaXNDaGVja2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2NoZWNrZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XHJcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd3JhcHBlci5jbGFzc05hbWUgPSBzdHlsZXMud3JhcHBlcjtcclxuXHJcbiAgY29uc3QgdGFic1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhYnNXcmFwcGVyLmNsYXNzTmFtZSA9IHN0eWxlc1tcInRhYnMtd3JhcHBlclwiXTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRhYnNXcmFwcGVyKTtcclxuXHJcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFicy5jbGFzc05hbWUgPSBzdHlsZXMudGFicztcclxuICB0YWJzV3JhcHBlci5hcHBlbmRDaGlsZCh0YWJzKTtcclxuXHJcbiAgY29uc3QgbmV3VGFiQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBuZXdUYWJCdXR0b24uY2xhc3NOYW1lID0gc3R5bGVzW1wibmV3LXRhYlwiXTtcclxuICB0YWJzV3JhcHBlci5hcHBlbmRDaGlsZChuZXdUYWJCdXR0b24pO1xyXG5cclxuICBjb25zdCBjaGVja0ljb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgY2hlY2tJY29uMS5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1wbHVzXCIsIFwiZmEteGxcIik7XHJcbiAgbmV3VGFiQnV0dG9uLmFwcGVuZENoaWxkKGNoZWNrSWNvbjEpO1xyXG5cclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtYWluLmNsYXNzTmFtZSA9IHN0eWxlcy5tYWluO1xyXG4gIG1haW4uc3R5bGVbXCJib3JkZXItbGVmdFwiXSA9IFwiNXB4IHNvbGlkICNmZmNjMDBcIjtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb3MuY2xhc3NOYW1lID0gc3R5bGVzLnRvZG9zO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQodG9kb3MpO1xyXG5cclxuICBjb25zdCB0b2Rvc1RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb3NUb3AuY2xhc3NOYW1lID0gc3R5bGVzW1widG9kb3MtdG9wXCJdO1xyXG4gIHRvZG9zLmFwcGVuZENoaWxkKHRvZG9zVG9wKTtcclxuXHJcbiAgY29uc3QgdG9kb3NCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvZG9zQm90dG9tLmNsYXNzTmFtZSA9IHN0eWxlc1tcInRvZG9zLWJvdHRvbVwiXTtcclxuICB0b2Rvcy5hcHBlbmRDaGlsZCh0b2Rvc0JvdHRvbSk7XHJcblxyXG4gIGNvbnN0IG5ld1RvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgbmV3VG9kb0Zvcm0uY2xhc3NOYW1lID0gc3R5bGVzW1wibmV3LXRvZG8tZm9ybVwiXTtcclxuICB0b2Rvc0JvdHRvbS5hcHBlbmRDaGlsZChuZXdUb2RvRm9ybSk7XHJcblxyXG4gIGNvbnN0IGZvcm1MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb3JtTGVmdC5jbGFzc05hbWUgPSBzdHlsZXNbXCJmb3JtLWxlZnRcIl07XHJcbiAgbmV3VG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUxlZnQpO1xyXG5cclxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcclxuICBuYW1lSW5wdXQuY2xhc3NOYW1lID0gc3R5bGVzW1wibmFtZS1pbnB1dFwiXTtcclxuICBmb3JtTGVmdC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG5cclxuICBjb25zdCBmb3JtUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvcm1SaWdodC5jbGFzc05hbWUgPSBzdHlsZXNbXCJmb3JtLXJpZ2h0XCJdO1xyXG4gIG5ld1RvZG9Gb3JtLmFwcGVuZENoaWxkKGZvcm1SaWdodCk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XHJcbiAgc3VibWl0QnV0dG9uLmNsYXNzTmFtZSA9IHN0eWxlcy5zdWJtaXQ7XHJcbiAgZm9ybVJpZ2h0LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IGNoZWNrSWNvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICBjaGVja0ljb24yLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXBsdXNcIiwgXCJmYS14bFwiKTtcclxuICBzdWJtaXRCdXR0b24uYXBwZW5kQ2hpbGQoY2hlY2tJY29uMik7XHJcblxyXG4gIGNvbnN0IHRvZG9TY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvZG9TY3JlZW4uY2xhc3NOYW1lID0gc3R5bGVzW1widG9kby1zY3JlZW5cIl07XHJcbiAgbWFpbi5hcHBlbmRDaGlsZCh0b2RvU2NyZWVuKTtcclxuXHJcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGluZy5jbGFzc05hbWUgPSBzdHlsZXMuaGVhZGluZztcclxuICB0b2RvU2NyZWVuLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJvamVjdEluZm8uY2xhc3NOYW1lID0gc3R5bGVzLnByb2plY3Q7XHJcbiAgaGVhZGluZy5hcHBlbmRDaGlsZChwcm9qZWN0SW5mbyk7XHJcblxyXG4gIGNvbnN0IHRvZG9JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0b2RvSW5mby5jbGFzc05hbWUgPSBzdHlsZXMudG9kbztcclxuICBoZWFkaW5nLmFwcGVuZENoaWxkKHRvZG9JbmZvKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkO1xyXG4iLCJ2YXIgQ29sb3JpcyA9IGZ1bmN0aW9uICgpIHtcbiAgLyohXHJcbiAgKiBDb3B5cmlnaHQgKGMpIDIwMjEtMjAyMyBNb21vIEJhc3NpdC5cclxuICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG4gICogaHR0cHM6Ly9naXRodWIuY29tL21kYmFzc2l0L0NvbG9yaXNcclxuICAqIFZlcnNpb246IDAuMjEuMVxyXG4gICogTlBNOiBodHRwczovL2dpdGh1Yi5jb20vbWVsbG93YXJlL2NvbG9yaXMtbnBtXHJcbiAgKi9cblxuICByZXR1cm4gZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIE1hdGgsIHVuZGVmaW5lZCkge1xuICAgIHZhciBjdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHZhciBjdXJyZW50Q29sb3IgPSB7IHI6IDAsIGc6IDAsIGI6IDAsIGg6IDAsIHM6IDAsIHY6IDAsIGE6IDEgfTtcbiAgICB2YXIgY29udGFpbmVyLHBpY2tlcixjb2xvckFyZWEsY29sb3JNYXJrZXIsY29sb3JQcmV2aWV3LGNvbG9yVmFsdWUsY2xlYXJCdXR0b24sY2xvc2VCdXR0b24sXG4gICAgICBodWVTbGlkZXIsaHVlTWFya2VyLGFscGhhU2xpZGVyLGFscGhhTWFya2VyLGN1cnJlbnRFbCxjdXJyZW50Rm9ybWF0LG9sZENvbG9yLGtleWJvYXJkTmF2LFxuICAgICAgY29sb3JBcmVhRGltcyA9IHt9O1xuXG4gICAgLy8gRGVmYXVsdCBzZXR0aW5nc1xuICAgIHZhciBzZXR0aW5ncyA9IHtcbiAgICAgIGVsOiAnW2RhdGEtY29sb3Jpc10nLFxuICAgICAgcGFyZW50OiAnYm9keScsXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnLFxuICAgICAgdGhlbWVNb2RlOiAnbGlnaHQnLFxuICAgICAgcnRsOiBmYWxzZSxcbiAgICAgIHdyYXA6IHRydWUsXG4gICAgICBtYXJnaW46IDIsXG4gICAgICBmb3JtYXQ6ICdoZXgnLFxuICAgICAgZm9ybWF0VG9nZ2xlOiBmYWxzZSxcbiAgICAgIHN3YXRjaGVzOiBbXSxcbiAgICAgIHN3YXRjaGVzT25seTogZmFsc2UsXG4gICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgIGZvcmNlQWxwaGE6IGZhbHNlLFxuICAgICAgZm9jdXNJbnB1dDogdHJ1ZSxcbiAgICAgIHNlbGVjdElucHV0OiBmYWxzZSxcbiAgICAgIGlubGluZTogZmFsc2UsXG4gICAgICBkZWZhdWx0Q29sb3I6ICcjMDAwMDAwJyxcbiAgICAgIGNsZWFyQnV0dG9uOiBmYWxzZSxcbiAgICAgIGNsZWFyTGFiZWw6ICdDbGVhcicsXG4gICAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXG4gICAgICBjbG9zZUxhYmVsOiAnQ2xvc2UnLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKCkge3JldHVybiB1bmRlZmluZWQ7fSxcbiAgICAgIGExMXk6IHtcbiAgICAgICAgb3BlbjogJ09wZW4gY29sb3IgcGlja2VyJyxcbiAgICAgICAgY2xvc2U6ICdDbG9zZSBjb2xvciBwaWNrZXInLFxuICAgICAgICBjbGVhcjogJ0NsZWFyIHRoZSBzZWxlY3RlZCBjb2xvcicsXG4gICAgICAgIG1hcmtlcjogJ1NhdHVyYXRpb246IHtzfS4gQnJpZ2h0bmVzczoge3Z9LicsXG4gICAgICAgIGh1ZVNsaWRlcjogJ0h1ZSBzbGlkZXInLFxuICAgICAgICBhbHBoYVNsaWRlcjogJ09wYWNpdHkgc2xpZGVyJyxcbiAgICAgICAgaW5wdXQ6ICdDb2xvciB2YWx1ZSBmaWVsZCcsXG4gICAgICAgIGZvcm1hdDogJ0NvbG9yIGZvcm1hdCcsXG4gICAgICAgIHN3YXRjaDogJ0NvbG9yIHN3YXRjaCcsXG4gICAgICAgIGluc3RydWN0aW9uOiAnU2F0dXJhdGlvbiBhbmQgYnJpZ2h0bmVzcyBzZWxlY3Rvci4gVXNlIHVwLCBkb3duLCBsZWZ0IGFuZCByaWdodCBhcnJvdyBrZXlzIHRvIHNlbGVjdC4nXG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFZpcnR1YWwgaW5zdGFuY2VzIGNhY2hlXG4gICAgdmFyIGluc3RhbmNlcyA9IHt9O1xuICAgIHZhciBjdXJyZW50SW5zdGFuY2VJZCA9ICcnO1xuICAgIHZhciBkZWZhdWx0SW5zdGFuY2UgPSB7fTtcbiAgICB2YXIgaGFzSW5zdGFuY2UgPSBmYWxzZTtcblxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlIHRoZSBjb2xvciBwaWNrZXIuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBDb25maWd1cmF0aW9uIG9wdGlvbnMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb25maWd1cmUob3B0aW9ucykge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9dmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKVxuXG4gICAgICB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSAnZWwnOlxuICAgICAgICAgICAgYmluZEZpZWxkcyhvcHRpb25zLmVsKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLndyYXAgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHdyYXBGaWVsZHMob3B0aW9ucy5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdwYXJlbnQnOlxuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnBhcmVudCk7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwaWNrZXIpO1xuICAgICAgICAgICAgICBzZXR0aW5ncy5wYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcblxuICAgICAgICAgICAgICAvLyBkb2N1bWVudC5ib2R5IGlzIHNwZWNpYWxcbiAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lciA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndGhlbWVNb2RlJzpcbiAgICAgICAgICAgIHNldHRpbmdzLnRoZW1lTW9kZSA9IG9wdGlvbnMudGhlbWVNb2RlO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudGhlbWVNb2RlID09PSAnYXV0bycgJiYgd2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHNldHRpbmdzLnRoZW1lTW9kZSA9ICdkYXJrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvLyBUaGUgbGFjayBvZiBhIGJyZWFrIHN0YXRlbWVudCBpcyBpbnRlbnRpb25hbFxuICAgICAgICAgIGNhc2UgJ3RoZW1lJzpcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRoZW1lKSB7XG4gICAgICAgICAgICAgIHNldHRpbmdzLnRoZW1lID0gb3B0aW9ucy50aGVtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IHRoZSB0aGVtZSBhbmQgY29sb3Igc2NoZW1lXG4gICAgICAgICAgICBwaWNrZXIuY2xhc3NOYW1lID0gXCJjbHItcGlja2VyIGNsci1cIiArIHNldHRpbmdzLnRoZW1lICsgXCIgY2xyLVwiICsgc2V0dGluZ3MudGhlbWVNb2RlO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGNvbG9yIHBpY2tlcidzIHBvc2l0aW9uIGlmIGlubGluZSBtb2RlIGlzIGluIHVzZVxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmlubGluZSkge1xuICAgICAgICAgICAgICB1cGRhdGVQaWNrZXJQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncnRsJzpcbiAgICAgICAgICAgIHNldHRpbmdzLnJ0bCA9ICEhb3B0aW9ucy5ydGw7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xyLWZpZWxkJykuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtyZXR1cm4gZmllbGQuY2xhc3NMaXN0LnRvZ2dsZSgnY2xyLXJ0bCcsIHNldHRpbmdzLnJ0bCk7fSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdtYXJnaW4nOlxuICAgICAgICAgICAgb3B0aW9ucy5tYXJnaW4gKj0gMTtcbiAgICAgICAgICAgIHNldHRpbmdzLm1hcmdpbiA9ICFpc05hTihvcHRpb25zLm1hcmdpbikgPyBvcHRpb25zLm1hcmdpbiA6IHNldHRpbmdzLm1hcmdpbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3dyYXAnOlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWwgJiYgb3B0aW9ucy53cmFwKSB7XG4gICAgICAgICAgICAgIHdyYXBGaWVsZHMob3B0aW9ucy5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdmb3JtYXRUb2dnbGUnOlxuICAgICAgICAgICAgc2V0dGluZ3MuZm9ybWF0VG9nZ2xlID0gISFvcHRpb25zLmZvcm1hdFRvZ2dsZTtcbiAgICAgICAgICAgIGdldEVsKCdjbHItZm9ybWF0Jykuc3R5bGUuZGlzcGxheSA9IHNldHRpbmdzLmZvcm1hdFRvZ2dsZSA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuZm9ybWF0VG9nZ2xlKSB7XG4gICAgICAgICAgICAgIHNldHRpbmdzLmZvcm1hdCA9ICdhdXRvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3N3YXRjaGVzJzpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuc3dhdGNoZXMpKSB7XG4gICAgICAgICAgICAgIHZhciBzd2F0Y2hlcyA9IFtdO1xuXG4gICAgICAgICAgICAgIG9wdGlvbnMuc3dhdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAoc3dhdGNoLCBpKSB7XG4gICAgICAgICAgICAgICAgc3dhdGNoZXMucHVzaChcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwiY2xyLXN3YXRjaC1cIiArIGkgKyBcIlxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJjbHItc3dhdGNoLWxhYmVsIGNsci1zd2F0Y2gtXCIgKyBpICsgXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjogXCIgKyBzd2F0Y2ggKyBcIjtcXFwiPlwiICsgc3dhdGNoICsgXCI8L2J1dHRvbj5cIik7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGdldEVsKCdjbHItc3dhdGNoZXMnKS5pbm5lckhUTUwgPSBzd2F0Y2hlcy5sZW5ndGggPyBcIjxkaXY+XCIgKyBzd2F0Y2hlcy5qb2luKCcnKSArIFwiPC9kaXY+XCIgOiAnJztcbiAgICAgICAgICAgICAgc2V0dGluZ3Muc3dhdGNoZXMgPSBvcHRpb25zLnN3YXRjaGVzLnNsaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzd2F0Y2hlc09ubHknOlxuICAgICAgICAgICAgc2V0dGluZ3Muc3dhdGNoZXNPbmx5ID0gISFvcHRpb25zLnN3YXRjaGVzT25seTtcbiAgICAgICAgICAgIHBpY2tlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWluaW1hbCcsIHNldHRpbmdzLnN3YXRjaGVzT25seSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhbHBoYSc6XG4gICAgICAgICAgICBzZXR0aW5ncy5hbHBoYSA9ICEhb3B0aW9ucy5hbHBoYTtcbiAgICAgICAgICAgIHBpY2tlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWxwaGEnLCBzZXR0aW5ncy5hbHBoYSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbmxpbmUnOlxuICAgICAgICAgICAgc2V0dGluZ3MuaW5saW5lID0gISFvcHRpb25zLmlubGluZTtcbiAgICAgICAgICAgIHBpY2tlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5saW5lJywgc2V0dGluZ3MuaW5saW5lKTtcblxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmlubGluZSkge1xuICAgICAgICAgICAgICB2YXIgZGVmYXVsdENvbG9yID0gb3B0aW9ucy5kZWZhdWx0Q29sb3IgfHwgc2V0dGluZ3MuZGVmYXVsdENvbG9yO1xuXG4gICAgICAgICAgICAgIGN1cnJlbnRGb3JtYXQgPSBnZXRDb2xvckZvcm1hdEZyb21TdHIoZGVmYXVsdENvbG9yKTtcbiAgICAgICAgICAgICAgdXBkYXRlUGlja2VyUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgc2V0Q29sb3JGcm9tU3RyKGRlZmF1bHRDb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjbGVhckJ1dHRvbic6XG4gICAgICAgICAgICAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuY2xlYXJCdXR0b24gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmNsZWFyQnV0dG9uLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuY2xlYXJMYWJlbCA9IG9wdGlvbnMuY2xlYXJCdXR0b24ubGFiZWw7XG4gICAgICAgICAgICAgICAgY2xlYXJCdXR0b24uaW5uZXJIVE1MID0gc2V0dGluZ3MuY2xlYXJMYWJlbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9wdGlvbnMuY2xlYXJCdXR0b24gPSBvcHRpb25zLmNsZWFyQnV0dG9uLnNob3c7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldHRpbmdzLmNsZWFyQnV0dG9uID0gISFvcHRpb25zLmNsZWFyQnV0dG9uO1xuICAgICAgICAgICAgY2xlYXJCdXR0b24uc3R5bGUuZGlzcGxheSA9IHNldHRpbmdzLmNsZWFyQnV0dG9uID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NsZWFyTGFiZWwnOlxuICAgICAgICAgICAgc2V0dGluZ3MuY2xlYXJMYWJlbCA9IG9wdGlvbnMuY2xlYXJMYWJlbDtcbiAgICAgICAgICAgIGNsZWFyQnV0dG9uLmlubmVySFRNTCA9IHNldHRpbmdzLmNsZWFyTGFiZWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjbG9zZUJ1dHRvbic6XG4gICAgICAgICAgICBzZXR0aW5ncy5jbG9zZUJ1dHRvbiA9ICEhb3B0aW9ucy5jbG9zZUJ1dHRvbjtcblxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmNsb3NlQnV0dG9uKSB7XG4gICAgICAgICAgICAgIHBpY2tlci5pbnNlcnRCZWZvcmUoY2xvc2VCdXR0b24sIGNvbG9yUHJldmlldyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb2xvclByZXZpZXcuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjbG9zZUxhYmVsJzpcbiAgICAgICAgICAgIHNldHRpbmdzLmNsb3NlTGFiZWwgPSBvcHRpb25zLmNsb3NlTGFiZWw7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSBzZXR0aW5ncy5jbG9zZUxhYmVsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYTExeSc6XG4gICAgICAgICAgICB2YXIgbGFiZWxzID0gb3B0aW9ucy5hMTF5O1xuICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhYmVscyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgbGFiZWwgaW4gbGFiZWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhYmVsc1tsYWJlbF0gJiYgc2V0dGluZ3MuYTExeVtsYWJlbF0pIHtcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmExMXlbbGFiZWxdID0gbGFiZWxzW2xhYmVsXTtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgICAgdmFyIG9wZW5MYWJlbCA9IGdldEVsKCdjbHItb3Blbi1sYWJlbCcpO1xuICAgICAgICAgICAgICB2YXIgc3dhdGNoTGFiZWwgPSBnZXRFbCgnY2xyLXN3YXRjaC1sYWJlbCcpO1xuXG4gICAgICAgICAgICAgIG9wZW5MYWJlbC5pbm5lckhUTUwgPSBzZXR0aW5ncy5hMTF5Lm9wZW47XG4gICAgICAgICAgICAgIHN3YXRjaExhYmVsLmlubmVySFRNTCA9IHNldHRpbmdzLmExMXkuc3dhdGNoO1xuICAgICAgICAgICAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBzZXR0aW5ncy5hMTF5LmNsb3NlKTtcbiAgICAgICAgICAgICAgY2xlYXJCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgc2V0dGluZ3MuYTExeS5jbGVhcik7XG4gICAgICAgICAgICAgIGh1ZVNsaWRlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBzZXR0aW5ncy5hMTF5Lmh1ZVNsaWRlcik7XG4gICAgICAgICAgICAgIGFscGhhU2xpZGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHNldHRpbmdzLmExMXkuYWxwaGFTbGlkZXIpO1xuICAgICAgICAgICAgICBjb2xvclZhbHVlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHNldHRpbmdzLmExMXkuaW5wdXQpO1xuICAgICAgICAgICAgICBjb2xvckFyZWEuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgc2V0dGluZ3MuYTExeS5pbnN0cnVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc2V0dGluZ3Nba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfTtmb3IgKHZhciBrZXkgaW4gb3B0aW9ucykge19sb29wKCk7fVxuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQWRkIG9yIHVwZGF0ZSBhIHZpcnR1YWwgaW5zdGFuY2UuXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgVGhlIENTUyBzZWxlY3RvciBvZiB0aGUgZWxlbWVudHMgdG8gd2hpY2ggdGhlIGluc3RhbmNlIGlzIGF0dGFjaGVkLlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgUGVyLWluc3RhbmNlIG9wdGlvbnMgdG8gYXBwbHkuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRWaXJ0dWFsSW5zdGFuY2Uoc2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpbnN0YW5jZXNbc2VsZWN0b3JdID0gb3B0aW9ucztcbiAgICAgICAgaGFzSW5zdGFuY2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgdmlydHVhbCBpbnN0YW5jZS5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBUaGUgQ1NTIHNlbGVjdG9yIG9mIHRoZSBlbGVtZW50cyB0byB3aGljaCB0aGUgaW5zdGFuY2UgaXMgYXR0YWNoZWQuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZW1vdmVWaXJ0dWFsSW5zdGFuY2Uoc2VsZWN0b3IpIHtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZXNbc2VsZWN0b3JdO1xuXG4gICAgICBpZiAoT2JqZWN0LmtleXMoaW5zdGFuY2VzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaGFzSW5zdGFuY2UgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc2VsZWN0b3IgPT09IGN1cnJlbnRJbnN0YW5jZUlkKSB7XG4gICAgICAgICAgcmVzZXRWaXJ0dWFsSW5zdGFuY2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQXR0YWNoIGEgdmlydHVhbCBpbnN0YW5jZSB0byBhbiBlbGVtZW50IGlmIGl0IG1hdGNoZXMgYSBzZWxlY3Rvci5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IFRhcmdldCBlbGVtZW50IHRoYXQgd2lsbCByZWNlaXZlIGEgdmlydHVhbCBpbnN0YW5jZSBpZiBhcHBsaWNhYmxlLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gYXR0YWNoVmlydHVhbEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICAgIGlmIChoYXNJbnN0YW5jZSkge1xuICAgICAgICAvLyBUaGVzZSBvcHRpb25zIGNhbiBvbmx5IGJlIHNldCBnbG9iYWxseSwgbm90IHBlciBpbnN0YW5jZVxuICAgICAgICB2YXIgdW5zdXBwb3J0ZWRPcHRpb25zID0gWydlbCcsICd3cmFwJywgJ3J0bCcsICdpbmxpbmUnLCAnZGVmYXVsdENvbG9yJywgJ2ExMXknXTt2YXIgX2xvb3AyID0gZnVuY3Rpb24gX2xvb3AyKClcblxuICAgICAgICB7XG4gICAgICAgICAgdmFyIG9wdGlvbnMgPSBpbnN0YW5jZXNbc2VsZWN0b3JdO1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgbWF0Y2hlcyBhbiBpbnN0YW5jZSdzIENTUyBzZWxlY3RvclxuICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBjdXJyZW50SW5zdGFuY2VJZCA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgZGVmYXVsdEluc3RhbmNlID0ge307XG5cbiAgICAgICAgICAgIC8vIERlbGV0ZSB1bnN1cHBvcnRlZCBvcHRpb25zXG4gICAgICAgICAgICB1bnN1cHBvcnRlZE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uKSB7cmV0dXJuIGRlbGV0ZSBvcHRpb25zW29wdGlvbl07fSk7XG5cbiAgICAgICAgICAgIC8vIEJhY2sgdXAgdGhlIGRlZmF1bHQgb3B0aW9ucyBzbyB3ZSBjYW4gcmVzdG9yZSB0aGVtIGxhdGVyXG4gICAgICAgICAgICBmb3IgKHZhciBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICBkZWZhdWx0SW5zdGFuY2Vbb3B0aW9uXSA9IEFycmF5LmlzQXJyYXkoc2V0dGluZ3Nbb3B0aW9uXSkgPyBzZXR0aW5nc1tvcHRpb25dLnNsaWNlKCkgOiBzZXR0aW5nc1tvcHRpb25dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGluc3RhbmNlJ3Mgb3B0aW9uc1xuICAgICAgICAgICAgY29uZmlndXJlKG9wdGlvbnMpO3JldHVybiBcImJyZWFrXCI7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH07Zm9yICh2YXIgc2VsZWN0b3IgaW4gaW5zdGFuY2VzKSB7dmFyIF9yZXQgPSBfbG9vcDIoKTtpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhazt9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXZlcnQgYW55IHBlci1pbnN0YW5jZSBvcHRpb25zIHRoYXQgd2VyZSBwcmV2aW91c2x5IGFwcGxpZWQuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZXNldFZpcnR1YWxJbnN0YW5jZSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhkZWZhdWx0SW5zdGFuY2UpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uZmlndXJlKGRlZmF1bHRJbnN0YW5jZSk7XG4gICAgICAgIGN1cnJlbnRJbnN0YW5jZUlkID0gJyc7XG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSA9IHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQmluZCB0aGUgY29sb3IgcGlja2VyIHRvIGlucHV0IGZpZWxkcyB0aGF0IG1hdGNoIHRoZSBzZWxlY3Rvci5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBPbmUgb3IgbW9yZSBzZWxlY3RvcnMgcG9pbnRpbmcgdG8gaW5wdXQgZmllbGRzLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gYmluZEZpZWxkcyhzZWxlY3Rvcikge1xuICAgICAgLy8gU2hvdyB0aGUgY29sb3IgcGlja2VyIG9uIGNsaWNrIG9uIHRoZSBpbnB1dCBmaWVsZHMgdGhhdCBtYXRjaCB0aGUgc2VsZWN0b3JcbiAgICAgIGFkZExpc3RlbmVyKGRvY3VtZW50LCAnY2xpY2snLCBzZWxlY3RvciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIFNraXAgaWYgaW5saW5lIG1vZGUgaXMgaW4gdXNlXG4gICAgICAgIGlmIChzZXR0aW5ncy5pbmxpbmUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcHBseSBhbnkgcGVyLWluc3RhbmNlIG9wdGlvbnMgZmlyc3RcbiAgICAgICAgYXR0YWNoVmlydHVhbEluc3RhbmNlKGV2ZW50LnRhcmdldCk7XG5cbiAgICAgICAgY3VycmVudEVsID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBvbGRDb2xvciA9IGN1cnJlbnRFbC52YWx1ZTtcbiAgICAgICAgY3VycmVudEZvcm1hdCA9IGdldENvbG9yRm9ybWF0RnJvbVN0cihvbGRDb2xvcik7XG4gICAgICAgIHBpY2tlci5jbGFzc0xpc3QuYWRkKCdjbHItb3BlbicpO1xuXG4gICAgICAgIHVwZGF0ZVBpY2tlclBvc2l0aW9uKCk7XG4gICAgICAgIHNldENvbG9yRnJvbVN0cihvbGRDb2xvcik7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmZvY3VzSW5wdXQgfHwgc2V0dGluZ3Muc2VsZWN0SW5wdXQpIHtcbiAgICAgICAgICBjb2xvclZhbHVlLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICBjb2xvclZhbHVlLnNldFNlbGVjdGlvblJhbmdlKGN1cnJlbnRFbC5zZWxlY3Rpb25TdGFydCwgY3VycmVudEVsLnNlbGVjdGlvbkVuZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2V0dGluZ3Muc2VsZWN0SW5wdXQpIHtcbiAgICAgICAgICBjb2xvclZhbHVlLnNlbGVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWx3YXlzIGZvY3VzIHRoZSBmaXJzdCBlbGVtZW50IHdoZW4gdXNpbmcga2V5Ym9hcmQgbmF2aWdhdGlvblxuICAgICAgICBpZiAoa2V5Ym9hcmROYXYgfHwgc2V0dGluZ3Muc3dhdGNoZXNPbmx5KSB7XG4gICAgICAgICAgZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKS5zaGlmdCgpLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIGFuIFwib3BlblwiIGV2ZW50XG4gICAgICAgIGN1cnJlbnRFbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnb3BlbicsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBjb2xvciBwcmV2aWV3IG9mIHRoZSBpbnB1dCBmaWVsZHMgdGhhdCBtYXRjaCB0aGUgc2VsZWN0b3JcbiAgICAgIGFkZExpc3RlbmVyKGRvY3VtZW50LCAnaW5wdXQnLCBzZWxlY3RvciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcblxuICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgcHJldmlldyBpZiB0aGUgZmllbGQgaGFzIGJlZW4gcHJldmlvdXNseSB3cmFwcGVkXG4gICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbHItZmllbGQnKSkge1xuICAgICAgICAgIHBhcmVudC5zdHlsZS5jb2xvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGNvbG9yIHBpY2tlcidzIHBvc2l0aW9uIGFuZCB0aGUgY29sb3IgZ3JhZGllbnQncyBvZmZzZXRcclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZVBpY2tlclBvc2l0aW9uKCkge1xuICAgICAgaWYgKCFwaWNrZXIgfHwgIWN1cnJlbnRFbCAmJiAhc2V0dGluZ3MuaW5saW5lKSByZXR1cm47IC8vKiogRE8gTk9UIFJFTU9WRTogaW4gY2FzZSBjYWxsZWQgYmVmb3JlIGluaXRpYWxpemVkXG4gICAgICB2YXIgcGFyZW50ID0gY29udGFpbmVyO1xuICAgICAgdmFyIHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIHZhciBwaWNrZXJXaWR0aCA9IHBpY2tlci5vZmZzZXRXaWR0aDtcbiAgICAgIHZhciBwaWNrZXJIZWlnaHQgPSBwaWNrZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgdmFyIHJlcG9zaXRpb24gPSB7IGxlZnQ6IGZhbHNlLCB0b3A6IGZhbHNlIH07XG4gICAgICB2YXIgcGFyZW50U3R5bGUsIHBhcmVudE1hcmdpblRvcCwgcGFyZW50Qm9yZGVyVG9wO1xuICAgICAgdmFyIG9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhcmVudFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KTtcbiAgICAgICAgcGFyZW50TWFyZ2luVG9wID0gcGFyc2VGbG9hdChwYXJlbnRTdHlsZS5tYXJnaW5Ub3ApO1xuICAgICAgICBwYXJlbnRCb3JkZXJUb3AgPSBwYXJzZUZsb2F0KHBhcmVudFN0eWxlLmJvcmRlclRvcFdpZHRoKTtcblxuICAgICAgICBvZmZzZXQgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG9mZnNldC55ICs9IHBhcmVudEJvcmRlclRvcCArIHNjcm9sbFk7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2V0dGluZ3MuaW5saW5lKSB7XG4gICAgICAgIHZhciBjb29yZHMgPSBjdXJyZW50RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBsZWZ0ID0gY29vcmRzLng7XG4gICAgICAgIHZhciB0b3AgPSBzY3JvbGxZICsgY29vcmRzLnkgKyBjb29yZHMuaGVpZ2h0ICsgc2V0dGluZ3MubWFyZ2luO1xuXG4gICAgICAgIC8vIElmIHRoZSBjb2xvciBwaWNrZXIgaXMgaW5zaWRlIGEgY3VzdG9tIGNvbnRhaW5lclxuICAgICAgICAvLyBzZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIGl0XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICBsZWZ0IC09IG9mZnNldC54O1xuICAgICAgICAgIHRvcCAtPSBvZmZzZXQueTtcblxuICAgICAgICAgIGlmIChsZWZ0ICsgcGlja2VyV2lkdGggPiBwYXJlbnQuY2xpZW50V2lkdGgpIHtcbiAgICAgICAgICAgIGxlZnQgKz0gY29vcmRzLndpZHRoIC0gcGlja2VyV2lkdGg7XG4gICAgICAgICAgICByZXBvc2l0aW9uLmxlZnQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0b3AgKyBwaWNrZXJIZWlnaHQgPiBwYXJlbnQuY2xpZW50SGVpZ2h0IC0gcGFyZW50TWFyZ2luVG9wKSB7XG4gICAgICAgICAgICBpZiAocGlja2VySGVpZ2h0ICsgc2V0dGluZ3MubWFyZ2luIDw9IGNvb3Jkcy50b3AgLSAob2Zmc2V0LnkgLSBzY3JvbGxZKSkge1xuICAgICAgICAgICAgICB0b3AgLT0gY29vcmRzLmhlaWdodCArIHBpY2tlckhlaWdodCArIHNldHRpbmdzLm1hcmdpbiAqIDI7XG4gICAgICAgICAgICAgIHJlcG9zaXRpb24udG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0b3AgKz0gcGFyZW50LnNjcm9sbFRvcDtcblxuICAgICAgICAgIC8vIE90aGVyd2lzZSBzZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSB3aG9sZSBkb2N1bWVudFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChsZWZ0ICsgcGlja2VyV2lkdGggPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIHtcbiAgICAgICAgICAgIGxlZnQgKz0gY29vcmRzLndpZHRoIC0gcGlja2VyV2lkdGg7XG4gICAgICAgICAgICByZXBvc2l0aW9uLmxlZnQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0b3AgKyBwaWNrZXJIZWlnaHQgLSBzY3JvbGxZID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgaWYgKHBpY2tlckhlaWdodCArIHNldHRpbmdzLm1hcmdpbiA8PSBjb29yZHMudG9wKSB7XG4gICAgICAgICAgICAgIHRvcCA9IHNjcm9sbFkgKyBjb29yZHMueSAtIHBpY2tlckhlaWdodCAtIHNldHRpbmdzLm1hcmdpbjtcbiAgICAgICAgICAgICAgcmVwb3NpdGlvbi50b3AgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBpY2tlci5jbGFzc0xpc3QudG9nZ2xlKCdjbHItbGVmdCcsIHJlcG9zaXRpb24ubGVmdCk7XG4gICAgICAgIHBpY2tlci5jbGFzc0xpc3QudG9nZ2xlKCdjbHItdG9wJywgcmVwb3NpdGlvbi50b3ApO1xuICAgICAgICBwaWNrZXIuc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG4gICAgICAgIHBpY2tlci5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XG4gICAgICAgIG9mZnNldC54ICs9IHBpY2tlci5vZmZzZXRMZWZ0O1xuICAgICAgICBvZmZzZXQueSArPSBwaWNrZXIub2Zmc2V0VG9wO1xuICAgICAgfVxuXG4gICAgICBjb2xvckFyZWFEaW1zID0ge1xuICAgICAgICB3aWR0aDogY29sb3JBcmVhLm9mZnNldFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvbG9yQXJlYS5vZmZzZXRIZWlnaHQsXG4gICAgICAgIHg6IGNvbG9yQXJlYS5vZmZzZXRMZWZ0ICsgb2Zmc2V0LngsXG4gICAgICAgIHk6IGNvbG9yQXJlYS5vZmZzZXRUb3AgKyBvZmZzZXQueVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFdyYXAgdGhlIGxpbmtlZCBpbnB1dCBmaWVsZHMgaW4gYSBkaXYgdGhhdCBhZGRzIGEgY29sb3IgcHJldmlldy5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBPbmUgb3IgbW9yZSBzZWxlY3RvcnMgcG9pbnRpbmcgdG8gaW5wdXQgZmllbGRzLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gd3JhcEZpZWxkcyhzZWxlY3Rvcikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBmaWVsZC5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmICghcGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsci1maWVsZCcpKSB7XG4gICAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB2YXIgY2xhc3NlcyA9ICdjbHItZmllbGQnO1xuXG4gICAgICAgICAgaWYgKHNldHRpbmdzLnJ0bCB8fCBmaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsci1ydGwnKSkge1xuICAgICAgICAgICAgY2xhc3NlcyArPSAnIGNsci1ydGwnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gXCI8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJjbHItb3Blbi1sYWJlbFxcXCI+PC9idXR0b24+XCI7XG4gICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZmllbGQpO1xuICAgICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzZXMpO1xuICAgICAgICAgIHdyYXBwZXIuc3R5bGUuY29sb3IgPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZSB0aGUgY29sb3IgcGlja2VyLlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmV2ZXJ0XSBJZiB0cnVlLCByZXZlcnQgdGhlIGNvbG9yIHRvIHRoZSBvcmlnaW5hbCB2YWx1ZS5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNsb3NlUGlja2VyKHJldmVydCkge1xuICAgICAgaWYgKGN1cnJlbnRFbCAmJiAhc2V0dGluZ3MuaW5saW5lKSB7XG4gICAgICAgIHZhciBwcmV2RWwgPSBjdXJyZW50RWw7XG5cbiAgICAgICAgLy8gUmV2ZXJ0IHRoZSBjb2xvciB0byB0aGUgb3JpZ2luYWwgdmFsdWUgaWYgbmVlZGVkXG4gICAgICAgIGlmIChyZXZlcnQpIHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgcHJldmVudCB0aGUgXCJjaGFuZ2VcIiBldmVudCBvbiB0aGUgY29sb3JWYWx1ZSBpbnB1dCB0byBleGVjdXRlIGl0cyBoYW5kbGVyXG4gICAgICAgICAgY3VycmVudEVsID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgaWYgKG9sZENvbG9yICE9PSBwcmV2RWwudmFsdWUpIHtcbiAgICAgICAgICAgIHByZXZFbC52YWx1ZSA9IG9sZENvbG9yO1xuXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGFuIFwiaW5wdXRcIiBldmVudCB0byBmb3JjZSB1cGRhdGUgdGhlIHRodW1ibmFpbCBuZXh0IHRvIHRoZSBpbnB1dCBmaWVsZFxuICAgICAgICAgICAgcHJldkVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJpZ2dlciBhIFwiY2hhbmdlXCIgZXZlbnQgaWYgbmVlZGVkXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgey8vIEFkZCB0aGlzIHRvIHRoZSBlbmQgb2YgdGhlIGV2ZW50IGxvb3BcbiAgICAgICAgICBpZiAob2xkQ29sb3IgIT09IHByZXZFbC52YWx1ZSkge1xuICAgICAgICAgICAgcHJldkVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSGlkZSB0aGUgcGlja2VyIGRpYWxvZ1xuICAgICAgICBwaWNrZXIuY2xhc3NMaXN0LnJlbW92ZSgnY2xyLW9wZW4nKTtcblxuICAgICAgICAvLyBSZXNldCBhbnkgcHJldmlvdXNseSBzZXQgcGVyLWluc3RhbmNlIG9wdGlvbnNcbiAgICAgICAgaWYgKGhhc0luc3RhbmNlKSB7XG4gICAgICAgICAgcmVzZXRWaXJ0dWFsSW5zdGFuY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyaWdnZXIgYSBcImNsb3NlXCIgZXZlbnRcbiAgICAgICAgcHJldkVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbG9zZScsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmZvY3VzSW5wdXQpIHtcbiAgICAgICAgICBwcmV2RWwuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBlc3NlbnRpYWxseSBtYXJrcyB0aGUgcGlja2VyIGFzIGNsb3NlZFxuICAgICAgICBjdXJyZW50RWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGFjdGl2ZSBjb2xvciBmcm9tIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciBTdHJpbmcgcmVwcmVzZW50aW5nIGEgY29sb3IuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRDb2xvckZyb21TdHIoc3RyKSB7XG4gICAgICB2YXIgcmdiYSA9IHN0clRvUkdCQShzdHIpO1xuICAgICAgdmFyIGhzdmEgPSBSR0JBdG9IU1ZBKHJnYmEpO1xuXG4gICAgICB1cGRhdGVNYXJrZXJBMTF5TGFiZWwoaHN2YS5zLCBoc3ZhLnYpO1xuICAgICAgdXBkYXRlQ29sb3IocmdiYSwgaHN2YSk7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgVUlcbiAgICAgIGh1ZVNsaWRlci52YWx1ZSA9IGhzdmEuaDtcbiAgICAgIHBpY2tlci5zdHlsZS5jb2xvciA9IFwiaHNsKFwiICsgaHN2YS5oICsgXCIsIDEwMCUsIDUwJSlcIjtcbiAgICAgIGh1ZU1hcmtlci5zdHlsZS5sZWZ0ID0gaHN2YS5oIC8gMzYwICogMTAwICsgXCIlXCI7XG5cbiAgICAgIGNvbG9yTWFya2VyLnN0eWxlLmxlZnQgPSBjb2xvckFyZWFEaW1zLndpZHRoICogaHN2YS5zIC8gMTAwICsgXCJweFwiO1xuICAgICAgY29sb3JNYXJrZXIuc3R5bGUudG9wID0gY29sb3JBcmVhRGltcy5oZWlnaHQgLSBjb2xvckFyZWFEaW1zLmhlaWdodCAqIGhzdmEudiAvIDEwMCArIFwicHhcIjtcblxuICAgICAgYWxwaGFTbGlkZXIudmFsdWUgPSBoc3ZhLmEgKiAxMDA7XG4gICAgICBhbHBoYU1hcmtlci5zdHlsZS5sZWZ0ID0gaHN2YS5hICogMTAwICsgXCIlXCI7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHdWVzcyB0aGUgY29sb3IgZm9ybWF0IGZyb20gYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyByZXByZXNlbnRpbmcgYSBjb2xvci5cclxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGNvbG9yIGZvcm1hdC5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldENvbG9yRm9ybWF0RnJvbVN0cihzdHIpIHtcbiAgICAgIHZhciBmb3JtYXQgPSBzdHIuc3Vic3RyaW5nKDAsIDMpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGlmIChmb3JtYXQgPT09ICdyZ2InIHx8IGZvcm1hdCA9PT0gJ2hzbCcpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICdoZXgnO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ29weSB0aGUgYWN0aXZlIGNvbG9yIHRvIHRoZSBsaW5rZWQgaW5wdXQgZmllbGQuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbG9yXSBDb2xvciB2YWx1ZSB0byBvdmVycmlkZSB0aGUgYWN0aXZlIGNvbG9yLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gcGlja0NvbG9yKGNvbG9yKSB7XG4gICAgICBjb2xvciA9IGNvbG9yICE9PSB1bmRlZmluZWQgPyBjb2xvciA6IGNvbG9yVmFsdWUudmFsdWU7XG5cbiAgICAgIGlmIChjdXJyZW50RWwpIHtcbiAgICAgICAgY3VycmVudEVsLnZhbHVlID0gY29sb3I7XG4gICAgICAgIGN1cnJlbnRFbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2V0dGluZ3Mub25DaGFuZ2UpIHtcbiAgICAgICAgc2V0dGluZ3Mub25DaGFuZ2UuY2FsbCh3aW5kb3csIGNvbG9yLCBjdXJyZW50RWwpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY29sb3JpczpwaWNrJywgeyBkZXRhaWw6IHsgY29sb3I6IGNvbG9yLCBjdXJyZW50RWw6IGN1cnJlbnRFbCB9IH0pKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgYWN0aXZlIGNvbG9yIGJhc2VkIG9uIGEgc3BlY2lmaWMgcG9pbnQgaW4gdGhlIGNvbG9yIGdyYWRpZW50LlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggTGVmdCBwb3NpdGlvbi5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRvcCBwb3NpdGlvbi5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldENvbG9yQXRQb3NpdGlvbih4LCB5KSB7XG4gICAgICB2YXIgaHN2YSA9IHtcbiAgICAgICAgaDogaHVlU2xpZGVyLnZhbHVlICogMSxcbiAgICAgICAgczogeCAvIGNvbG9yQXJlYURpbXMud2lkdGggKiAxMDAsXG4gICAgICAgIHY6IDEwMCAtIHkgLyBjb2xvckFyZWFEaW1zLmhlaWdodCAqIDEwMCxcbiAgICAgICAgYTogYWxwaGFTbGlkZXIudmFsdWUgLyAxMDBcbiAgICAgIH07XG4gICAgICB2YXIgcmdiYSA9IEhTVkF0b1JHQkEoaHN2YSk7XG5cbiAgICAgIHVwZGF0ZU1hcmtlckExMXlMYWJlbChoc3ZhLnMsIGhzdmEudik7XG4gICAgICB1cGRhdGVDb2xvcihyZ2JhLCBoc3ZhKTtcbiAgICAgIHBpY2tDb2xvcigpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb2xvciBtYXJrZXIncyBhY2Nlc3NpYmlsaXR5IGxhYmVsLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNhdHVyYXRpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gdXBkYXRlTWFya2VyQTExeUxhYmVsKHNhdHVyYXRpb24sIHZhbHVlKSB7XG4gICAgICB2YXIgbGFiZWwgPSBzZXR0aW5ncy5hMTF5Lm1hcmtlcjtcblxuICAgICAgc2F0dXJhdGlvbiA9IHNhdHVyYXRpb24udG9GaXhlZCgxKSAqIDE7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRvRml4ZWQoMSkgKiAxO1xuICAgICAgbGFiZWwgPSBsYWJlbC5yZXBsYWNlKCd7c30nLCBzYXR1cmF0aW9uKTtcbiAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSgne3Z9JywgdmFsdWUpO1xuICAgICAgY29sb3JNYXJrZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgIH1cblxuICAgIC8vXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHBhZ2VYIGFuZCBwYWdlWSBwb3NpdGlvbnMgb2YgdGhlIHBvaW50ZXIuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIE1vdXNlRXZlbnQgb3IgVG91Y2hFdmVudCBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBwYWdlWCBhbmQgcGFnZVkgcG9zaXRpb25zLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0UG9pbnRlclBvc2l0aW9uKGV2ZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlWDogZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LnBhZ2VYLFxuICAgICAgICBwYWdlWTogZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LnBhZ2VZXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogTW92ZSB0aGUgY29sb3IgbWFya2VyIHdoZW4gZHJhZ2dlZC5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgTW91c2VFdmVudCBvYmplY3QuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtb3ZlTWFya2VyKGV2ZW50KSB7XG4gICAgICB2YXIgcG9pbnRlciA9IGdldFBvaW50ZXJQb3NpdGlvbihldmVudCk7XG4gICAgICB2YXIgeCA9IHBvaW50ZXIucGFnZVggLSBjb2xvckFyZWFEaW1zLng7XG4gICAgICB2YXIgeSA9IHBvaW50ZXIucGFnZVkgLSBjb2xvckFyZWFEaW1zLnk7XG5cbiAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgeSArPSBjb250YWluZXIuc2Nyb2xsVG9wO1xuICAgICAgfVxuXG4gICAgICBzZXRNYXJrZXJQb3NpdGlvbih4LCB5KTtcblxuICAgICAgLy8gUHJldmVudCBzY3JvbGxpbmcgd2hpbGUgZHJhZ2dpbmcgdGhlIG1hcmtlclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogTW92ZSB0aGUgY29sb3IgbWFya2VyIHdoZW4gdGhlIGFycm93IGtleXMgYXJlIHByZXNzZWQuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0WCBUaGUgaG9yaXpvbnRhbCBhbW91bnQgdG8gbW92ZS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRZIFRoZSB2ZXJ0aWNhbCBhbW91bnQgdG8gbW92ZS5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1vdmVNYXJrZXJPbktleWRvd24ob2Zmc2V0WCwgb2Zmc2V0WSkge1xuICAgICAgdmFyIHggPSBjb2xvck1hcmtlci5zdHlsZS5sZWZ0LnJlcGxhY2UoJ3B4JywgJycpICogMSArIG9mZnNldFg7XG4gICAgICB2YXIgeSA9IGNvbG9yTWFya2VyLnN0eWxlLnRvcC5yZXBsYWNlKCdweCcsICcnKSAqIDEgKyBvZmZzZXRZO1xuXG4gICAgICBzZXRNYXJrZXJQb3NpdGlvbih4LCB5KTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgY29sb3IgbWFya2VyJ3MgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBMZWZ0IHBvc2l0aW9uLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgVG9wIHBvc2l0aW9uLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0TWFya2VyUG9zaXRpb24oeCwgeSkge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSBtYXJrZXIgZG9lc24ndCBnbyBvdXQgb2YgYm91bmRzXG4gICAgICB4ID0geCA8IDAgPyAwIDogeCA+IGNvbG9yQXJlYURpbXMud2lkdGggPyBjb2xvckFyZWFEaW1zLndpZHRoIDogeDtcbiAgICAgIHkgPSB5IDwgMCA/IDAgOiB5ID4gY29sb3JBcmVhRGltcy5oZWlnaHQgPyBjb2xvckFyZWFEaW1zLmhlaWdodCA6IHk7XG5cbiAgICAgIC8vIFNldCB0aGUgcG9zaXRpb25cbiAgICAgIGNvbG9yTWFya2VyLnN0eWxlLmxlZnQgPSB4ICsgXCJweFwiO1xuICAgICAgY29sb3JNYXJrZXIuc3R5bGUudG9wID0geSArIFwicHhcIjtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBjb2xvclxuICAgICAgc2V0Q29sb3JBdFBvc2l0aW9uKHgsIHkpO1xuXG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIG1hcmtlciBpcyBmb2N1c2VkXG4gICAgICBjb2xvck1hcmtlci5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb2xvciBwaWNrZXIncyBpbnB1dCBmaWVsZCBhbmQgcHJldmlldyB0aHVtYi5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZ2JhIFJlZCwgZ3JlZW4sIGJsdWUgYW5kIGFscGhhIHZhbHVlcy5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbaHN2YV0gSHVlLCBzYXR1cmF0aW9uLCB2YWx1ZSBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29sb3IocmdiYSwgaHN2YSkge2lmIChyZ2JhID09PSB2b2lkIDApIHtyZ2JhID0ge307fWlmIChoc3ZhID09PSB2b2lkIDApIHtoc3ZhID0ge307fVxuICAgICAgdmFyIGZvcm1hdCA9IHNldHRpbmdzLmZvcm1hdDtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHJnYmEpIHtcbiAgICAgICAgY3VycmVudENvbG9yW2tleV0gPSByZ2JhW2tleV07XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9rZXkgaW4gaHN2YSkge1xuICAgICAgICBjdXJyZW50Q29sb3JbX2tleV0gPSBoc3ZhW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGV4ID0gUkdCQVRvSGV4KGN1cnJlbnRDb2xvcik7XG4gICAgICB2YXIgb3BhcXVlSGV4ID0gaGV4LnN1YnN0cmluZygwLCA3KTtcblxuICAgICAgY29sb3JNYXJrZXIuc3R5bGUuY29sb3IgPSBvcGFxdWVIZXg7XG4gICAgICBhbHBoYU1hcmtlci5wYXJlbnROb2RlLnN0eWxlLmNvbG9yID0gb3BhcXVlSGV4O1xuICAgICAgYWxwaGFNYXJrZXIuc3R5bGUuY29sb3IgPSBoZXg7XG4gICAgICBjb2xvclByZXZpZXcuc3R5bGUuY29sb3IgPSBoZXg7XG5cbiAgICAgIC8vIEZvcmNlIHJlcGFpbnQgdGhlIGNvbG9yIGFuZCBhbHBoYSBncmFkaWVudHMgYXMgYSB3b3JrYXJvdW5kIGZvciBhIEdvb2dsZSBDaHJvbWUgYnVnXG4gICAgICBjb2xvckFyZWEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGNvbG9yQXJlYS5vZmZzZXRIZWlnaHQ7XG4gICAgICBjb2xvckFyZWEuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgYWxwaGFNYXJrZXIubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBhbHBoYU1hcmtlci5uZXh0RWxlbWVudFNpYmxpbmcub2Zmc2V0SGVpZ2h0O1xuICAgICAgYWxwaGFNYXJrZXIubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnJztcblxuICAgICAgaWYgKGZvcm1hdCA9PT0gJ21peGVkJykge1xuICAgICAgICBmb3JtYXQgPSBjdXJyZW50Q29sb3IuYSA9PT0gMSA/ICdoZXgnIDogJ3JnYic7XG4gICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIGZvcm1hdCA9IGN1cnJlbnRGb3JtYXQ7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgICAgY29sb3JWYWx1ZS52YWx1ZSA9IGhleDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmdiJzpcbiAgICAgICAgICBjb2xvclZhbHVlLnZhbHVlID0gUkdCQVRvU3RyKGN1cnJlbnRDb2xvcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2hzbCc6XG4gICAgICAgICAgY29sb3JWYWx1ZS52YWx1ZSA9IEhTTEFUb1N0cihIU1ZBdG9IU0xBKGN1cnJlbnRDb2xvcikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWxlY3QgdGhlIGN1cnJlbnQgZm9ybWF0IGluIHRoZSBmb3JtYXQgc3dpdGNoZXJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xyLWZvcm1hdCBbdmFsdWU9XFxcIlwiICsgZm9ybWF0ICsgXCJcXFwiXVwiKS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgaHVlIHdoZW4gaXRzIHNsaWRlciBpcyBtb3ZlZC5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldEh1ZSgpIHtcbiAgICAgIHZhciBodWUgPSBodWVTbGlkZXIudmFsdWUgKiAxO1xuICAgICAgdmFyIHggPSBjb2xvck1hcmtlci5zdHlsZS5sZWZ0LnJlcGxhY2UoJ3B4JywgJycpICogMTtcbiAgICAgIHZhciB5ID0gY29sb3JNYXJrZXIuc3R5bGUudG9wLnJlcGxhY2UoJ3B4JywgJycpICogMTtcblxuICAgICAgcGlja2VyLnN0eWxlLmNvbG9yID0gXCJoc2woXCIgKyBodWUgKyBcIiwgMTAwJSwgNTAlKVwiO1xuICAgICAgaHVlTWFya2VyLnN0eWxlLmxlZnQgPSBodWUgLyAzNjAgKiAxMDAgKyBcIiVcIjtcblxuICAgICAgc2V0Q29sb3JBdFBvc2l0aW9uKHgsIHkpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBhbHBoYSB3aGVuIGl0cyBzbGlkZXIgaXMgbW92ZWQuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRBbHBoYSgpIHtcbiAgICAgIHZhciBhbHBoYSA9IGFscGhhU2xpZGVyLnZhbHVlIC8gMTAwO1xuXG4gICAgICBhbHBoYU1hcmtlci5zdHlsZS5sZWZ0ID0gYWxwaGEgKiAxMDAgKyBcIiVcIjtcbiAgICAgIHVwZGF0ZUNvbG9yKHsgYTogYWxwaGEgfSk7XG4gICAgICBwaWNrQ29sb3IoKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgSFNWQSB0byBSR0JBLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGhzdmEgSHVlLCBzYXR1cmF0aW9uLCB2YWx1ZSBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBSZWQsIGdyZWVuLCBibHVlIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBIU1ZBdG9SR0JBKGhzdmEpIHtcbiAgICAgIHZhciBzYXR1cmF0aW9uID0gaHN2YS5zIC8gMTAwO1xuICAgICAgdmFyIHZhbHVlID0gaHN2YS52IC8gMTAwO1xuICAgICAgdmFyIGNocm9tYSA9IHNhdHVyYXRpb24gKiB2YWx1ZTtcbiAgICAgIHZhciBodWVCeTYwID0gaHN2YS5oIC8gNjA7XG4gICAgICB2YXIgeCA9IGNocm9tYSAqICgxIC0gTWF0aC5hYnMoaHVlQnk2MCAlIDIgLSAxKSk7XG4gICAgICB2YXIgbSA9IHZhbHVlIC0gY2hyb21hO1xuXG4gICAgICBjaHJvbWEgPSBjaHJvbWEgKyBtO1xuICAgICAgeCA9IHggKyBtO1xuXG4gICAgICB2YXIgaW5kZXggPSBNYXRoLmZsb29yKGh1ZUJ5NjApICUgNjtcbiAgICAgIHZhciByZWQgPSBbY2hyb21hLCB4LCBtLCBtLCB4LCBjaHJvbWFdW2luZGV4XTtcbiAgICAgIHZhciBncmVlbiA9IFt4LCBjaHJvbWEsIGNocm9tYSwgeCwgbSwgbV1baW5kZXhdO1xuICAgICAgdmFyIGJsdWUgPSBbbSwgbSwgeCwgY2hyb21hLCBjaHJvbWEsIHhdW2luZGV4XTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcjogTWF0aC5yb3VuZChyZWQgKiAyNTUpLFxuICAgICAgICBnOiBNYXRoLnJvdW5kKGdyZWVuICogMjU1KSxcbiAgICAgICAgYjogTWF0aC5yb3VuZChibHVlICogMjU1KSxcbiAgICAgICAgYTogaHN2YS5hXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBIU1ZBIHRvIEhTTEEuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaHN2YSBIdWUsIHNhdHVyYXRpb24sIHZhbHVlIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IEh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBIU1ZBdG9IU0xBKGhzdmEpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGhzdmEudiAvIDEwMDtcbiAgICAgIHZhciBsaWdodG5lc3MgPSB2YWx1ZSAqICgxIC0gaHN2YS5zIC8gMTAwIC8gMik7XG4gICAgICB2YXIgc2F0dXJhdGlvbjtcblxuICAgICAgaWYgKGxpZ2h0bmVzcyA+IDAgJiYgbGlnaHRuZXNzIDwgMSkge1xuICAgICAgICBzYXR1cmF0aW9uID0gTWF0aC5yb3VuZCgodmFsdWUgLSBsaWdodG5lc3MpIC8gTWF0aC5taW4obGlnaHRuZXNzLCAxIC0gbGlnaHRuZXNzKSAqIDEwMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGg6IGhzdmEuaCxcbiAgICAgICAgczogc2F0dXJhdGlvbiB8fCAwLFxuICAgICAgICBsOiBNYXRoLnJvdW5kKGxpZ2h0bmVzcyAqIDEwMCksXG4gICAgICAgIGE6IGhzdmEuYVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgUkdCQSB0byBIU1ZBLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJnYmEgUmVkLCBncmVlbiwgYmx1ZSBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBIdWUsIHNhdHVyYXRpb24sIHZhbHVlIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSR0JBdG9IU1ZBKHJnYmEpIHtcbiAgICAgIHZhciByZWQgPSByZ2JhLnIgLyAyNTU7XG4gICAgICB2YXIgZ3JlZW4gPSByZ2JhLmcgLyAyNTU7XG4gICAgICB2YXIgYmx1ZSA9IHJnYmEuYiAvIDI1NTtcbiAgICAgIHZhciB4bWF4ID0gTWF0aC5tYXgocmVkLCBncmVlbiwgYmx1ZSk7XG4gICAgICB2YXIgeG1pbiA9IE1hdGgubWluKHJlZCwgZ3JlZW4sIGJsdWUpO1xuICAgICAgdmFyIGNocm9tYSA9IHhtYXggLSB4bWluO1xuICAgICAgdmFyIHZhbHVlID0geG1heDtcbiAgICAgIHZhciBodWUgPSAwO1xuICAgICAgdmFyIHNhdHVyYXRpb24gPSAwO1xuXG4gICAgICBpZiAoY2hyb21hKSB7XG4gICAgICAgIGlmICh4bWF4ID09PSByZWQpIHtodWUgPSAoZ3JlZW4gLSBibHVlKSAvIGNocm9tYTt9XG4gICAgICAgIGlmICh4bWF4ID09PSBncmVlbikge2h1ZSA9IDIgKyAoYmx1ZSAtIHJlZCkgLyBjaHJvbWE7fVxuICAgICAgICBpZiAoeG1heCA9PT0gYmx1ZSkge2h1ZSA9IDQgKyAocmVkIC0gZ3JlZW4pIC8gY2hyb21hO31cbiAgICAgICAgaWYgKHhtYXgpIHtzYXR1cmF0aW9uID0gY2hyb21hIC8geG1heDt9XG4gICAgICB9XG5cbiAgICAgIGh1ZSA9IE1hdGguZmxvb3IoaHVlICogNjApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoOiBodWUgPCAwID8gaHVlICsgMzYwIDogaHVlLFxuICAgICAgICBzOiBNYXRoLnJvdW5kKHNhdHVyYXRpb24gKiAxMDApLFxuICAgICAgICB2OiBNYXRoLnJvdW5kKHZhbHVlICogMTAwKSxcbiAgICAgICAgYTogcmdiYS5hXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogUGFyc2UgYSBzdHJpbmcgdG8gUkdCQS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgU3RyaW5nIHJlcHJlc2VudGluZyBhIGNvbG9yLlxyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBSZWQsIGdyZWVuLCBibHVlIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdHJUb1JHQkEoc3RyKSB7XG4gICAgICB2YXIgcmVnZXggPSAvXigocmdiYSl8cmdiKVtcXERdKyhbXFxkLl0rKVtcXERdKyhbXFxkLl0rKVtcXERdKyhbXFxkLl0rKVtcXERdKj8oW1xcZC5dK3wkKS9pO1xuICAgICAgdmFyIG1hdGNoLCByZ2JhO1xuXG4gICAgICAvLyBEZWZhdWx0IHRvIGJsYWNrIGZvciBpbnZhbGlkIGNvbG9yIHN0cmluZ3NcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG5cbiAgICAgIC8vIFVzZSBjYW52YXMgdG8gY29udmVydCB0aGUgc3RyaW5nIHRvIGEgdmFsaWQgY29sb3Igc3RyaW5nXG4gICAgICBjdHguZmlsbFN0eWxlID0gc3RyO1xuICAgICAgbWF0Y2ggPSByZWdleC5leGVjKGN0eC5maWxsU3R5bGUpO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmdiYSA9IHtcbiAgICAgICAgICByOiBtYXRjaFszXSAqIDEsXG4gICAgICAgICAgZzogbWF0Y2hbNF0gKiAxLFxuICAgICAgICAgIGI6IG1hdGNoWzVdICogMSxcbiAgICAgICAgICBhOiBtYXRjaFs2XSAqIDFcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBXb3JrYXJvdW5kIHRvIG1pdGlnYXRlIGEgQ2hyb21pdW0gYnVnIHdoZXJlIHRoZSBhbHBoYSB2YWx1ZSBpcyByb3VuZGVkIGluY29ycmVjdGx5XG4gICAgICAgIHJnYmEuYSA9ICtyZ2JhLmEudG9GaXhlZCgyKTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0Y2ggPSBjdHguZmlsbFN0eWxlLnJlcGxhY2UoJyMnLCAnJykubWF0Y2goLy57Mn0vZykubWFwKGZ1bmN0aW9uIChoKSB7cmV0dXJuIHBhcnNlSW50KGgsIDE2KTt9KTtcbiAgICAgICAgcmdiYSA9IHtcbiAgICAgICAgICByOiBtYXRjaFswXSxcbiAgICAgICAgICBnOiBtYXRjaFsxXSxcbiAgICAgICAgICBiOiBtYXRjaFsyXSxcbiAgICAgICAgICBhOiAxXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZ2JhO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBSR0JBIHRvIEhleC5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZ2JhIFJlZCwgZ3JlZW4sIGJsdWUgYW5kIGFscGhhIHZhbHVlcy5cclxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gSGV4IGNvbG9yIHN0cmluZy5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFJHQkFUb0hleChyZ2JhKSB7XG4gICAgICB2YXIgUiA9IHJnYmEuci50b1N0cmluZygxNik7XG4gICAgICB2YXIgRyA9IHJnYmEuZy50b1N0cmluZygxNik7XG4gICAgICB2YXIgQiA9IHJnYmEuYi50b1N0cmluZygxNik7XG4gICAgICB2YXIgQSA9ICcnO1xuXG4gICAgICBpZiAocmdiYS5yIDwgMTYpIHtcbiAgICAgICAgUiA9ICcwJyArIFI7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZ2JhLmcgPCAxNikge1xuICAgICAgICBHID0gJzAnICsgRztcbiAgICAgIH1cblxuICAgICAgaWYgKHJnYmEuYiA8IDE2KSB7XG4gICAgICAgIEIgPSAnMCcgKyBCO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2V0dGluZ3MuYWxwaGEgJiYgKHJnYmEuYSA8IDEgfHwgc2V0dGluZ3MuZm9yY2VBbHBoYSkpIHtcbiAgICAgICAgdmFyIGFscGhhID0gcmdiYS5hICogMjU1IHwgMDtcbiAgICAgICAgQSA9IGFscGhhLnRvU3RyaW5nKDE2KTtcblxuICAgICAgICBpZiAoYWxwaGEgPCAxNikge1xuICAgICAgICAgIEEgPSAnMCcgKyBBO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnIycgKyBSICsgRyArIEIgKyBBO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBSR0JBIHZhbHVlcyB0byBhIENTUyByZ2IvcmdiYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmdiYSBSZWQsIGdyZWVuLCBibHVlIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IENTUyBjb2xvciBzdHJpbmcuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSR0JBVG9TdHIocmdiYSkge1xuICAgICAgaWYgKCFzZXR0aW5ncy5hbHBoYSB8fCByZ2JhLmEgPT09IDEgJiYgIXNldHRpbmdzLmZvcmNlQWxwaGEpIHtcbiAgICAgICAgcmV0dXJuIFwicmdiKFwiICsgcmdiYS5yICsgXCIsIFwiICsgcmdiYS5nICsgXCIsIFwiICsgcmdiYS5iICsgXCIpXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiYS5yICsgXCIsIFwiICsgcmdiYS5nICsgXCIsIFwiICsgcmdiYS5iICsgXCIsIFwiICsgcmdiYS5hICsgXCIpXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IEhTTEEgdmFsdWVzIHRvIGEgQ1NTIGhzbC9oc2xhIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBoc2xhIEh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IENTUyBjb2xvciBzdHJpbmcuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBIU0xBVG9TdHIoaHNsYSkge1xuICAgICAgaWYgKCFzZXR0aW5ncy5hbHBoYSB8fCBoc2xhLmEgPT09IDEgJiYgIXNldHRpbmdzLmZvcmNlQWxwaGEpIHtcbiAgICAgICAgcmV0dXJuIFwiaHNsKFwiICsgaHNsYS5oICsgXCIsIFwiICsgaHNsYS5zICsgXCIlLCBcIiArIGhzbGEubCArIFwiJSlcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcImhzbGEoXCIgKyBoc2xhLmggKyBcIiwgXCIgKyBoc2xhLnMgKyBcIiUsIFwiICsgaHNsYS5sICsgXCIlLCBcIiArIGhzbGEuYSArIFwiKVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogSW5pdCB0aGUgY29sb3IgcGlja2VyLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xyLXBpY2tlcicpKSByZXR1cm47IC8vKiogRE8gTk9UIFJFTU9WRTogUHJldmVudCBiaW5kaW5nIGV2ZW50cyBtdWx0aXBsZSB0aW1lc1xuICAgICAgLy8gUmVuZGVyIHRoZSBVSVxuICAgICAgY29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgICAgcGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwaWNrZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjbHItcGlja2VyJyk7XG4gICAgICBwaWNrZXIuY2xhc3NOYW1lID0gJ2Nsci1waWNrZXInO1xuICAgICAgcGlja2VyLmlubmVySFRNTCA9XG4gICAgICBcIjxpbnB1dCBpZD1cXFwiY2xyLWNvbG9yLXZhbHVlXFxcIiBuYW1lPVxcXCJjbHItY29sb3ItdmFsdWVcXFwiIGNsYXNzPVxcXCJjbHItY29sb3JcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcXFwiIHNwZWxsY2hlY2s9XFxcImZhbHNlXFxcIiBhcmlhLWxhYmVsPVxcXCJcIiArIHNldHRpbmdzLmExMXkuaW5wdXQgKyBcIlxcXCI+XCIgKyAoXCI8ZGl2IGlkPVxcXCJjbHItY29sb3ItYXJlYVxcXCIgY2xhc3M9XFxcImNsci1ncmFkaWVudFxcXCIgcm9sZT1cXFwiYXBwbGljYXRpb25cXFwiIGFyaWEtbGFiZWw9XFxcIlwiICtcbiAgICAgIHNldHRpbmdzLmExMXkuaW5zdHJ1Y3Rpb24gKyBcIlxcXCI+XCIpICtcbiAgICAgICc8ZGl2IGlkPVwiY2xyLWNvbG9yLW1hcmtlclwiIGNsYXNzPVwiY2xyLW1hcmtlclwiIHRhYmluZGV4PVwiMFwiPjwvZGl2PicgK1xuICAgICAgJzwvZGl2PicgK1xuICAgICAgJzxkaXYgY2xhc3M9XCJjbHItaHVlXCI+JyArIChcIjxpbnB1dCBpZD1cXFwiY2xyLWh1ZS1zbGlkZXJcXFwiIG5hbWU9XFxcImNsci1odWUtc2xpZGVyXFxcIiB0eXBlPVxcXCJyYW5nZVxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjM2MFxcXCIgc3RlcD1cXFwiMVxcXCIgYXJpYS1sYWJlbD1cXFwiXCIgK1xuICAgICAgc2V0dGluZ3MuYTExeS5odWVTbGlkZXIgKyBcIlxcXCI+XCIpICtcbiAgICAgICc8ZGl2IGlkPVwiY2xyLWh1ZS1tYXJrZXJcIj48L2Rpdj4nICtcbiAgICAgICc8L2Rpdj4nICtcbiAgICAgICc8ZGl2IGNsYXNzPVwiY2xyLWFscGhhXCI+JyArIChcIjxpbnB1dCBpZD1cXFwiY2xyLWFscGhhLXNsaWRlclxcXCIgbmFtZT1cXFwiY2xyLWFscGhhLXNsaWRlclxcXCIgdHlwZT1cXFwicmFuZ2VcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIxMDBcXFwiIHN0ZXA9XFxcIjFcXFwiIGFyaWEtbGFiZWw9XFxcIlwiICtcbiAgICAgIHNldHRpbmdzLmExMXkuYWxwaGFTbGlkZXIgKyBcIlxcXCI+XCIpICtcbiAgICAgICc8ZGl2IGlkPVwiY2xyLWFscGhhLW1hcmtlclwiPjwvZGl2PicgK1xuICAgICAgJzxzcGFuPjwvc3Bhbj4nICtcbiAgICAgICc8L2Rpdj4nICtcbiAgICAgICc8ZGl2IGlkPVwiY2xyLWZvcm1hdFwiIGNsYXNzPVwiY2xyLWZvcm1hdFwiPicgK1xuICAgICAgJzxmaWVsZHNldCBjbGFzcz1cImNsci1zZWdtZW50ZWRcIj4nICsgKFwiPGxlZ2VuZD5cIiArXG4gICAgICBzZXR0aW5ncy5hMTF5LmZvcm1hdCArIFwiPC9sZWdlbmQ+XCIpICtcbiAgICAgICc8aW5wdXQgaWQ9XCJjbHItZjFcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2xyLWZvcm1hdFwiIHZhbHVlPVwiaGV4XCI+JyArXG4gICAgICAnPGxhYmVsIGZvcj1cImNsci1mMVwiPkhleDwvbGFiZWw+JyArXG4gICAgICAnPGlucHV0IGlkPVwiY2xyLWYyXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNsci1mb3JtYXRcIiB2YWx1ZT1cInJnYlwiPicgK1xuICAgICAgJzxsYWJlbCBmb3I9XCJjbHItZjJcIj5SR0I8L2xhYmVsPicgK1xuICAgICAgJzxpbnB1dCBpZD1cImNsci1mM1wiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjbHItZm9ybWF0XCIgdmFsdWU9XCJoc2xcIj4nICtcbiAgICAgICc8bGFiZWwgZm9yPVwiY2xyLWYzXCI+SFNMPC9sYWJlbD4nICtcbiAgICAgICc8c3Bhbj48L3NwYW4+JyArXG4gICAgICAnPC9maWVsZHNldD4nICtcbiAgICAgICc8L2Rpdj4nICtcbiAgICAgICc8ZGl2IGlkPVwiY2xyLXN3YXRjaGVzXCIgY2xhc3M9XCJjbHItc3dhdGNoZXNcIj48L2Rpdj4nICsgKFwiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJjbHItY2xlYXJcXFwiIGNsYXNzPVxcXCJjbHItY2xlYXJcXFwiIGFyaWEtbGFiZWw9XFxcIlwiICtcbiAgICAgIHNldHRpbmdzLmExMXkuY2xlYXIgKyBcIlxcXCI+XCIgKyBzZXR0aW5ncy5jbGVhckxhYmVsICsgXCI8L2J1dHRvbj5cIikgK1xuICAgICAgJzxkaXYgaWQ9XCJjbHItY29sb3ItcHJldmlld1wiIGNsYXNzPVwiY2xyLXByZXZpZXdcIj4nICsgKFwiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJjbHItY2xvc2VcXFwiIGNsYXNzPVxcXCJjbHItY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIlwiICtcbiAgICAgIHNldHRpbmdzLmExMXkuY2xvc2UgKyBcIlxcXCI+XCIgKyBzZXR0aW5ncy5jbG9zZUxhYmVsICsgXCI8L2J1dHRvbj5cIikgK1xuICAgICAgJzwvZGl2PicgKyAoXCI8c3BhbiBpZD1cXFwiY2xyLW9wZW4tbGFiZWxcXFwiIGhpZGRlbj5cIiArXG4gICAgICBzZXR0aW5ncy5hMTF5Lm9wZW4gKyBcIjwvc3Bhbj5cIikgKyAoXCI8c3BhbiBpZD1cXFwiY2xyLXN3YXRjaC1sYWJlbFxcXCIgaGlkZGVuPlwiICtcbiAgICAgIHNldHRpbmdzLmExMXkuc3dhdGNoICsgXCI8L3NwYW4+XCIpO1xuXG4gICAgICAvLyBBcHBlbmQgdGhlIGNvbG9yIHBpY2tlciB0byB0aGUgRE9NXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBpY2tlcik7XG5cbiAgICAgIC8vIFJlZmVyZW5jZSB0aGUgVUkgZWxlbWVudHNcbiAgICAgIGNvbG9yQXJlYSA9IGdldEVsKCdjbHItY29sb3ItYXJlYScpO1xuICAgICAgY29sb3JNYXJrZXIgPSBnZXRFbCgnY2xyLWNvbG9yLW1hcmtlcicpO1xuICAgICAgY2xlYXJCdXR0b24gPSBnZXRFbCgnY2xyLWNsZWFyJyk7XG4gICAgICBjbG9zZUJ1dHRvbiA9IGdldEVsKCdjbHItY2xvc2UnKTtcbiAgICAgIGNvbG9yUHJldmlldyA9IGdldEVsKCdjbHItY29sb3ItcHJldmlldycpO1xuICAgICAgY29sb3JWYWx1ZSA9IGdldEVsKCdjbHItY29sb3ItdmFsdWUnKTtcbiAgICAgIGh1ZVNsaWRlciA9IGdldEVsKCdjbHItaHVlLXNsaWRlcicpO1xuICAgICAgaHVlTWFya2VyID0gZ2V0RWwoJ2Nsci1odWUtbWFya2VyJyk7XG4gICAgICBhbHBoYVNsaWRlciA9IGdldEVsKCdjbHItYWxwaGEtc2xpZGVyJyk7XG4gICAgICBhbHBoYU1hcmtlciA9IGdldEVsKCdjbHItYWxwaGEtbWFya2VyJyk7XG5cbiAgICAgIC8vIEJpbmQgdGhlIHBpY2tlciB0byB0aGUgZGVmYXVsdCBzZWxlY3RvclxuICAgICAgYmluZEZpZWxkcyhzZXR0aW5ncy5lbCk7XG4gICAgICB3cmFwRmllbGRzKHNldHRpbmdzLmVsKTtcblxuICAgICAgYWRkTGlzdGVuZXIocGlja2VyLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHBpY2tlci5jbGFzc0xpc3QucmVtb3ZlKCdjbHIta2V5Ym9hcmQtbmF2Jyk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGNvbG9yQXJlYSwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBhZGRMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdmVNYXJrZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGNvbG9yQXJlYSwgJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgbW92ZU1hcmtlciwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGRMaXN0ZW5lcihjb2xvck1hcmtlciwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBhZGRMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdmVNYXJrZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGNvbG9yTWFya2VyLCAndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBtb3ZlTWFya2VyLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGNvbG9yVmFsdWUsICdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gY29sb3JWYWx1ZS52YWx1ZTtcblxuICAgICAgICBpZiAoY3VycmVudEVsIHx8IHNldHRpbmdzLmlubGluZSkge1xuICAgICAgICAgIHZhciBjb2xvciA9IHZhbHVlID09PSAnJyA/IHZhbHVlIDogc2V0Q29sb3JGcm9tU3RyKHZhbHVlKTtcbiAgICAgICAgICBwaWNrQ29sb3IoY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgYWRkTGlzdGVuZXIoY2xlYXJCdXR0b24sICdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBwaWNrQ29sb3IoJycpO1xuICAgICAgICBjbG9zZVBpY2tlcigpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGNsb3NlQnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcGlja0NvbG9yKCk7XG4gICAgICAgIGNsb3NlUGlja2VyKCk7XG4gICAgICB9KTtcblxuICAgICAgYWRkTGlzdGVuZXIoZ2V0RWwoJ2Nsci1mb3JtYXQnKSwgJ2NsaWNrJywgJy5jbHItZm9ybWF0IGlucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGN1cnJlbnRGb3JtYXQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHVwZGF0ZUNvbG9yKCk7XG4gICAgICAgIHBpY2tDb2xvcigpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKHBpY2tlciwgJ2NsaWNrJywgJy5jbHItc3dhdGNoZXMgYnV0dG9uJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHNldENvbG9yRnJvbVN0cihldmVudC50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICBwaWNrQ29sb3IoKTtcblxuICAgICAgICBpZiAoc2V0dGluZ3Muc3dhdGNoZXNPbmx5KSB7XG4gICAgICAgICAgY2xvc2VQaWNrZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGRvY3VtZW50LCAnbW91c2V1cCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlTWFya2VyKTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGRMaXN0ZW5lcihkb2N1bWVudCwgJ3RvdWNoZW5kJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG1vdmVNYXJrZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGRvY3VtZW50LCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGtleWJvYXJkTmF2ID0gZmFsc2U7XG4gICAgICAgIHBpY2tlci5jbGFzc0xpc3QucmVtb3ZlKCdjbHIta2V5Ym9hcmQtbmF2Jyk7XG4gICAgICAgIGNsb3NlUGlja2VyKCk7XG4gICAgICB9KTtcblxuICAgICAgYWRkTGlzdGVuZXIoZG9jdW1lbnQsICdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXkgPSBldmVudC5rZXk7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICB2YXIgbmF2S2V5cyA9IFsnVGFiJywgJ0Fycm93VXAnLCAnQXJyb3dEb3duJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0J107XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICBjbG9zZVBpY2tlcih0cnVlKTtcblxuICAgICAgICAgIC8vIERpc3BsYXkgZm9jdXMgcmluZ3Mgd2hlbiB1c2luZyB0aGUga2V5Ym9hcmRcbiAgICAgICAgfSBlbHNlIGlmIChuYXZLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBrZXlib2FyZE5hdiA9IHRydWU7XG4gICAgICAgICAgcGlja2VyLmNsYXNzTGlzdC5hZGQoJ2Nsci1rZXlib2FyZC1uYXYnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyYXAgdGhlIGZvY3VzIHdpdGhpbiB0aGUgY29sb3IgcGlja2VyIHdoaWxlIGl0J3Mgb3BlblxuICAgICAgICBpZiAoa2V5ID09PSAnVGFiJyAmJiB0YXJnZXQubWF0Y2hlcygnLmNsci1waWNrZXIgKicpKSB7XG4gICAgICAgICAgdmFyIGZvY3VzYWJsZXMgPSBnZXRGb2N1c2FibGVFbGVtZW50cygpO1xuICAgICAgICAgIHZhciBmaXJzdEZvY3VzYWJsZSA9IGZvY3VzYWJsZXMuc2hpZnQoKTtcbiAgICAgICAgICB2YXIgbGFzdEZvY3VzYWJsZSA9IGZvY3VzYWJsZXMucG9wKCk7XG5cbiAgICAgICAgICBpZiAoc2hpZnRLZXkgJiYgdGFyZ2V0ID09PSBmaXJzdEZvY3VzYWJsZSkge1xuICAgICAgICAgICAgbGFzdEZvY3VzYWJsZS5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFzaGlmdEtleSAmJiB0YXJnZXQgPT09IGxhc3RGb2N1c2FibGUpIHtcbiAgICAgICAgICAgIGZpcnN0Rm9jdXNhYmxlLmZvY3VzKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGRvY3VtZW50LCAnY2xpY2snLCAnLmNsci1maWVsZCBidXR0b24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gUmVzZXQgYW55IHByZXZpb3VzbHkgc2V0IHBlci1pbnN0YW5jZSBvcHRpb25zXG4gICAgICAgIGlmIChoYXNJbnN0YW5jZSkge1xuICAgICAgICAgIHJlc2V0VmlydHVhbEluc3RhbmNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPcGVuIHRoZSBjb2xvciBwaWNrZXJcbiAgICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGNvbG9yTWFya2VyLCAna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgbW92ZW1lbnRzID0ge1xuICAgICAgICAgIEFycm93VXA6IFswLCAtMV0sXG4gICAgICAgICAgQXJyb3dEb3duOiBbMCwgMV0sXG4gICAgICAgICAgQXJyb3dMZWZ0OiBbLTEsIDBdLFxuICAgICAgICAgIEFycm93UmlnaHQ6IFsxLCAwXVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhtb3ZlbWVudHMpLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcbiAgICAgICAgICBtb3ZlTWFya2VyT25LZXlkb3duLmFwcGx5KHZvaWQgMCwgbW92ZW1lbnRzW2V2ZW50LmtleV0pO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBhZGRMaXN0ZW5lcihjb2xvckFyZWEsICdjbGljaycsIG1vdmVNYXJrZXIpO1xuICAgICAgYWRkTGlzdGVuZXIoaHVlU2xpZGVyLCAnaW5wdXQnLCBzZXRIdWUpO1xuICAgICAgYWRkTGlzdGVuZXIoYWxwaGFTbGlkZXIsICdpbnB1dCcsIHNldEFscGhhKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBhIGxpc3Qgb2YgZm9jdXNhYmxlIGVsZW1lbnRzIHdpdGhpbiB0aGUgY29sb3IgcGlja2VyLlxyXG4gICAgICogQHJldHVybiB7YXJyYXl9IFRoZSBsaXN0IG9mIGZvY3VzYWJsZSBET00gZWxlbW50cy5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldEZvY3VzYWJsZUVsZW1lbnRzKCkge1xuICAgICAgdmFyIGNvbnRyb2xzID0gQXJyYXkuZnJvbShwaWNrZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIGJ1dHRvbicpKTtcbiAgICAgIHZhciBmb2N1c2FibGVzID0gY29udHJvbHMuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7cmV0dXJuICEhbm9kZS5vZmZzZXRXaWR0aDt9KTtcblxuICAgICAgcmV0dXJuIGZvY3VzYWJsZXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTaG9ydGN1dCBmb3IgZ2V0RWxlbWVudEJ5SWQgdG8gb3B0aW1pemUgdGhlIG1pbmlmaWVkIEpTLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBlbGVtZW50IGlkLlxyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgRE9NIGVsZW1lbnQgd2l0aCB0aGUgcHJvdmlkZWQgaWQuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRFbChpZCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNob3J0Y3V0IGZvciBhZGRFdmVudExpc3RlbmVyIHRvIG9wdGltaXplIHRoZSBtaW5pZmllZCBKUy5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIHdoaWNoIHRoZSBsaXN0ZW5lciBpcyBhdHRhY2hlZC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIEV2ZW50IHR5cGUuXHJcbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8ZnVuY3Rpb24pfSBzZWxlY3RvciBFdmVudCB0YXJnZXQgaWYgZGVsZWdhdGlvbiBpcyB1c2VkLCBldmVudCBoYW5kbGVyIGlmIG5vdC5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmbl0gRXZlbnQgaGFuZGxlciBpZiBkZWxlZ2F0aW9uIGlzIHVzZWQuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjb250ZXh0LCB0eXBlLCBzZWxlY3RvciwgZm4pIHtcbiAgICAgIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgICAgLy8gRGVsZWdhdGUgZXZlbnQgdG8gdGhlIHRhcmdldCBvZiB0aGUgc2VsZWN0b3JcbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnRleHQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGV2ZW50LnRhcmdldCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBmbi5jYWxsKGV2ZW50LnRhcmdldCwgZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSWYgdGhlIHNlbGVjdG9yIGlzIG5vdCBhIHN0cmluZyB0aGVuIGl0J3MgYSBmdW5jdGlvblxuICAgICAgICAvLyBpbiB3aGljaCBjYXNlIHdlIG5lZWQgYSByZWd1bGFyIGV2ZW50IGxpc3RlbmVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbiA9IHNlbGVjdG9yO1xuICAgICAgICBjb250ZXh0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ2FsbCBhIGZ1bmN0aW9uIG9ubHkgd2hlbiB0aGUgRE9NIGlzIHJlYWR5LlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwuXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBbYXJnc10gQXJndW1lbnRzIHRvIHBhc3MgdG8gdGhlIGZ1bmN0aW9uLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gRE9NUmVhZHkoZm4sIGFyZ3MpIHtcbiAgICAgIGFyZ3MgPSBhcmdzICE9PSB1bmRlZmluZWQgPyBhcmdzIDogW107XG5cbiAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgZm4uYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm4uYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUG9seWZpbGwgZm9yIE5vZGVsaXN0LmZvckVhY2hcbiAgICBpZiAoTm9kZUxpc3QgIT09IHVuZGVmaW5lZCAmJiBOb2RlTGlzdC5wcm90b3R5cGUgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuICAgIH1cblxuICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvLyoqKioqKiogTlBNOiBDdXN0b20gY29kZSBzdGFydHMgaGVyZSAqKioqKioqKioqKioqKioqXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgLyoqXHJcbiAgICAgKiBDb3B5IHRoZSBhY3RpdmUgY29sb3IgdG8gdGhlIGxpbmtlZCBpbnB1dCBmaWVsZCBhbmQgc2V0IHRoZSBjb2xvci5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3JdIENvbG9yIHZhbHVlIHRvIG92ZXJyaWRlIHRoZSBhY3RpdmUgY29sb3IuXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxlbGVtZW50fSBbdGFyZ2V0XSB0aGUgZWxlbWVudCBzZXR0aW5nIHRoZSBjb2xvciBvblxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0Q29sb3IoY29sb3IsIHRhcmdldCkge1xuICAgICAgY3VycmVudEVsID0gdGFyZ2V0O1xuICAgICAgb2xkQ29sb3IgPSBjdXJyZW50RWwudmFsdWU7XG4gICAgICBhdHRhY2hWaXJ0dWFsSW5zdGFuY2UodGFyZ2V0KTtcbiAgICAgIGN1cnJlbnRGb3JtYXQgPSBnZXRDb2xvckZvcm1hdEZyb21TdHIoY29sb3IpO1xuICAgICAgdXBkYXRlUGlja2VyUG9zaXRpb24oKTtcbiAgICAgIHNldENvbG9yRnJvbVN0cihjb2xvcik7XG4gICAgICBwaWNrQ29sb3IoKTtcbiAgICAgIGlmIChvbGRDb2xvciAhPT0gY29sb3IpIHtcbiAgICAgICAgY3VycmVudEVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV4cG9zZSB0aGUgY29sb3IgcGlja2VyIHRvIHRoZSBnbG9iYWwgc2NvcGVcbiAgICB2YXIgQ29sb3JpcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtZXRob2RzID0ge1xuICAgICAgICBpbml0OiBpbml0LFxuICAgICAgICBzZXQ6IGNvbmZpZ3VyZSxcbiAgICAgICAgd3JhcDogd3JhcEZpZWxkcyxcbiAgICAgICAgY2xvc2U6IGNsb3NlUGlja2VyLFxuICAgICAgICBzZXRJbnN0YW5jZTogc2V0VmlydHVhbEluc3RhbmNlLFxuICAgICAgICBzZXRDb2xvcjogc2V0Q29sb3IsXG4gICAgICAgIHJlbW92ZUluc3RhbmNlOiByZW1vdmVWaXJ0dWFsSW5zdGFuY2UsXG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uOiB1cGRhdGVQaWNrZXJQb3NpdGlvblxuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gQ29sb3JpcyhvcHRpb25zKSB7XG4gICAgICAgIERPTVJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBiaW5kRmllbGRzKG9wdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uZmlndXJlKG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9dmFyIF9sb29wMyA9IGZ1bmN0aW9uIF9sb29wMyhrZXkpXG5cbiAgICAgIHtcbiAgICAgICAgQ29sb3Jpc1trZXldID0gZnVuY3Rpb24gKCkge2ZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjsgX2tleTIrKykge2FyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTt9XG4gICAgICAgICAgRE9NUmVhZHkobWV0aG9kc1trZXldLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH07Zm9yICh2YXIga2V5IGluIG1ldGhvZHMpIHtfbG9vcDMoa2V5KTt9XG5cbiAgICAgIC8vIGhhbmRsZSB3aW5kb3cgcmVzaXplIGV2ZW50cyByZS1hbGlnbmluZyB0aGUgcGFuZWxcbiAgICAgIERPTVJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uIChldmVudCkge0NvbG9yaXMudXBkYXRlUG9zaXRpb24oKTt9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uIChldmVudCkge0NvbG9yaXMudXBkYXRlUG9zaXRpb24oKTt9KTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gQ29sb3JpcztcbiAgICB9KCk7XG5cbiAgICAvLyBFbnN1cmUgaW5pdCBmdW5jdGlvbiBpcyBhdmFpbGFibGUgbm90IG9ubHkgYXMgYXMgYSBkZWZhdWx0IGltcG9ydFxuICAgIENvbG9yaXMuY29sb3JpcyA9IENvbG9yaXM7XG5cbiAgICAvLyBJbml0IHRoZSBjb2xvciBwaWNrZXIgd2hlbiB0aGUgRE9NIGlzIHJlYWR5XG4gICAgcmV0dXJuIENvbG9yaXM7XG5cbiAgfSh3aW5kb3csIGRvY3VtZW50LCBNYXRoKTtcbn0oKTtcblxudmFyIF9jb2xvcmlzID0gQ29sb3Jpcy5jb2xvcmlzO1xudmFyIF9pbml0ID0gQ29sb3Jpcy5pbml0O1xudmFyIF9zZXQgPSBDb2xvcmlzLnNldDtcbnZhciBfd3JhcCA9IENvbG9yaXMud3JhcDtcbnZhciBfY2xvc2UgPSBDb2xvcmlzLmNsb3NlO1xudmFyIF9zZXRJbnN0YW5jZSA9IENvbG9yaXMuc2V0SW5zdGFuY2U7XG52YXIgX3JlbW92ZUluc3RhbmNlID0gQ29sb3Jpcy5yZW1vdmVJbnN0YW5jZTtcbnZhciBfdXBkYXRlUG9zaXRpb24gPSBDb2xvcmlzLnVwZGF0ZVBvc2l0aW9uO1xuZXhwb3J0IGRlZmF1bHQgQ29sb3JpcztcbmV4cG9ydCB7XG4gIF9jb2xvcmlzIGFzIGNvbG9yaXMsXG4gIF9jbG9zZSBhcyBjbG9zZSxcbiAgX2luaXQgYXMgaW5pdCxcbiAgX3NldCBhcyBzZXQsXG4gIF93cmFwIGFzIHdyYXAsXG4gIF9zZXRJbnN0YW5jZSBhcyBzZXRJbnN0YW5jZSxcbiAgX3JlbW92ZUluc3RhbmNlIGFzIHJlbW92ZUluc3RhbmNlLFxuICBfdXBkYXRlUG9zaXRpb24gYXMgdXBkYXRlUG9zaXRpb24gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcHAgZnJvbSBcIi4vY2xhc3Nlcy9hcHAuanNcIjtcclxuXHJcbmxldCBhcHAgPSBuZXcgQXBwKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==