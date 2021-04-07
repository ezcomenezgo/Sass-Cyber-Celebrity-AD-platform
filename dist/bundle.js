/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: expected 'through' or 'to' keyword in @for directive\\n        on line 84 of src/scss/main.scss\\n>>   @for $i from through $num {\\r\\n   ---------------^\\n\\n    at processResult (C:\\\\Users\\\\a0925\\\\AC-code\\\\cyber-celebrity-AD-platform\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:675:19)\\n    at runLoaders (C:\\\\Users\\\\a0925\\\\AC-code\\\\cyber-celebrity-AD-platform\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:777:5)\\n    at C:\\\\Users\\\\a0925\\\\AC-code\\\\cyber-celebrity-AD-platform\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:399:11\\n    at C:\\\\Users\\\\a0925\\\\AC-code\\\\cyber-celebrity-AD-platform\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:251:18\\n    at context.callback (C:\\\\Users\\\\a0925\\\\AC-code\\\\cyber-celebrity-AD-platform\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:124:13)\\n    at Object.render [as callback] (C:\\\\Users\\\\a0925\\\\AC-code\\\\cyber-celebrity-AD-platform\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:54:7)\\n    at Object.done [as callback] (C:\\\\Users\\\\a0925\\\\AC-code\\\\cyber-celebrity-AD-platform\\\\node_modules\\\\neo-async\\\\async.js:8069:18)\\n    at options.error (C:\\\\Users\\\\a0925\\\\AC-code\\\\cyber-celebrity-AD-platform\\\\node_modules\\\\node-sass\\\\lib\\\\index.js:293:32)\");\n\n//# sourceURL=webpack://cyber-celebrity-AD-platform/./src/scss/main.scss?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconsole.log('JS loaded!')\r\n\r\nconst influencers = [\r\n  {\r\n    id: 1,\r\n    name: '都省睿',\r\n    youtube: '阿D數學',\r\n    fb: 'RayDuMath',\r\n    ig: 'raydumath',\r\n  },\r\n  {\r\n    id: 2,\r\n    name: '蔡偉加',\r\n    youtube: '蔡阿加',\r\n    fb: 'WithGiaLoveTaiwan',\r\n    ig: 'ygia0712',\r\n  },\r\n  {\r\n    id: 3,\r\n    name: '那群人TGOP',\r\n    youtube: 'TGOP 那群人',\r\n    fb: 'thosegroupofpeople',\r\n    ig: 'thosegroupofpeople',\r\n  },\r\n  {\r\n    id: 4,\r\n    name: '洪萬萬',\r\n    youtube: '萬萬進食中',\r\n    fb: 'Wangeating',\r\n    ig: 'whshu_',\r\n  },\r\n  {\r\n    id: 5,\r\n    name: '咚咚',\r\n    youtube: '台灣大胃王咚咚',\r\n    fb: 'Dong.Dong.Bigeater',\r\n    ig: 'dongdong_eating',\r\n  },\r\n  {\r\n    id: 6,\r\n    name: 'BEAUTIFULGIRLS',\r\n    youtube: '正骨女孩',\r\n    fb: 'Beautifulgirls.Fans',\r\n    ig: 'Beautifulgirls520',\r\n  },\r\n  {\r\n    id: 7,\r\n    name: 'THE JuN',\r\n    youtube: 'THE JuN',\r\n    fb: 'the.jun.7965',\r\n    ig: 'the.jun_666',\r\n  },\r\n  {\r\n    id: 8,\r\n    name: '九太娛樂狼人殺',\r\n    youtube: '九太電視娛樂百分百',\r\n    fb: 'NTV100E',\r\n    ig: 'ntve100',\r\n  },\r\n  {\r\n    id: 9,\r\n    name: '眼眶地方電視台',\r\n    youtube: '眼眶地方電視台',\r\n    fb: 'EYEFRAMELTV',\r\n    ig: 'eyeframeltv',\r\n  },\r\n  {\r\n    id: 10,\r\n    name: '不礙眼',\r\n    youtube: '不礙眼',\r\n    fb: 'Hacting4',\r\n    ig: 'h_acting4',\r\n  },\r\n]\r\n\r\nconst cardList = document.getElementById('card-list')\r\nconst form = document.getElementById('a-form')\r\nconst formParts = form.querySelectorAll('.part')\r\nconst stepControl = document.getElementById('step-control')\r\nconst steps = stepControl.querySelectorAll('.step')\r\nconst btnControl = document.getElementById('btn-control')\r\nconst nextBtn = btnControl.querySelector('.btn-primary')\r\nconst prevBtn = btnControl.querySelector('.btn-outline')\r\n\r\nlet activeCard = 0\r\nlet step = 0\r\n\r\n  ; (function () {\r\n    influencers.forEach((influencer) => {\r\n      cardList.innerHTML += `\r\n        <div id=\"${influencer.name}-${influencer.id}\" class=\"card ${influencer.id === activeCard + 1 ? 'active' : ''\r\n        }\">\r\n        <div class=\"name\">${influencer.name}</div>\r\n        <div class=\"flex-row\"><i class=\"fab fa-youtube\"></i><span>${influencer.youtube\r\n        }</span></div>\r\n        <div class=\"flex-row\"><i class=\"fab fa-facebook-square\"></i><span>${influencer.fb\r\n        }</span></div>\r\n        <div class=\"flex-row\"><i class=\"fab fa-instagram\"></i><span>${influencer.ig\r\n        }</span></div>\r\n        </div>\r\n     `\r\n    })\r\n  })()\r\n\r\nfunction handleCardClicked({ target }) {\r\n  const cards = cardList.querySelectorAll('.card')\r\n  const node = target.closest('.card')\r\n  if (node) {\r\n    const idArr = node.id.split('-')\r\n    const num = Number(idArr[idArr.length - 1])\r\n    cards[activeCard].classList.remove('active')\r\n    cards[num - 1].classList.add('active')\r\n    activeCard = num - 1\r\n  }\r\n}\r\n\r\nfunction handleBtnControlClicked(e) {\r\n  e.preventDefault()\r\n  const nowStep = steps[step]\r\n  if (e.target.matches('.btn-primary') && e.target.innerHTML === '下一步') {\r\n    const nextStep = steps[step + 1]\r\n    nowStep.classList.remove('active')\r\n    nowStep.classList.add('checked')\r\n    nextStep.classList.add('active')\r\n    formParts[step].classList.toggle('d-none')\r\n    formParts[step + 1].classList.toggle('d-none')\r\n    step += 1\r\n  } else if (e.target.matches('.btn-outline')) {\r\n    const prevStep = steps[step - 1]\r\n    nowStep.classList.remove('active')\r\n    prevStep.classList.remove('checked')\r\n    prevStep.classList.add('active')\r\n    formParts[step].classList.toggle('d-none')\r\n    formParts[step - 1].classList.toggle('d-none')\r\n    step -= 1\r\n  }\r\n  setBtnDisabled()\r\n}\r\n\r\nfunction setBtnDisabled() {\r\n  if (step === 0) {\r\n    prevBtn.setAttribute('disabled', 'disabled')\r\n  } else {\r\n    prevBtn.removeAttribute('disabled')\r\n  }\r\n\r\n  if (step === 2) {\r\n    nextBtn.innerHTML = '送出申請'\r\n  } else {\r\n    nextBtn.innerHTML = '下一步'\r\n  }\r\n}\r\n\r\ncardList.addEventListener('click', handleCardClicked)\r\nbtnControl.addEventListener('click', handleBtnControlClicked)\n\n//# sourceURL=webpack://cyber-celebrity-AD-platform/./src/main.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;