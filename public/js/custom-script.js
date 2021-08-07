// Scrolling Effect
$(document).on("scroll", function () {
  if ($(document).scrollTop() > 86) {
    $("#sticky").addClass("shrink");
  } else {
    $("#sticky").removeClass("shrink");
  }
});


$(document).ready(function () {

  $('.menu-toggle').on('click', function () {

    $('.mbmenu-icon').toggleClass('open');
  });
});
/*mobile toggle icon js close here*/

AOS.init();
/*Scrolling animation close here*/



$('.owl-carousel').owlCarousel({
  center: true,
  items: 2,
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    800: {
      items: 4
    },
    1000: {
      items: 6
    }
  }
})
/*owl Carousel js close here*/

//**********************

$(document).ready(function () {
  $("select").select2();
});

//**********************



var btn = $('#btntotop');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
});

/*bottom to top js*/


$('.toast').toast('show');
/*notifiaction box js here*/


/****************************/
//jQuery time
var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;

$(".next").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");


  next_fs.show();
  current_fs.animate({
    opacity: 0
  }, {
    step: function (now, mx) {
      scale = 1 - (1 - now) * 0.2;
      left = (now * 50) + "%";
      opacity = 1 - now;
      current_fs.css({
        'transform': 'scale(' + scale + ')',
        'position': 'absolute'
      });
      next_fs.css({
        'left': left,
        'opacity': opacity
      });
    },
    duration: 800,
    complete: function () {
      current_fs.hide();
      animating = false;
    },
    easing: 'easeInOutBack'
  });
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  previous_fs.show();
  current_fs.animate({
    opacity: 0
  }, {
    step: function (now, mx) {
      scale = 0.8 + (1 - now) * 0.2;
      left = ((1 - now) * 50) + "%";
      opacity = 1 - now;
      current_fs.css({
        'left': left
      });
      previous_fs.css({
        'transform': 'scale(' + scale + ')',
        'opacity': opacity
      });
    },
    duration: 800,
    complete: function () {
      current_fs.hide();
      animating = false;
    },
    easing: 'easeInOutBack'
  });
});

$(".submit").click(function () {
  return false;
})
/****************************/

$('.modal').on('show.bs.modal', function (e) {
  $('.modal .modal-dialog').attr('class', 'modal-dialog  flipInX  animated');
})
$('.modal').on('hide.bs.modal', function (e) {
  $('.modal .modal-dialog').attr('class', 'modal-dialog  flipOutX  animated');
})
/*modal popup close here*/
