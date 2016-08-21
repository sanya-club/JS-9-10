//Menu

$(function () {

  $('.dropdown').hover(function () {
    $(this).children('.submenu').slideDown(200);
  }, function () {
    $(this).children('.submenu').slideUp(200);
  });
});

//Slider

(function ($) {
  $(function () {
    var jcarousel = $('.jcarousel');

    jcarousel
      .on('jcarousel:reload jcarousel:create', function () {
        var carousel = $(this),
          width = carousel.innerWidth();

        if (width >= 600) {
          width = width / 3;
        } else if (width >= 350) {
          width = width / 2;
        }

        carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
      })
      .jcarousel({
        wrap: 'circular'
      });

    $('.jcarousel-control-prev')
      .jcarouselControl({
        target: '-=1'
      });

    $('.jcarousel-control-next')
      .jcarouselControl({
        target: '+=1'
      });

    $('.jcarousel-pagination')
      .on('jcarouselpagination:active', 'a', function () {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function () {
        $(this).removeClass('active');
      })
      .on('click', function (e) {
        e.preventDefault();
      })
      .jcarouselPagination({
        perPage: 1,
        item: function (page) {
          return '<a href="#' + page + '">' + page + '</a>';
        }
      })
      .jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
      });
  });

})(jQuery);

// Select

$(function () {
  var params = {
    changedEl: ".lineForm select",
    visRows: 5,
    scrollArrows: true
  }

  cuSel(params);


});

//Checkbox

$(document).ready(function () {

  $('.jq-checkbox__form input:checkbox:not([safari])').checkbox();
  $('.jq-checkbox__form input[safari]:checkbox').checkbox({
    cls: 'jquery-safari-checkbox'
  });
  $('input:radio').checkbox();
});