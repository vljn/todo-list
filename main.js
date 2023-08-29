/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"lf8hEzA4aKn1rDj_PBn6","tabs":"nNSyPGcryZQwTIrUVces","main":"aib0H3tSWC710BSy6dlA","todos":"uWqthLArZZnuhE2vtsMo","todos-top":"u2CU35EkMu0f2uquAW4L","todos-bottom":"dm4pQShq3SlD88bzKiMz","new-todo-form":"PEBnUwwU1WGvjF2ju3bV","name-input":"kao5QCQITZmQq5AUAHdc","submit":"c0Ay9vam1KwlbONwt7Zz","todo-screen":"vKNivHxEDxEo2NzSXlEr"});

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"todo":"avBek8qkPJYit3lr8B0Q","left":"BK1Slr59GkKeUpgVb_Sv","color":"sUlo1p2hoQZClWLIQ7Zu","active":"lYXJ0Tqzb0uLDJH9ZvwN"});

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
  #clickHandler;

  constructor() {
    this.projects = [
      new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]("My Todos 1"),
      new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]("My Todos 2"),
      new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]("My Todos 3"),
      new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]("My Todos 4"),
      new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]("My Todos 5"),
    ];
    this.selectedProject = 0;
    this.selectedTodo = -1;

    this.addTodo("My Todo 1", "lorem ipsum", new Date(2023, 7, 28));
    this.addTodo("My Todo 2", "lorem ipsum", new Date(2023, 7, 29));
    this.addTodo("My Todo 3", "lorem ipsum", new Date(2023, 7, 30));
    this.#renderHandler = new _render_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.getState());
    this.#renderHandler.initialRender();
  }

  addProject(name) {
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](name));
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
    this.projects[this.selectedProject].add(new _todo_js__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, date, color));
  }

  getState() {
    return {
      projects: this.projects,
      selectedProject: this.selectedProject,
      selectedTodo: this.selectedTodo,
    };
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

  toString() {
    let r = this.name + " {";
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i] === undefined) continue;
      if (i !== 0) {
        r += ", ";
      }
      r += this.todos[i].toString();
    }
    r += "}";
    return r;
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




//import ClickHandler from "./click.js"; todo

class RenderingHandler {
  #tabContainer;
  #todoContainer;
  #state;
  //#clickHandler;

  constructor(state) {
    this.#state = state;
    //this.#clickHandler = new ClickHandler();
  }

  initialRender() {
    (0,_functions_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this.#tabContainer = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].tabs);
    this.#todoContainer = document.querySelector("." + _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"]["todos-top"]);
    this.renderAll();
  }

  renderAll() {
    this.renderTabs();
    this.renderTodos();
  }

  renderTabs() {
    this.#tabContainer.innerHTML = "";
    this.#state.projects.forEach((project, index) => this.#renderTab(project, index));
  }

  #renderTab(project, index) {
    const tab = document.createElement("div");
    tab.setAttribute("data-index", index);
    tab.className = _styles_tab_css__WEBPACK_IMPORTED_MODULE_2__["default"].tab;

    if (this.#state.selectedProject !== index) {
      tab.classList.remove(_styles_tab_css__WEBPACK_IMPORTED_MODULE_2__["default"].active);
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
        this.#state.projects.splice(index, 1);
        deleted = true;
      }
      if (deleted) {
        if (index === this.#state.selectedProject && index === this.#state.projects.length) {
          this.#state.selectedProject = index - 1;
        } else if (index < this.#state.selectedProject) {
          this.#state.selectedProject = this.#state.selectedProject - 1;
        }
      } else {
        this.#state.selectedProject = index;
      }
      this.update(this.#state);
    });
    this.#tabContainer.appendChild(tab);
  }

  renderTodos() {
    this.#todoContainer.innerHTML = "";
    this.#state.projects[this.#state.selectedProject].todos.forEach((todo, index) =>
      this.#renderTodo(todo, index)
    );
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

    this.#todoContainer.appendChild(todoDiv);
  }

  update(newState) {
    this.#state = newState;
    this.renderAll();
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
    this.checked = !this.checked;
  }

  toString() {
    return this.title + " " + this.description + " " + this.date.toLocaleDateString("sr-RS");
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

  const tabs = document.createElement("div");
  tabs.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"].tabs;
  wrapper.appendChild(tabs);

  const main = document.createElement("div");
  main.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"].main;
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

  const checkIcon = document.createElement("i");
  checkIcon.classList.add("fa-solid", "fa-plus", "fa-xl");
  submitButton.appendChild(checkIcon);

  const todoScreen = document.createElement("div");
  todoScreen.className = _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__["default"]["todo-screen"];
  main.appendChild(todoScreen);

  document.querySelector("body").appendChild(wrapper);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25Cc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBEQUFNO0FBQzVCO0FBQ0E7QUFDQSxtQkFBbUIsMERBQU07QUFDekI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBEQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwREFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMERBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBEQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwREFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMERBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwREFBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMERBQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMERBQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMERBQU07QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQzVEeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tQztBQUNuQztBQUNBLGNBQWMsdURBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy90YWIuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdG9kby5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NsYXNzZXMvYXBwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jbGFzc2VzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NsYXNzZXMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jbGFzc2VzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJ3cmFwcGVyXCI6XCJsZjhoRXpBNGFLbjFyRGpfUEJuNlwiLFwidGFic1wiOlwibk5TeVBHY3J5WlF3VElyVVZjZXNcIixcIm1haW5cIjpcImFpYjBIM3RTV0M3MTBCU3k2ZGxBXCIsXCJ0b2Rvc1wiOlwidVdxdGhMQXJaWm51aEUydnRzTW9cIixcInRvZG9zLXRvcFwiOlwidTJDVTM1RWtNdTBmMnVxdUFXNExcIixcInRvZG9zLWJvdHRvbVwiOlwiZG00cFFTaHEzU2xEODhiektpTXpcIixcIm5ldy10b2RvLWZvcm1cIjpcIlBFQm5Vd3dVMVdHdmpGMmp1M2JWXCIsXCJuYW1lLWlucHV0XCI6XCJrYW81UUNRSVRabVFxNUFVQUhkY1wiLFwic3VibWl0XCI6XCJjMEF5OXZhbTFLd2xiT053dDdaelwiLFwidG9kby1zY3JlZW5cIjpcInZLTml2SHhFRHhFbzJOelNYbEVyXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1widGFiXCI6XCJGZlpIdDd5Zm1oMkFCV3hRSDA3cFwiLFwiYWN0aXZlXCI6XCJld1djM05pcmprM2Q5bXVYakJYWlwiLFwibGVmdFwiOlwiclVZUG9fUGw2WGhseDVtak5QcFFcIixcInJpZ2h0XCI6XCJZOGFHYThmUGJlNzI1ajZRSm40YlwiLFwiaWNvblwiOlwid016WUtWdlZvcFlPRGh6ZE9GdkFcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJ0b2RvXCI6XCJhdkJlazhxa1BKWWl0M2xyOEIwUVwiLFwibGVmdFwiOlwiQksxU2xyNTlHa0tlVXBnVmJfU3ZcIixcImNvbG9yXCI6XCJzVWxvMXAyaG9RWkNsV0xJUTdadVwiLFwiYWN0aXZlXCI6XCJsWVhKMFRxemIwdUxESkg5WnZ3TlwifTsiLCJpbXBvcnQgUmVuZGVySGFuZGxlciBmcm9tIFwiLi9yZW5kZXIuanNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvLmpzXCI7XHJcblxyXG5jbGFzcyBUb2RvQXBwIHtcclxuICAjcmVuZGVySGFuZGxlcjtcclxuICAjY2xpY2tIYW5kbGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXHJcbiAgICAgIG5ldyBQcm9qZWN0KFwiTXkgVG9kb3MgMVwiKSxcclxuICAgICAgbmV3IFByb2plY3QoXCJNeSBUb2RvcyAyXCIpLFxyXG4gICAgICBuZXcgUHJvamVjdChcIk15IFRvZG9zIDNcIiksXHJcbiAgICAgIG5ldyBQcm9qZWN0KFwiTXkgVG9kb3MgNFwiKSxcclxuICAgICAgbmV3IFByb2plY3QoXCJNeSBUb2RvcyA1XCIpLFxyXG4gICAgXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID0gMDtcclxuICAgIHRoaXMuc2VsZWN0ZWRUb2RvID0gLTE7XHJcblxyXG4gICAgdGhpcy5hZGRUb2RvKFwiTXkgVG9kbyAxXCIsIFwibG9yZW0gaXBzdW1cIiwgbmV3IERhdGUoMjAyMywgNywgMjgpKTtcclxuICAgIHRoaXMuYWRkVG9kbyhcIk15IFRvZG8gMlwiLCBcImxvcmVtIGlwc3VtXCIsIG5ldyBEYXRlKDIwMjMsIDcsIDI5KSk7XHJcbiAgICB0aGlzLmFkZFRvZG8oXCJNeSBUb2RvIDNcIiwgXCJsb3JlbSBpcHN1bVwiLCBuZXcgRGF0ZSgyMDIzLCA3LCAzMCkpO1xyXG4gICAgdGhpcy4jcmVuZGVySGFuZGxlciA9IG5ldyBSZW5kZXJIYW5kbGVyKHRoaXMuZ2V0U3RhdGUoKSk7XHJcbiAgICB0aGlzLiNyZW5kZXJIYW5kbGVyLmluaXRpYWxSZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3QobmFtZSkge1xyXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG5hbWUpKTtcclxuICB9XHJcblxyXG4gIHN3aXRjaFByb2plY3QoaW5kZXgpIHtcclxuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5wcm9qZWN0cy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBpbmRleDtcclxuICAgICAgdGhpcy4jcmVuZGVySGFuZGxlci51cGRhdGUodGhpcy5nZXRTdGF0ZSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN3aXRjaFRvZG8oaW5kZXgpIHtcclxuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkUHJvamVjdF0udG9kb3MubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID0gaW5kZXg7XHJcbiAgICAgIHRoaXMuI3JlbmRlckhhbmRsZXIudXBkYXRlKHRoaXMuZ2V0U3RhdGUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiA9IFwiXCIsIGRhdGUgPSBcIlwiLCBjb2xvciA9IFwiIzAzNGVmY1wiKSB7XHJcbiAgICB0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRQcm9qZWN0XS5hZGQobmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBjb2xvcikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RhdGUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9qZWN0czogdGhpcy5wcm9qZWN0cyxcclxuICAgICAgc2VsZWN0ZWRQcm9qZWN0OiB0aGlzLnNlbGVjdGVkUHJvamVjdCxcclxuICAgICAgc2VsZWN0ZWRUb2RvOiB0aGlzLnNlbGVjdGVkVG9kbyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvQXBwO1xyXG4iLCJjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCAuLi50b2Rvcykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICAgIHRvZG9zLmZvckVhY2goKHgpID0+IHRoaXMuYWRkKHgpKTtcclxuICB9XHJcblxyXG4gIGFkZCh0b2RvKSB7XHJcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoaW5kZXgpIHtcclxuICAgIGlmICh0aGlzLnRvZG9zW2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLnRvZG9zW2luZGV4XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgbGV0IHIgPSB0aGlzLm5hbWUgKyBcIiB7XCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9kb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMudG9kb3NbaV0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgIGlmIChpICE9PSAwKSB7XHJcbiAgICAgICAgciArPSBcIiwgXCI7XHJcbiAgICAgIH1cclxuICAgICAgciArPSB0aGlzLnRvZG9zW2ldLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICByICs9IFwifVwiO1xyXG4gICAgcmV0dXJuIHI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xyXG4iLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4uL2Z1bmN0aW9ucy9wYWdlTG9hZC5qc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgdGFiU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdGFiLmNzc1wiO1xyXG5pbXBvcnQgdG9kb1N0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3RvZG8uY3NzXCI7XHJcbi8vaW1wb3J0IENsaWNrSGFuZGxlciBmcm9tIFwiLi9jbGljay5qc1wiOyB0b2RvXHJcblxyXG5jbGFzcyBSZW5kZXJpbmdIYW5kbGVyIHtcclxuICAjdGFiQ29udGFpbmVyO1xyXG4gICN0b2RvQ29udGFpbmVyO1xyXG4gICNzdGF0ZTtcclxuICAvLyNjbGlja0hhbmRsZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlKSB7XHJcbiAgICB0aGlzLiNzdGF0ZSA9IHN0YXRlO1xyXG4gICAgLy90aGlzLiNjbGlja0hhbmRsZXIgPSBuZXcgQ2xpY2tIYW5kbGVyKCk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsUmVuZGVyKCkge1xyXG4gICAgcGFnZUxvYWQoKTtcclxuICAgIHRoaXMuI3RhYkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZXMudGFicyk7XHJcbiAgICB0aGlzLiN0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlc1tcInRvZG9zLXRvcFwiXSk7XHJcbiAgICB0aGlzLnJlbmRlckFsbCgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQWxsKCkge1xyXG4gICAgdGhpcy5yZW5kZXJUYWJzKCk7XHJcbiAgICB0aGlzLnJlbmRlclRvZG9zKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJUYWJzKCkge1xyXG4gICAgdGhpcy4jdGFiQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB0aGlzLiNzdGF0ZS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4gdGhpcy4jcmVuZGVyVGFiKHByb2plY3QsIGluZGV4KSk7XHJcbiAgfVxyXG5cclxuICAjcmVuZGVyVGFiKHByb2plY3QsIGluZGV4KSB7XHJcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFiLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaW5kZXgpO1xyXG4gICAgdGFiLmNsYXNzTmFtZSA9IHRhYlN0eWxlcy50YWI7XHJcblxyXG4gICAgaWYgKHRoaXMuI3N0YXRlLnNlbGVjdGVkUHJvamVjdCAhPT0gaW5kZXgpIHtcclxuICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUodGFiU3R5bGVzLmFjdGl2ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YWIuY2xhc3NMaXN0LmFkZCh0YWJTdHlsZXMuYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxlZnQuY2xhc3NOYW1lID0gdGFiU3R5bGVzLmxlZnQ7XHJcbiAgICB0YWIuYXBwZW5kQ2hpbGQobGVmdCk7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgIGxlZnQuYXBwZW5kQ2hpbGQobmFtZSk7XHJcblxyXG4gICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmlnaHQuY2xhc3NOYW1lID0gdGFiU3R5bGVzLnJpZ2h0O1xyXG4gICAgdGFiLmFwcGVuZENoaWxkKHJpZ2h0KTtcclxuXHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXhtYXJrXCIsIHRhYlN0eWxlcy5pY29uKTtcclxuICAgIGljb24uc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICByaWdodC5hcHBlbmRDaGlsZChpY29uKTtcclxuXHJcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGxldCBkZWxldGVkID0gZmFsc2U7XHJcbiAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PT0gXCJzdmdcIiB8fCBlLnRhcmdldC5ub2RlTmFtZSA9PT0gXCJwYXRoXCIpIHtcclxuICAgICAgICB0aGlzLiNzdGF0ZS5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkZWxldGVkKSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLiNzdGF0ZS5zZWxlY3RlZFByb2plY3QgJiYgaW5kZXggPT09IHRoaXMuI3N0YXRlLnByb2plY3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy4jc3RhdGUuc2VsZWN0ZWRQcm9qZWN0ID0gaW5kZXggLSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCB0aGlzLiNzdGF0ZS5zZWxlY3RlZFByb2plY3QpIHtcclxuICAgICAgICAgIHRoaXMuI3N0YXRlLnNlbGVjdGVkUHJvamVjdCA9IHRoaXMuI3N0YXRlLnNlbGVjdGVkUHJvamVjdCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuI3N0YXRlLnNlbGVjdGVkUHJvamVjdCA9IGluZGV4O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlKHRoaXMuI3N0YXRlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy4jdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJUb2RvcygpIHtcclxuICAgIHRoaXMuI3RvZG9Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHRoaXMuI3N0YXRlLnByb2plY3RzW3RoaXMuI3N0YXRlLnNlbGVjdGVkUHJvamVjdF0udG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+XHJcbiAgICAgIHRoaXMuI3JlbmRlclRvZG8odG9kbywgaW5kZXgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgI3JlbmRlclRvZG8odG9kbywgaW5kZXgpIHtcclxuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdG9kb0Rpdi5jbGFzc05hbWUgPSB0b2RvU3R5bGVzLnRvZG87XHJcblxyXG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZWZ0LmNsYXNzTmFtZSA9IHRvZG9TdHlsZXMubGVmdDtcclxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQobGVmdCk7XHJcblxyXG4gICAgY29uc3QgY29sb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29sb3JEaXYuY2xhc3NOYW1lID0gdG9kb1N0eWxlcy5jb2xvcjtcclxuICAgIGxlZnQuYXBwZW5kQ2hpbGQoY29sb3JEaXYpO1xyXG4gICAgY29sb3JEaXYuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gdG9kby5jb2xvcjtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aXRsZS5jbGFzc05hbWUgPSB0b2RvU3R5bGVzLnRpdGxlO1xyXG4gICAgbGVmdC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XHJcblxyXG4gICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmlnaHQuY2xhc3NOYW1lID0gdG9kb1N0eWxlcy5yaWdodDtcclxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQocmlnaHQpO1xyXG5cclxuICAgIHRoaXMuI3RvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUobmV3U3RhdGUpIHtcclxuICAgIHRoaXMuI3N0YXRlID0gbmV3U3RhdGU7XHJcbiAgICB0aGlzLnJlbmRlckFsbCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyaW5nSGFuZGxlcjtcclxuIiwiY2xhc3MgVG9kbyB7XHJcbiAgI2NoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uID0gXCJcIiwgZGF0ZSA9IFwiXCIsIGNvbG9yID0gXCIjMDM0ZWZjXCIpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG5cclxuICBjaGVjaygpIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlICsgXCIgXCIgKyB0aGlzLmRlc2NyaXB0aW9uICsgXCIgXCIgKyB0aGlzLmRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwic3ItUlNcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XHJcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd3JhcHBlci5jbGFzc05hbWUgPSBzdHlsZXMud3JhcHBlcjtcclxuXHJcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFicy5jbGFzc05hbWUgPSBzdHlsZXMudGFicztcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRhYnMpO1xyXG5cclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtYWluLmNsYXNzTmFtZSA9IHN0eWxlcy5tYWluO1xyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0b2Rvcy5jbGFzc05hbWUgPSBzdHlsZXMudG9kb3M7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZCh0b2Rvcyk7XHJcblxyXG4gIGNvbnN0IHRvZG9zVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0b2Rvc1RvcC5jbGFzc05hbWUgPSBzdHlsZXNbXCJ0b2Rvcy10b3BcIl07XHJcbiAgdG9kb3MuYXBwZW5kQ2hpbGQodG9kb3NUb3ApO1xyXG5cclxuICBjb25zdCB0b2Rvc0JvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb3NCb3R0b20uY2xhc3NOYW1lID0gc3R5bGVzW1widG9kb3MtYm90dG9tXCJdO1xyXG4gIHRvZG9zLmFwcGVuZENoaWxkKHRvZG9zQm90dG9tKTtcclxuXHJcbiAgY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBuZXdUb2RvRm9ybS5jbGFzc05hbWUgPSBzdHlsZXNbXCJuZXctdG9kby1mb3JtXCJdO1xyXG4gIHRvZG9zQm90dG9tLmFwcGVuZENoaWxkKG5ld1RvZG9Gb3JtKTtcclxuXHJcbiAgY29uc3QgZm9ybUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvcm1MZWZ0LmNsYXNzTmFtZSA9IHN0eWxlc1tcImZvcm0tbGVmdFwiXTtcclxuICBuZXdUb2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtTGVmdCk7XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuYW1lXCIpO1xyXG4gIG5hbWVJbnB1dC5jbGFzc05hbWUgPSBzdHlsZXNbXCJuYW1lLWlucHV0XCJdO1xyXG4gIGZvcm1MZWZ0LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcblxyXG4gIGNvbnN0IGZvcm1SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9ybVJpZ2h0LmNsYXNzTmFtZSA9IHN0eWxlc1tcImZvcm0tcmlnaHRcIl07XHJcbiAgbmV3VG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybVJpZ2h0KTtcclxuXHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcclxuICBzdWJtaXRCdXR0b24uY2xhc3NOYW1lID0gc3R5bGVzLnN1Ym1pdDtcclxuICBmb3JtUmlnaHQuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgY29uc3QgY2hlY2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgY2hlY2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXBsdXNcIiwgXCJmYS14bFwiKTtcclxuICBzdWJtaXRCdXR0b24uYXBwZW5kQ2hpbGQoY2hlY2tJY29uKTtcclxuXHJcbiAgY29uc3QgdG9kb1NjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb1NjcmVlbi5jbGFzc05hbWUgPSBzdHlsZXNbXCJ0b2RvLXNjcmVlblwiXTtcclxuICBtYWluLmFwcGVuZENoaWxkKHRvZG9TY3JlZW4pO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFwcCBmcm9tIFwiLi9jbGFzc2VzL2FwcC5qc1wiO1xyXG5cclxubGV0IGFwcCA9IG5ldyBBcHAoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9