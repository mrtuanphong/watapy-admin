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
eval("\n\n$(document).ready(function () {\n\n  \"use strict\";\n\n  // Toggle Left Menu\n\n  jQuery('.leftpanel .nav-parent').on('click', 'a.nav-link', function () {\n    var parent = jQuery(this).parent();\n    var sub = parent.find('> ul');\n\n    // Dropdown works only when leftpanel is not collapsed\n    if (!jQuery('body').hasClass('leftpanel-collapsed')) {\n      if (sub.is(':visible')) {\n        sub.slideUp(200, function () {\n          parent.removeClass('nav-active');\n          jQuery('.mainpanel').css({ height: '' });\n        });\n      } else {\n        closeVisibleSubMenu();\n        parent.addClass('nav-active');\n        sub.slideDown(200, function () {});\n      }\n    }\n    return false;\n  });\n\n  function closeVisibleSubMenu() {\n    jQuery('.leftpanel .nav-parent').each(function () {\n      var t = jQuery(this);\n      if (t.hasClass('nav-active')) {\n        t.find('> ul').slideUp(200, function () {\n          t.removeClass('nav-active');\n        });\n      }\n    });\n  }\n\n  // Tooltip\n  jQuery('[data-toggle=\"tooltip\"]').tooltip({\n    container: 'body'\n  });\n\n  // Popover\n  jQuery('[data-toggle=\"popover\"]').popover({\n    html: true,\n    container: 'body'\n  });\n\n  // // Close Button in Panels\n  // jQuery('.panel .panel-close').click(function () {\n  //   jQuery(this).closest('.panel').fadeOut(200);\n  //   return false;\n  // });\n\n  // // Minimize Button in Panels\n  // jQuery('.minimize').click(function () {\n  //   var t = jQuery(this);\n  //   var p = t.closest('.panel');\n  //   if (!jQuery(this).hasClass('maximize')) {\n  //     p.find('.panel-body, .panel-footer').slideUp(200);\n  //     t.addClass('maximize');\n  //     t.html('&plus;');\n  //   } else {\n  //     p.find('.panel-body, .panel-footer').slideDown(200);\n  //     t.removeClass('maximize');\n  //     t.html('&minus;');\n  //   }\n  //   return false;\n  // });\n\n\n  // Add class everytime a mouse pointer hover over it\n  jQuery('.nav-bracket > li').hover(function () {\n    jQuery(this).addClass('nav-hover');\n  }, function () {\n    jQuery(this).removeClass('nav-hover');\n  });\n\n  // Menu Toggle\n  jQuery('.menutoggle').click(function () {\n    var body = jQuery('body');\n    var bodypos = body.css('position');\n\n    if (bodypos != 'relative') {\n\n      if (!body.hasClass('leftpanel-collapsed')) {\n        body.addClass('leftpanel-collapsed');\n        jQuery('.nav-bracket ul').attr('style', '');\n\n        jQuery(this).addClass('menu-collapsed');\n      } else {\n        body.removeClass('leftpanel-collapsed chat-view');\n        jQuery('.nav-bracket li.active ul').css({ display: 'block' });\n\n        jQuery(this).removeClass('menu-collapsed');\n      }\n    } else {\n\n      if (body.hasClass('leftpanel-show')) body.removeClass('leftpanel-show');else body.addClass('leftpanel-show');\n    }\n  });\n\n  jQuery(window).resize(function () {\n\n    //  if(jQuery('body').css('position') == 'relative') {\n\n    //     //jQuery('body').removeClass('leftpanel-collapsed chat-view');\n\n    //  } else {\n\n    //     jQuery('body').removeClass('chat-relative-view');         \n    //     jQuery('body').css({left: '', marginRight: ''});\n    //  }\n  });\n\n  // Check if leftpanel is collapsed\n  if (jQuery('body').hasClass('leftpanel-collapsed')) jQuery('.nav-bracket .children').css({ display: '' });\n\n  // Handles form inside of dropdown \n  jQuery('.dropdown-menu').find('form').click(function (e) {\n    e.stopPropagation();\n  });\n\n  // Sparkline\n  // Example: https://omnipotent.net/jquery.sparkline/#s-about\n  jQuery('#sidebar-chart1').sparkline([2, 3, 10, 9, 6, 8, 5], {\n    type: 'bar',\n    height: '30px',\n    barColor: '#428BCA'\n  });\n  jQuery('#sidebar-chart2').sparkline([5, 7, 6, 9, 3, 4, 8], {\n    type: 'bar',\n    height: '30px',\n    barColor: '#D9534F'\n  });\n  jQuery('#sidebar-chart3').sparkline([3, 2, 2, 3, 10, 9, 6], {\n    type: 'bar',\n    height: '30px',\n    barColor: '#F0AD4E'\n  });\n  jQuery('#sidebar-chart4').sparkline([3, 8, 10], {\n    type: 'pie',\n    height: '30px',\n    barColor: '#1CAF9A'\n  });\n});\n\nconsole.log('main.js works!');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21haW4uanM/YTgwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBUb2dnbGUgTGVmdCBNZW51XG5cbiAgalF1ZXJ5KCcubGVmdHBhbmVsIC5uYXYtcGFyZW50Jykub24oJ2NsaWNrJywgJ2EubmF2LWxpbmsnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCA9IGpRdWVyeSh0aGlzKS5wYXJlbnQoKTtcbiAgICB2YXIgc3ViID0gcGFyZW50LmZpbmQoJz4gdWwnKTtcblxuICAgIC8vIERyb3Bkb3duIHdvcmtzIG9ubHkgd2hlbiBsZWZ0cGFuZWwgaXMgbm90IGNvbGxhcHNlZFxuICAgIGlmICghalF1ZXJ5KCdib2R5JykuaGFzQ2xhc3MoJ2xlZnRwYW5lbC1jb2xsYXBzZWQnKSkge1xuICAgICAgaWYgKHN1Yi5pcygnOnZpc2libGUnKSkge1xuICAgICAgICBzdWIuc2xpZGVVcCgyMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2xhc3MoJ25hdi1hY3RpdmUnKTtcbiAgICAgICAgICBqUXVlcnkoJy5tYWlucGFuZWwnKS5jc3MoeyBoZWlnaHQ6ICcnIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb3NlVmlzaWJsZVN1Yk1lbnUoKTtcbiAgICAgICAgcGFyZW50LmFkZENsYXNzKCduYXYtYWN0aXZlJyk7XG4gICAgICAgIHN1Yi5zbGlkZURvd24oMjAwLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VWaXNpYmxlU3ViTWVudSgpIHtcbiAgICBqUXVlcnkoJy5sZWZ0cGFuZWwgLm5hdi1wYXJlbnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0ID0galF1ZXJ5KHRoaXMpO1xuICAgICAgaWYgKHQuaGFzQ2xhc3MoJ25hdi1hY3RpdmUnKSkge1xuICAgICAgICB0LmZpbmQoJz4gdWwnKS5zbGlkZVVwKDIwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHQucmVtb3ZlQ2xhc3MoJ25hdi1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBUb29sdGlwXG4gIGpRdWVyeSgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoe1xuICAgIGNvbnRhaW5lcjogJ2JvZHknXG4gIH0pO1xuXG4gIC8vIFBvcG92ZXJcbiAgalF1ZXJ5KCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3Zlcih7XG4gICAgaHRtbDogdHJ1ZSxcbiAgICBjb250YWluZXI6ICdib2R5J1xuICB9KTtcblxuICAvLyAvLyBDbG9zZSBCdXR0b24gaW4gUGFuZWxzXG4gIC8vIGpRdWVyeSgnLnBhbmVsIC5wYW5lbC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgLy8gICBqUXVlcnkodGhpcykuY2xvc2VzdCgnLnBhbmVsJykuZmFkZU91dCgyMDApO1xuICAvLyAgIHJldHVybiBmYWxzZTtcbiAgLy8gfSk7XG5cbiAgLy8gLy8gTWluaW1pemUgQnV0dG9uIGluIFBhbmVsc1xuICAvLyBqUXVlcnkoJy5taW5pbWl6ZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgLy8gICB2YXIgdCA9IGpRdWVyeSh0aGlzKTtcbiAgLy8gICB2YXIgcCA9IHQuY2xvc2VzdCgnLnBhbmVsJyk7XG4gIC8vICAgaWYgKCFqUXVlcnkodGhpcykuaGFzQ2xhc3MoJ21heGltaXplJykpIHtcbiAgLy8gICAgIHAuZmluZCgnLnBhbmVsLWJvZHksIC5wYW5lbC1mb290ZXInKS5zbGlkZVVwKDIwMCk7XG4gIC8vICAgICB0LmFkZENsYXNzKCdtYXhpbWl6ZScpO1xuICAvLyAgICAgdC5odG1sKCcmcGx1czsnKTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgcC5maW5kKCcucGFuZWwtYm9keSwgLnBhbmVsLWZvb3RlcicpLnNsaWRlRG93bigyMDApO1xuICAvLyAgICAgdC5yZW1vdmVDbGFzcygnbWF4aW1pemUnKTtcbiAgLy8gICAgIHQuaHRtbCgnJm1pbnVzOycpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gZmFsc2U7XG4gIC8vIH0pO1xuXG5cbiAgLy8gQWRkIGNsYXNzIGV2ZXJ5dGltZSBhIG1vdXNlIHBvaW50ZXIgaG92ZXIgb3ZlciBpdFxuICBqUXVlcnkoJy5uYXYtYnJhY2tldCA+IGxpJykuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnbmF2LWhvdmVyJyk7XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoJ25hdi1ob3ZlcicpO1xuICB9KTtcblxuICAvLyBNZW51IFRvZ2dsZVxuICBqUXVlcnkoJy5tZW51dG9nZ2xlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBib2R5ID0galF1ZXJ5KCdib2R5Jyk7XG4gICAgdmFyIGJvZHlwb3MgPSBib2R5LmNzcygncG9zaXRpb24nKTtcblxuICAgIGlmIChib2R5cG9zICE9ICdyZWxhdGl2ZScpIHtcblxuICAgICAgaWYgKCFib2R5Lmhhc0NsYXNzKCdsZWZ0cGFuZWwtY29sbGFwc2VkJykpIHtcbiAgICAgICAgYm9keS5hZGRDbGFzcygnbGVmdHBhbmVsLWNvbGxhcHNlZCcpO1xuICAgICAgICBqUXVlcnkoJy5uYXYtYnJhY2tldCB1bCcpLmF0dHIoJ3N0eWxlJywgJycpO1xuXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnbWVudS1jb2xsYXBzZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2xhc3MoJ2xlZnRwYW5lbC1jb2xsYXBzZWQgY2hhdC12aWV3Jyk7XG4gICAgICAgIGpRdWVyeSgnLm5hdi1icmFja2V0IGxpLmFjdGl2ZSB1bCcpLmNzcyh7IGRpc3BsYXk6ICdibG9jaycgfSk7XG5cbiAgICAgICAgalF1ZXJ5KHRoaXMpLnJlbW92ZUNsYXNzKCdtZW51LWNvbGxhcHNlZCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGlmIChib2R5Lmhhc0NsYXNzKCdsZWZ0cGFuZWwtc2hvdycpKSBib2R5LnJlbW92ZUNsYXNzKCdsZWZ0cGFuZWwtc2hvdycpO2Vsc2UgYm9keS5hZGRDbGFzcygnbGVmdHBhbmVsLXNob3cnKTtcbiAgICB9XG4gIH0pO1xuXG4gIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyAgaWYoalF1ZXJ5KCdib2R5JykuY3NzKCdwb3NpdGlvbicpID09ICdyZWxhdGl2ZScpIHtcblxuICAgIC8vICAgICAvL2pRdWVyeSgnYm9keScpLnJlbW92ZUNsYXNzKCdsZWZ0cGFuZWwtY29sbGFwc2VkIGNoYXQtdmlldycpO1xuXG4gICAgLy8gIH0gZWxzZSB7XG5cbiAgICAvLyAgICAgalF1ZXJ5KCdib2R5JykucmVtb3ZlQ2xhc3MoJ2NoYXQtcmVsYXRpdmUtdmlldycpOyAgICAgICAgIFxuICAgIC8vICAgICBqUXVlcnkoJ2JvZHknKS5jc3Moe2xlZnQ6ICcnLCBtYXJnaW5SaWdodDogJyd9KTtcbiAgICAvLyAgfVxuICB9KTtcblxuICAvLyBDaGVjayBpZiBsZWZ0cGFuZWwgaXMgY29sbGFwc2VkXG4gIGlmIChqUXVlcnkoJ2JvZHknKS5oYXNDbGFzcygnbGVmdHBhbmVsLWNvbGxhcHNlZCcpKSBqUXVlcnkoJy5uYXYtYnJhY2tldCAuY2hpbGRyZW4nKS5jc3MoeyBkaXNwbGF5OiAnJyB9KTtcblxuICAvLyBIYW5kbGVzIGZvcm0gaW5zaWRlIG9mIGRyb3Bkb3duIFxuICBqUXVlcnkoJy5kcm9wZG93bi1tZW51JykuZmluZCgnZm9ybScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgLy8gU3BhcmtsaW5lXG4gIC8vIEV4YW1wbGU6IGh0dHBzOi8vb21uaXBvdGVudC5uZXQvanF1ZXJ5LnNwYXJrbGluZS8jcy1hYm91dFxuICBqUXVlcnkoJyNzaWRlYmFyLWNoYXJ0MScpLnNwYXJrbGluZShbMiwgMywgMTAsIDksIDYsIDgsIDVdLCB7XG4gICAgdHlwZTogJ2JhcicsXG4gICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgYmFyQ29sb3I6ICcjNDI4QkNBJ1xuICB9KTtcbiAgalF1ZXJ5KCcjc2lkZWJhci1jaGFydDInKS5zcGFya2xpbmUoWzUsIDcsIDYsIDksIDMsIDQsIDhdLCB7XG4gICAgdHlwZTogJ2JhcicsXG4gICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgYmFyQ29sb3I6ICcjRDk1MzRGJ1xuICB9KTtcbiAgalF1ZXJ5KCcjc2lkZWJhci1jaGFydDMnKS5zcGFya2xpbmUoWzMsIDIsIDIsIDMsIDEwLCA5LCA2XSwge1xuICAgIHR5cGU6ICdiYXInLFxuICAgIGhlaWdodDogJzMwcHgnLFxuICAgIGJhckNvbG9yOiAnI0YwQUQ0RSdcbiAgfSk7XG4gIGpRdWVyeSgnI3NpZGViYXItY2hhcnQ0Jykuc3BhcmtsaW5lKFszLCA4LCAxMF0sIHtcbiAgICB0eXBlOiAncGllJyxcbiAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICBiYXJDb2xvcjogJyMxQ0FGOUEnXG4gIH0pO1xufSk7XG5cbmNvbnNvbGUubG9nKCdtYWluLmpzIHdvcmtzIScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NjcmlwdHMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ })

/******/ });