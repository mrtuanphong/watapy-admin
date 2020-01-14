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
eval("\n\n$(document).ready(function () {\n\n  \"use strict\";\n\n  // Toggle Left Menu\n\n  jQuery('.leftpanel .nav-parent').on('click', 'a.nav-link', function () {\n    var parent = jQuery(this).parent();\n    var sub = parent.find('> ul');\n\n    // Dropdown works only when leftpanel is not collapsed\n    if (!jQuery('body').hasClass('leftpanel-collapsed')) {\n      if (sub.is(':visible')) {\n        sub.slideUp(200, function () {\n          parent.removeClass('nav-active');\n          jQuery('.mainpanel').css({ height: '' });\n        });\n      } else {\n        closeVisibleSubMenu();\n        parent.addClass('nav-active');\n        sub.slideDown(200, function () {});\n      }\n    }\n    return false;\n  });\n\n  function closeVisibleSubMenu() {\n    jQuery('.leftpanel .nav-parent').each(function () {\n      var t = jQuery(this);\n      if (t.hasClass('nav-active')) {\n        t.find('> ul').slideUp(200, function () {\n          t.removeClass('nav-active');\n        });\n      }\n    });\n  }\n\n  // Tooltip\n  jQuery('.tooltips').tooltip({ container: 'body' });\n\n  // Popover\n  jQuery('.popovers').popover();\n\n  // Close Button in Panels\n  jQuery('.panel .panel-close').click(function () {\n    jQuery(this).closest('.panel').fadeOut(200);\n    return false;\n  });\n\n  // Form Toggles\n  jQuery('.toggle').toggles({ on: true });\n\n  // Minimize Button in Panels\n  jQuery('.minimize').click(function () {\n    var t = jQuery(this);\n    var p = t.closest('.panel');\n    if (!jQuery(this).hasClass('maximize')) {\n      p.find('.panel-body, .panel-footer').slideUp(200);\n      t.addClass('maximize');\n      t.html('&plus;');\n    } else {\n      p.find('.panel-body, .panel-footer').slideDown(200);\n      t.removeClass('maximize');\n      t.html('&minus;');\n    }\n    return false;\n  });\n\n  // Add class everytime a mouse pointer hover over it\n  jQuery('.nav-bracket > li').hover(function () {\n    jQuery(this).addClass('nav-hover');\n  }, function () {\n    jQuery(this).removeClass('nav-hover');\n  });\n\n  // Menu Toggle\n  jQuery('.menutoggle').click(function () {\n    var body = jQuery('body');\n    var bodypos = body.css('position');\n\n    if (bodypos != 'relative') {\n\n      if (!body.hasClass('leftpanel-collapsed')) {\n        body.addClass('leftpanel-collapsed');\n        jQuery('.nav-bracket ul').attr('style', '');\n\n        jQuery(this).addClass('menu-collapsed');\n      } else {\n        body.removeClass('leftpanel-collapsed chat-view');\n        jQuery('.nav-bracket li.active ul').css({ display: 'block' });\n\n        jQuery(this).removeClass('menu-collapsed');\n      }\n    } else {\n\n      if (body.hasClass('leftpanel-show')) body.removeClass('leftpanel-show');else body.addClass('leftpanel-show');\n    }\n  });\n\n  jQuery(window).resize(function () {\n\n    //  if(jQuery('body').css('position') == 'relative') {\n\n    //     //jQuery('body').removeClass('leftpanel-collapsed chat-view');\n\n    //  } else {\n\n    //     jQuery('body').removeClass('chat-relative-view');         \n    //     jQuery('body').css({left: '', marginRight: ''});\n    //  }\n  });\n\n  // Check if leftpanel is collapsed\n  if (jQuery('body').hasClass('leftpanel-collapsed')) jQuery('.nav-bracket .children').css({ display: '' });\n\n  // Handles form inside of dropdown \n  jQuery('.dropdown-menu').find('form').click(function (e) {\n    e.stopPropagation();\n  });\n\n  // Sparkline\n  // Example: https://omnipotent.net/jquery.sparkline/#s-about\n  jQuery('#sidebar-chart1').sparkline([2, 3, 10, 9, 6, 8, 5], {\n    type: 'bar',\n    height: '30px',\n    barColor: '#428BCA'\n  });\n\n  jQuery('#sidebar-chart2').sparkline([5, 7, 6, 9, 3, 4, 8], {\n    type: 'bar',\n    height: '30px',\n    barColor: '#D9534F'\n  });\n\n  jQuery('#sidebar-chart3').sparkline([3, 2, 2, 3, 10, 9, 6], {\n    type: 'bar',\n    height: '30px',\n    barColor: '#F0AD4E'\n  });\n\n  jQuery('#sidebar-chart4').sparkline([3, 8, 10], {\n    type: 'pie',\n    height: '30px',\n    barColor: '#1CAF9A'\n  });\n});\n\nconsole.log('main.js works!');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21haW4uanM/YTgwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBUb2dnbGUgTGVmdCBNZW51XG5cbiAgalF1ZXJ5KCcubGVmdHBhbmVsIC5uYXYtcGFyZW50Jykub24oJ2NsaWNrJywgJ2EubmF2LWxpbmsnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCA9IGpRdWVyeSh0aGlzKS5wYXJlbnQoKTtcbiAgICB2YXIgc3ViID0gcGFyZW50LmZpbmQoJz4gdWwnKTtcblxuICAgIC8vIERyb3Bkb3duIHdvcmtzIG9ubHkgd2hlbiBsZWZ0cGFuZWwgaXMgbm90IGNvbGxhcHNlZFxuICAgIGlmICghalF1ZXJ5KCdib2R5JykuaGFzQ2xhc3MoJ2xlZnRwYW5lbC1jb2xsYXBzZWQnKSkge1xuICAgICAgaWYgKHN1Yi5pcygnOnZpc2libGUnKSkge1xuICAgICAgICBzdWIuc2xpZGVVcCgyMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2xhc3MoJ25hdi1hY3RpdmUnKTtcbiAgICAgICAgICBqUXVlcnkoJy5tYWlucGFuZWwnKS5jc3MoeyBoZWlnaHQ6ICcnIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb3NlVmlzaWJsZVN1Yk1lbnUoKTtcbiAgICAgICAgcGFyZW50LmFkZENsYXNzKCduYXYtYWN0aXZlJyk7XG4gICAgICAgIHN1Yi5zbGlkZURvd24oMjAwLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VWaXNpYmxlU3ViTWVudSgpIHtcbiAgICBqUXVlcnkoJy5sZWZ0cGFuZWwgLm5hdi1wYXJlbnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0ID0galF1ZXJ5KHRoaXMpO1xuICAgICAgaWYgKHQuaGFzQ2xhc3MoJ25hdi1hY3RpdmUnKSkge1xuICAgICAgICB0LmZpbmQoJz4gdWwnKS5zbGlkZVVwKDIwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHQucmVtb3ZlQ2xhc3MoJ25hdi1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBUb29sdGlwXG4gIGpRdWVyeSgnLnRvb2x0aXBzJykudG9vbHRpcCh7IGNvbnRhaW5lcjogJ2JvZHknIH0pO1xuXG4gIC8vIFBvcG92ZXJcbiAgalF1ZXJ5KCcucG9wb3ZlcnMnKS5wb3BvdmVyKCk7XG5cbiAgLy8gQ2xvc2UgQnV0dG9uIGluIFBhbmVsc1xuICBqUXVlcnkoJy5wYW5lbCAucGFuZWwtY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgalF1ZXJ5KHRoaXMpLmNsb3Nlc3QoJy5wYW5lbCcpLmZhZGVPdXQoMjAwKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIC8vIEZvcm0gVG9nZ2xlc1xuICBqUXVlcnkoJy50b2dnbGUnKS50b2dnbGVzKHsgb246IHRydWUgfSk7XG5cbiAgLy8gTWluaW1pemUgQnV0dG9uIGluIFBhbmVsc1xuICBqUXVlcnkoJy5taW5pbWl6ZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IGpRdWVyeSh0aGlzKTtcbiAgICB2YXIgcCA9IHQuY2xvc2VzdCgnLnBhbmVsJyk7XG4gICAgaWYgKCFqUXVlcnkodGhpcykuaGFzQ2xhc3MoJ21heGltaXplJykpIHtcbiAgICAgIHAuZmluZCgnLnBhbmVsLWJvZHksIC5wYW5lbC1mb290ZXInKS5zbGlkZVVwKDIwMCk7XG4gICAgICB0LmFkZENsYXNzKCdtYXhpbWl6ZScpO1xuICAgICAgdC5odG1sKCcmcGx1czsnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcC5maW5kKCcucGFuZWwtYm9keSwgLnBhbmVsLWZvb3RlcicpLnNsaWRlRG93bigyMDApO1xuICAgICAgdC5yZW1vdmVDbGFzcygnbWF4aW1pemUnKTtcbiAgICAgIHQuaHRtbCgnJm1pbnVzOycpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIC8vIEFkZCBjbGFzcyBldmVyeXRpbWUgYSBtb3VzZSBwb2ludGVyIGhvdmVyIG92ZXIgaXRcbiAgalF1ZXJ5KCcubmF2LWJyYWNrZXQgPiBsaScpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ25hdi1ob3ZlcicpO1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgalF1ZXJ5KHRoaXMpLnJlbW92ZUNsYXNzKCduYXYtaG92ZXInKTtcbiAgfSk7XG5cbiAgLy8gTWVudSBUb2dnbGVcbiAgalF1ZXJ5KCcubWVudXRvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYm9keSA9IGpRdWVyeSgnYm9keScpO1xuICAgIHZhciBib2R5cG9zID0gYm9keS5jc3MoJ3Bvc2l0aW9uJyk7XG5cbiAgICBpZiAoYm9keXBvcyAhPSAncmVsYXRpdmUnKSB7XG5cbiAgICAgIGlmICghYm9keS5oYXNDbGFzcygnbGVmdHBhbmVsLWNvbGxhcHNlZCcpKSB7XG4gICAgICAgIGJvZHkuYWRkQ2xhc3MoJ2xlZnRwYW5lbC1jb2xsYXBzZWQnKTtcbiAgICAgICAgalF1ZXJ5KCcubmF2LWJyYWNrZXQgdWwnKS5hdHRyKCdzdHlsZScsICcnKTtcblxuICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ21lbnUtY29sbGFwc2VkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LnJlbW92ZUNsYXNzKCdsZWZ0cGFuZWwtY29sbGFwc2VkIGNoYXQtdmlldycpO1xuICAgICAgICBqUXVlcnkoJy5uYXYtYnJhY2tldCBsaS5hY3RpdmUgdWwnKS5jc3MoeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuXG4gICAgICAgIGpRdWVyeSh0aGlzKS5yZW1vdmVDbGFzcygnbWVudS1jb2xsYXBzZWQnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICBpZiAoYm9keS5oYXNDbGFzcygnbGVmdHBhbmVsLXNob3cnKSkgYm9keS5yZW1vdmVDbGFzcygnbGVmdHBhbmVsLXNob3cnKTtlbHNlIGJvZHkuYWRkQ2xhc3MoJ2xlZnRwYW5lbC1zaG93Jyk7XG4gICAgfVxuICB9KTtcblxuICBqUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gIGlmKGpRdWVyeSgnYm9keScpLmNzcygncG9zaXRpb24nKSA9PSAncmVsYXRpdmUnKSB7XG5cbiAgICAvLyAgICAgLy9qUXVlcnkoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGVmdHBhbmVsLWNvbGxhcHNlZCBjaGF0LXZpZXcnKTtcblxuICAgIC8vICB9IGVsc2Uge1xuXG4gICAgLy8gICAgIGpRdWVyeSgnYm9keScpLnJlbW92ZUNsYXNzKCdjaGF0LXJlbGF0aXZlLXZpZXcnKTsgICAgICAgICBcbiAgICAvLyAgICAgalF1ZXJ5KCdib2R5JykuY3NzKHtsZWZ0OiAnJywgbWFyZ2luUmlnaHQ6ICcnfSk7XG4gICAgLy8gIH1cbiAgfSk7XG5cbiAgLy8gQ2hlY2sgaWYgbGVmdHBhbmVsIGlzIGNvbGxhcHNlZFxuICBpZiAoalF1ZXJ5KCdib2R5JykuaGFzQ2xhc3MoJ2xlZnRwYW5lbC1jb2xsYXBzZWQnKSkgalF1ZXJ5KCcubmF2LWJyYWNrZXQgLmNoaWxkcmVuJykuY3NzKHsgZGlzcGxheTogJycgfSk7XG5cbiAgLy8gSGFuZGxlcyBmb3JtIGluc2lkZSBvZiBkcm9wZG93biBcbiAgalF1ZXJ5KCcuZHJvcGRvd24tbWVudScpLmZpbmQoJ2Zvcm0nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gIC8vIFNwYXJrbGluZVxuICAvLyBFeGFtcGxlOiBodHRwczovL29tbmlwb3RlbnQubmV0L2pxdWVyeS5zcGFya2xpbmUvI3MtYWJvdXRcbiAgalF1ZXJ5KCcjc2lkZWJhci1jaGFydDEnKS5zcGFya2xpbmUoWzIsIDMsIDEwLCA5LCA2LCA4LCA1XSwge1xuICAgIHR5cGU6ICdiYXInLFxuICAgIGhlaWdodDogJzMwcHgnLFxuICAgIGJhckNvbG9yOiAnIzQyOEJDQSdcbiAgfSk7XG5cbiAgalF1ZXJ5KCcjc2lkZWJhci1jaGFydDInKS5zcGFya2xpbmUoWzUsIDcsIDYsIDksIDMsIDQsIDhdLCB7XG4gICAgdHlwZTogJ2JhcicsXG4gICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgYmFyQ29sb3I6ICcjRDk1MzRGJ1xuICB9KTtcblxuICBqUXVlcnkoJyNzaWRlYmFyLWNoYXJ0MycpLnNwYXJrbGluZShbMywgMiwgMiwgMywgMTAsIDksIDZdLCB7XG4gICAgdHlwZTogJ2JhcicsXG4gICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgYmFyQ29sb3I6ICcjRjBBRDRFJ1xuICB9KTtcblxuICBqUXVlcnkoJyNzaWRlYmFyLWNoYXJ0NCcpLnNwYXJrbGluZShbMywgOCwgMTBdLCB7XG4gICAgdHlwZTogJ3BpZScsXG4gICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgYmFyQ29sb3I6ICcjMUNBRjlBJ1xuICB9KTtcbn0pO1xuXG5jb25zb2xlLmxvZygnbWFpbi5qcyB3b3JrcyEnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3JpcHRzL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ })

/******/ });