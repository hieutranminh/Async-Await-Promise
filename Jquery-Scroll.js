// ScrollX & animate jquery----------------------------
var animateFrame = false
$(document).on('touchstart', '.home__category', function () {
  animateFrame = true
})
$(document).on('touchmove', '.home__category', function () {
  animateFrame = false
})
$(document).on('click touchend', '.home__category span', function (e) {
  if (e.type === 'click') animateFrame = true
  if (animateFrame) {
    $(this).addClass('active')
    var scroller = $('.home__category')
    $('.home__category span').not($(this)).removeClass('active')
    var scrollTo = $(this).offset().left - scroller.width() / 2 + $(this).width() / 2 + scroller.scrollLeft()
    scroller.stop().animate({'scrollLeft': scrollTo}, 300)
    scroller.css('overflow-x', 'hidden')
    setTimeout(function () {
      scroller.css('overflow-x', 'auto')
    }, 100)
  }
})

// Scroll Gumikevietnam ----------------------------
$(document).on('scroll', function () {
      var currentOffset = $('#workshops').offset().top;

      $('.nav-list li a').each(function () {
        var currentLinkOffset = $(this).offset().top;

        if (currentLinkOffset >= currentOffset) {
          if (!$(this).hasClass('change-color')) {
            $(this).addClass('change-color');
          }
        } else {
          if ($(this).hasClass('change-color')) {
            $(this).removeClass('change-color');
          }
        }
      });
    });
