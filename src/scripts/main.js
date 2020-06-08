$(document).ready(function () {

  "use strict";

  // Toggle Left Menu
  jQuery('.leftpanel .nav-parent').on('click', 'a.nav-link', function () {
    var parent = jQuery(this).parent();
    var sub = parent.find('> ul');

    // Dropdown works only when leftpanel is not collapsed
    if (!jQuery('body').hasClass('leftpanel-collapsed')) {
      if (sub.is(':visible')) {
        sub.slideUp(200, function () {
          parent.removeClass('nav-active');
          jQuery('.mainpanel').css({ height: '' });

        });
      } else {
        closeVisibleSubMenu();
        parent.addClass('nav-active');
        sub.slideDown(200, function () {

        });
      }
    }
    return false;
  });

  function closeVisibleSubMenu() {
    jQuery('.leftpanel .nav-parent').each(function () {
      var t = jQuery(this);
      if (t.hasClass('nav-active')) {
        t.find('> ul').slideUp(200, function () {
          t.removeClass('nav-active');
        });
      }
    });
  }

  // Tooltip
  jQuery('[data-toggle="tooltip"]').tooltip({ 
    container: 'body'
  });

  // Popover
  jQuery('[data-toggle="popover"]').popover({
    html: true, 
    container: 'body'
  });

  // Add class everytime a mouse pointer hover over it
  jQuery('.nav-bracket > li').hover(function () {
    jQuery(this).addClass('nav-hover');
  }, function () {
    jQuery(this).removeClass('nav-hover');
  });

  // Menu Toggle:
  function menuToggle() {
    var body = jQuery('body');
    if (!body.hasClass('leftpanel-collapsed')) {
      body.addClass('leftpanel-collapsed');
      jQuery('.nav-bracket ul').attr('style', '');
      jQuery(this).addClass('menu-collapsed');
    } else {
      body.removeClass('leftpanel-collapsed');
      jQuery('.nav-bracket li.active ul').css({ display: 'block' });
      jQuery('.menutoggle').removeClass('menu-collapsed');
    }
  }

  // Check if the screen width < 1024px then hide the left menu by default:
  if ($(window).width() < 1024){
    menuToggle();
  }

  jQuery('.menutoggle').click(function () {
    menuToggle()
  });

  jQuery(window).resize(function () {

  });

  // Check if leftpanel is collapsed
  if (jQuery('body').hasClass('leftpanel-collapsed'))
    jQuery('.nav-bracket .children').css({ display: '' });

  // Handles form inside of dropdown 
  jQuery('.dropdown-menu').find('form').click(function (e) {
    e.stopPropagation();
  });

  // Sparkline
  // Example: https://omnipotent.net/jquery.sparkline/#s-about
  jQuery('#sidebar-chart1').sparkline([2, 3, 10, 9, 6, 8, 5], {
    type: 'bar',
    height: '30px',
    barColor: '#428BCA'
  });
  jQuery('#sidebar-chart2').sparkline([5, 7, 6, 9, 3, 4, 8], {
    type: 'bar',
    height: '30px',
    barColor: '#D9534F'
  });
  jQuery('#sidebar-chart3').sparkline([3, 2, 2, 3, 10, 9, 6], {
    type: 'bar',
    height: '30px',
    barColor: '#F0AD4E'
  });
  jQuery('#sidebar-chart4').sparkline([3, 8, 10], {
    type: 'pie',
    height: '30px',
    barColor: '#1CAF9A'
  });

  // date range picker:
  $('.daterangepicker-single').daterangepicker({
    "singleDatePicker": true
  });
  $('.daterangepicker-multiple').daterangepicker();
  
});

console.log('main.js works!');