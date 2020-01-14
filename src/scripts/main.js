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
  jQuery('.tooltips').tooltip({ container: 'body' });

  // Popover
  jQuery('.popovers').popover();

  // Close Button in Panels
  jQuery('.panel .panel-close').click(function () {
    jQuery(this).closest('.panel').fadeOut(200);
    return false;
  });

  // Form Toggles
  jQuery('.toggle').toggles({ on: true });

  // Minimize Button in Panels
  jQuery('.minimize').click(function () {
    var t = jQuery(this);
    var p = t.closest('.panel');
    if (!jQuery(this).hasClass('maximize')) {
      p.find('.panel-body, .panel-footer').slideUp(200);
      t.addClass('maximize');
      t.html('&plus;');
    } else {
      p.find('.panel-body, .panel-footer').slideDown(200);
      t.removeClass('maximize');
      t.html('&minus;');
    }
    return false;
  });


  // Add class everytime a mouse pointer hover over it
  jQuery('.nav-bracket > li').hover(function () {
    jQuery(this).addClass('nav-hover');
  }, function () {
    jQuery(this).removeClass('nav-hover');
  });


  // Menu Toggle
  jQuery('.menutoggle').click(function () {
    var body = jQuery('body');
    var bodypos = body.css('position');

    if (bodypos != 'relative') {

      if (!body.hasClass('leftpanel-collapsed')) {
        body.addClass('leftpanel-collapsed');
        jQuery('.nav-bracket ul').attr('style', '');

        jQuery(this).addClass('menu-collapsed');

      } else {
        body.removeClass('leftpanel-collapsed chat-view');
        jQuery('.nav-bracket li.active ul').css({ display: 'block' });

        jQuery(this).removeClass('menu-collapsed');

      }
    } else {

      if (body.hasClass('leftpanel-show'))
        body.removeClass('leftpanel-show');
      else
        body.addClass('leftpanel-show');         
    }
  });


  jQuery(window).resize(function () {

    //  if(jQuery('body').css('position') == 'relative') {

    //     //jQuery('body').removeClass('leftpanel-collapsed chat-view');

    //  } else {

    //     jQuery('body').removeClass('chat-relative-view');         
    //     jQuery('body').css({left: '', marginRight: ''});
    //  }
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

});

console.log('main.js works!');