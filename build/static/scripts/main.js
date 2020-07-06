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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(document).ready(function () {\n\n  \"use strict\";\n\n  // Toggle Left Menu\n\n  jQuery('.leftpanel .nav-parent').on('click', 'a.nav-link', function () {\n    var parent = jQuery(this).parent();\n    var sub = parent.find('> ul');\n\n    // Dropdown works only when leftpanel is not collapsed\n    if (!jQuery('body').hasClass('leftpanel-collapsed')) {\n      if (sub.is(':visible')) {\n        sub.slideUp(200, function () {\n          parent.removeClass('nav-active');\n          jQuery('.mainpanel').css({ height: '' });\n        });\n      } else {\n        closeVisibleSubMenu();\n        parent.addClass('nav-active');\n        sub.slideDown(200, function () {});\n      }\n    }\n    return false;\n  });\n\n  function closeVisibleSubMenu() {\n    jQuery('.leftpanel .nav-parent').each(function () {\n      var t = jQuery(this);\n      if (t.hasClass('nav-active')) {\n        t.find('> ul').slideUp(200, function () {\n          t.removeClass('nav-active');\n        });\n      }\n    });\n  }\n\n  // Tooltip\n  jQuery('[data-toggle=\"tooltip\"]').tooltip({\n    container: 'body'\n  });\n\n  // Popover\n  jQuery('[data-toggle=\"popover\"]').popover({\n    html: true,\n    container: 'body'\n  });\n\n  // Add class everytime a mouse pointer hover over it\n  jQuery('.nav-bracket > li').hover(function () {\n    jQuery(this).addClass('nav-hover');\n  }, function () {\n    jQuery(this).removeClass('nav-hover');\n  });\n\n  // Menu Toggle:\n  function menuToggle() {\n    var body = jQuery('body');\n    if (!body.hasClass('leftpanel-collapsed')) {\n      body.addClass('leftpanel-collapsed');\n      jQuery('.nav-bracket ul').attr('style', '');\n      jQuery(this).addClass('menu-collapsed');\n    } else {\n      body.removeClass('leftpanel-collapsed');\n      jQuery('.nav-bracket li.active ul').css({ display: 'block' });\n      jQuery('.menutoggle').removeClass('menu-collapsed');\n    }\n  }\n\n  // Check if the screen width < 1024px then hide the left menu by default:\n  if ($(window).width() < 1024) {\n    menuToggle();\n  }\n\n  jQuery('.menutoggle').click(function () {\n    menuToggle();\n  });\n\n  jQuery(window).resize(function () {});\n\n  // Check if leftpanel is collapsed\n  if (jQuery('body').hasClass('leftpanel-collapsed')) jQuery('.nav-bracket .children').css({ display: '' });\n\n  // Handles form inside of dropdown \n  jQuery('.dropdown-menu').find('form').click(function (e) {\n    e.stopPropagation();\n  });\n\n  // Sparkline\n  // Example: https://omnipotent.net/jquery.sparkline/#s-about\n  jQuery('#sidebar-chart1').sparkline([2, 3, 10, 9, 6, 8, 5], {\n    type: 'bar',\n    height: '30px',\n    barColor: '#428BCA'\n  });\n  jQuery('#sidebar-chart2').sparkline([5, 7, 6, 9, 3, 4, 8], {\n    type: 'bar',\n    height: '30px',\n    barColor: '#D9534F'\n  });\n  jQuery('#sidebar-chart3').sparkline([3, 2, 2, 3, 10, 9, 6], {\n    type: 'bar',\n    height: '30px',\n    barColor: '#F0AD4E'\n  });\n  jQuery('#sidebar-chart4').sparkline([3, 8, 10], {\n    type: 'pie',\n    height: '30px',\n    barColor: '#1CAF9A'\n  });\n\n  // date range picker:\n  $('.daterangepicker-single').daterangepicker({\n    \"singleDatePicker\": true\n  });\n  $('.daterangepicker-multiple').daterangepicker();\n});\n\nconsole.log('main.js works!');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21haW4uanM/YTgwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBUb2dnbGUgTGVmdCBNZW51XG5cbiAgalF1ZXJ5KCcubGVmdHBhbmVsIC5uYXYtcGFyZW50Jykub24oJ2NsaWNrJywgJ2EubmF2LWxpbmsnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCA9IGpRdWVyeSh0aGlzKS5wYXJlbnQoKTtcbiAgICB2YXIgc3ViID0gcGFyZW50LmZpbmQoJz4gdWwnKTtcblxuICAgIC8vIERyb3Bkb3duIHdvcmtzIG9ubHkgd2hlbiBsZWZ0cGFuZWwgaXMgbm90IGNvbGxhcHNlZFxuICAgIGlmICghalF1ZXJ5KCdib2R5JykuaGFzQ2xhc3MoJ2xlZnRwYW5lbC1jb2xsYXBzZWQnKSkge1xuICAgICAgaWYgKHN1Yi5pcygnOnZpc2libGUnKSkge1xuICAgICAgICBzdWIuc2xpZGVVcCgyMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2xhc3MoJ25hdi1hY3RpdmUnKTtcbiAgICAgICAgICBqUXVlcnkoJy5tYWlucGFuZWwnKS5jc3MoeyBoZWlnaHQ6ICcnIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb3NlVmlzaWJsZVN1Yk1lbnUoKTtcbiAgICAgICAgcGFyZW50LmFkZENsYXNzKCduYXYtYWN0aXZlJyk7XG4gICAgICAgIHN1Yi5zbGlkZURvd24oMjAwLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VWaXNpYmxlU3ViTWVudSgpIHtcbiAgICBqUXVlcnkoJy5sZWZ0cGFuZWwgLm5hdi1wYXJlbnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0ID0galF1ZXJ5KHRoaXMpO1xuICAgICAgaWYgKHQuaGFzQ2xhc3MoJ25hdi1hY3RpdmUnKSkge1xuICAgICAgICB0LmZpbmQoJz4gdWwnKS5zbGlkZVVwKDIwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHQucmVtb3ZlQ2xhc3MoJ25hdi1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBUb29sdGlwXG4gIGpRdWVyeSgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoe1xuICAgIGNvbnRhaW5lcjogJ2JvZHknXG4gIH0pO1xuXG4gIC8vIFBvcG92ZXJcbiAgalF1ZXJ5KCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3Zlcih7XG4gICAgaHRtbDogdHJ1ZSxcbiAgICBjb250YWluZXI6ICdib2R5J1xuICB9KTtcblxuICAvLyBBZGQgY2xhc3MgZXZlcnl0aW1lIGEgbW91c2UgcG9pbnRlciBob3ZlciBvdmVyIGl0XG4gIGpRdWVyeSgnLm5hdi1icmFja2V0ID4gbGknKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCduYXYtaG92ZXInKTtcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIGpRdWVyeSh0aGlzKS5yZW1vdmVDbGFzcygnbmF2LWhvdmVyJyk7XG4gIH0pO1xuXG4gIC8vIE1lbnUgVG9nZ2xlOlxuICBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xuICAgIHZhciBib2R5ID0galF1ZXJ5KCdib2R5Jyk7XG4gICAgaWYgKCFib2R5Lmhhc0NsYXNzKCdsZWZ0cGFuZWwtY29sbGFwc2VkJykpIHtcbiAgICAgIGJvZHkuYWRkQ2xhc3MoJ2xlZnRwYW5lbC1jb2xsYXBzZWQnKTtcbiAgICAgIGpRdWVyeSgnLm5hdi1icmFja2V0IHVsJykuYXR0cignc3R5bGUnLCAnJyk7XG4gICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ21lbnUtY29sbGFwc2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvZHkucmVtb3ZlQ2xhc3MoJ2xlZnRwYW5lbC1jb2xsYXBzZWQnKTtcbiAgICAgIGpRdWVyeSgnLm5hdi1icmFja2V0IGxpLmFjdGl2ZSB1bCcpLmNzcyh7IGRpc3BsYXk6ICdibG9jaycgfSk7XG4gICAgICBqUXVlcnkoJy5tZW51dG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ21lbnUtY29sbGFwc2VkJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgdGhlIHNjcmVlbiB3aWR0aCA8IDEwMjRweCB0aGVuIGhpZGUgdGhlIGxlZnQgbWVudSBieSBkZWZhdWx0OlxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDI0KSB7XG4gICAgbWVudVRvZ2dsZSgpO1xuICB9XG5cbiAgalF1ZXJ5KCcubWVudXRvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBtZW51VG9nZ2xlKCk7XG4gIH0pO1xuXG4gIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7fSk7XG5cbiAgLy8gQ2hlY2sgaWYgbGVmdHBhbmVsIGlzIGNvbGxhcHNlZFxuICBpZiAoalF1ZXJ5KCdib2R5JykuaGFzQ2xhc3MoJ2xlZnRwYW5lbC1jb2xsYXBzZWQnKSkgalF1ZXJ5KCcubmF2LWJyYWNrZXQgLmNoaWxkcmVuJykuY3NzKHsgZGlzcGxheTogJycgfSk7XG5cbiAgLy8gSGFuZGxlcyBmb3JtIGluc2lkZSBvZiBkcm9wZG93biBcbiAgalF1ZXJ5KCcuZHJvcGRvd24tbWVudScpLmZpbmQoJ2Zvcm0nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gIC8vIFNwYXJrbGluZVxuICAvLyBFeGFtcGxlOiBodHRwczovL29tbmlwb3RlbnQubmV0L2pxdWVyeS5zcGFya2xpbmUvI3MtYWJvdXRcbiAgalF1ZXJ5KCcjc2lkZWJhci1jaGFydDEnKS5zcGFya2xpbmUoWzIsIDMsIDEwLCA5LCA2LCA4LCA1XSwge1xuICAgIHR5cGU6ICdiYXInLFxuICAgIGhlaWdodDogJzMwcHgnLFxuICAgIGJhckNvbG9yOiAnIzQyOEJDQSdcbiAgfSk7XG4gIGpRdWVyeSgnI3NpZGViYXItY2hhcnQyJykuc3BhcmtsaW5lKFs1LCA3LCA2LCA5LCAzLCA0LCA4XSwge1xuICAgIHR5cGU6ICdiYXInLFxuICAgIGhlaWdodDogJzMwcHgnLFxuICAgIGJhckNvbG9yOiAnI0Q5NTM0RidcbiAgfSk7XG4gIGpRdWVyeSgnI3NpZGViYXItY2hhcnQzJykuc3BhcmtsaW5lKFszLCAyLCAyLCAzLCAxMCwgOSwgNl0sIHtcbiAgICB0eXBlOiAnYmFyJyxcbiAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICBiYXJDb2xvcjogJyNGMEFENEUnXG4gIH0pO1xuICBqUXVlcnkoJyNzaWRlYmFyLWNoYXJ0NCcpLnNwYXJrbGluZShbMywgOCwgMTBdLCB7XG4gICAgdHlwZTogJ3BpZScsXG4gICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgYmFyQ29sb3I6ICcjMUNBRjlBJ1xuICB9KTtcblxuICAvLyBkYXRlIHJhbmdlIHBpY2tlcjpcbiAgJCgnLmRhdGVyYW5nZXBpY2tlci1zaW5nbGUnKS5kYXRlcmFuZ2VwaWNrZXIoe1xuICAgIFwic2luZ2xlRGF0ZVBpY2tlclwiOiB0cnVlXG4gIH0pO1xuICAkKCcuZGF0ZXJhbmdlcGlja2VyLW11bHRpcGxlJykuZGF0ZXJhbmdlcGlja2VyKCk7XG59KTtcblxuY29uc29sZS5sb2coJ21haW4uanMgd29ya3MhJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NyaXB0cy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ })

/******/ });