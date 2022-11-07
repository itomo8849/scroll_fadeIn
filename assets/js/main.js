$(function() {
  $(window).on('scroll resize load', function() {
    var setHeight = 80;
    var wHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    $('.js_fadeInItem').each(function() {
      var targetPosition = $(this).offset().top;
      if(scrollTop > targetPosition - wHeight + setHeight) {
        $(this).addClass('is_show');
      }
    });
    $('.js_fadeInItem_child').each(function() {
      var targetPosition = $(this).offset().top;
      if(scrollTop > targetPosition - wHeight + setHeight) {
        $(this).addClass('is_show');
      }
    });

  });
});