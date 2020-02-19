/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://www.chartjs.org/\n\n//chart 1:\nvar chart1 = document.getElementById('chart-1').getContext('2d');\nvar myChart = new Chart(chart1, {\n  type: 'bar',\n  data: {\n    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],\n    datasets: [{\n      label: '# of Votes',\n      data: [12, 19, 3, 5, 2, 3],\n      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],\n      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],\n      borderWidth: 1\n    }]\n  },\n  options: {\n    scales: {\n      yAxes: [{\n        ticks: {\n          beginAtZero: true\n        }\n      }]\n    }\n  }\n});\n\n//chart 2:\nvar chart2 = document.getElementById('chart-2').getContext('2d');\nvar chart = new Chart(chart2, {\n  // The type of chart we want to create\n  type: 'line',\n  //fillColor: undefined,\n\n  // The data for our dataset\n  data: {\n    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n    datasets: [{\n      label: 'My First dataset',\n      backgroundColor: 'rgb(255, 99, 132)',\n      borderColor: 'rgb(255, 99, 132)',\n      data: [0, 10, 5, 2, 20, 30, 45],\n      fill: false\n    }]\n  },\n\n  // Configuration options go here\n  options: {}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3JlcG9ydHMuanM/YzMyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8vIGh0dHBzOi8vd3d3LmNoYXJ0anMub3JnL1xuXG4vL2NoYXJ0IDE6XG52YXIgY2hhcnQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0LTEnKS5nZXRDb250ZXh0KCcyZCcpO1xudmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY2hhcnQxLCB7XG4gIHR5cGU6ICdiYXInLFxuICBkYXRhOiB7XG4gICAgbGFiZWxzOiBbJ1JlZCcsICdCbHVlJywgJ1llbGxvdycsICdHcmVlbicsICdQdXJwbGUnLCAnT3JhbmdlJ10sXG4gICAgZGF0YXNldHM6IFt7XG4gICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxuICAgICAgZGF0YTogWzEyLCAxOSwgMywgNSwgMiwgM10sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFsncmdiYSgyNTUsIDk5LCAxMzIsIDAuMiknLCAncmdiYSg1NCwgMTYyLCAyMzUsIDAuMiknLCAncmdiYSgyNTUsIDIwNiwgODYsIDAuMiknLCAncmdiYSg3NSwgMTkyLCAxOTIsIDAuMiknLCAncmdiYSgxNTMsIDEwMiwgMjU1LCAwLjIpJywgJ3JnYmEoMjU1LCAxNTksIDY0LCAwLjIpJ10sXG4gICAgICBib3JkZXJDb2xvcjogWydyZ2JhKDI1NSwgOTksIDEzMiwgMSknLCAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJywgJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKScsICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLCAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknXSxcbiAgICAgIGJvcmRlcldpZHRoOiAxXG4gICAgfV1cbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIHNjYWxlczoge1xuICAgICAgeUF4ZXM6IFt7XG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWVcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG4gIH1cbn0pO1xuXG4vL2NoYXJ0IDI6XG52YXIgY2hhcnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0LTInKS5nZXRDb250ZXh0KCcyZCcpO1xudmFyIGNoYXJ0ID0gbmV3IENoYXJ0KGNoYXJ0Miwge1xuICAvLyBUaGUgdHlwZSBvZiBjaGFydCB3ZSB3YW50IHRvIGNyZWF0ZVxuICB0eXBlOiAnbGluZScsXG4gIC8vZmlsbENvbG9yOiB1bmRlZmluZWQsXG5cbiAgLy8gVGhlIGRhdGEgZm9yIG91ciBkYXRhc2V0XG4gIGRhdGE6IHtcbiAgICBsYWJlbHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5J10sXG4gICAgZGF0YXNldHM6IFt7XG4gICAgICBsYWJlbDogJ015IEZpcnN0IGRhdGFzZXQnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI1NSwgOTksIDEzMiknLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKScsXG4gICAgICBkYXRhOiBbMCwgMTAsIDUsIDIsIDIwLCAzMCwgNDVdLFxuICAgICAgZmlsbDogZmFsc2VcbiAgICB9XVxuICB9LFxuXG4gIC8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBnbyBoZXJlXG4gIG9wdGlvbnM6IHt9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3JpcHRzL3JlcG9ydHMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ })

/******/ });