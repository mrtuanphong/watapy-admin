(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){a.exports=c(1)},function(){'use strict';$(document).ready(function(){function a(){jQuery('.leftpanel .nav-parent').each(function(){var a=jQuery(this);a.hasClass('nav-active')&&a.find('> ul').slideUp(200,function(){a.removeClass('nav-active')})})}jQuery('.leftpanel .nav-parent').on('click','a.nav-link',function(){var b=jQuery(this).parent(),c=b.find('> ul');return jQuery('body').hasClass('leftpanel-collapsed')||(c.is(':visible')?c.slideUp(200,function(){b.removeClass('nav-active'),jQuery('.mainpanel').css({height:''})}):(a(),b.addClass('nav-active'),c.slideDown(200,function(){}))),!1}),jQuery('[data-toggle="tooltip"]').tooltip({container:'body'}),jQuery('[data-toggle="popover"]').popover({html:!0,container:'body'}),jQuery('.nav-bracket > li').hover(function(){jQuery(this).addClass('nav-hover')},function(){jQuery(this).removeClass('nav-hover')}),jQuery('.menutoggle').click(function(){var a=jQuery('body'),b=a.css('position');'relative'==b?a.hasClass('leftpanel-show')?a.removeClass('leftpanel-show'):a.addClass('leftpanel-show'):a.hasClass('leftpanel-collapsed')?(a.removeClass('leftpanel-collapsed chat-view'),jQuery('.nav-bracket li.active ul').css({display:'block'}),jQuery(this).removeClass('menu-collapsed')):(a.addClass('leftpanel-collapsed'),jQuery('.nav-bracket ul').attr('style',''),jQuery(this).addClass('menu-collapsed'))}),jQuery(window).resize(function(){}),jQuery('body').hasClass('leftpanel-collapsed')&&jQuery('.nav-bracket .children').css({display:''}),jQuery('.dropdown-menu').find('form').click(function(a){a.stopPropagation()}),jQuery('#sidebar-chart1').sparkline([2,3,10,9,6,8,5],{type:'bar',height:'30px',barColor:'#428BCA'}),jQuery('#sidebar-chart2').sparkline([5,7,6,9,3,4,8],{type:'bar',height:'30px',barColor:'#D9534F'}),jQuery('#sidebar-chart3').sparkline([3,2,2,3,10,9,6],{type:'bar',height:'30px',barColor:'#F0AD4E'}),jQuery('#sidebar-chart4').sparkline([3,8,10],{type:'pie',height:'30px',barColor:'#1CAF9A'})}),void 0}]);
//# sourceMappingURL=main.js.map