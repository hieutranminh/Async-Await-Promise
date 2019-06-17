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









/*
 Name : Hieu (Hugh)
 Project : Gumike Vietnam 2019
*/
$(document).ready(function () {
  // Variable menu
  window.offsetMenu = {
    header: $('#header').offset().top,
    workshops: $('#workshops').offset().top,
    schedule: $('#schedule').offset().top,
    location: $('#location').offset().top,
    faq: $('#faq').offset().top,
    imgWorkshops: $('#imgWorkshops01').offset().top,
    imgWorkshops02: $('#imgWorkshops02').offset().top
  }
  // Animation text
  function animationText () {
    $('a.cagFx, .link-gettick').each(function (i) {
      var spanCont = $(this).html()
      $(this).
        prepend('<span>' + spanCont + '</span>').
        append('<span>' + spanCont + '</span>')
    })
  }

  // Init
  function init () {
    animationText()
    var btnNavMobile = $('.btn-nav');
    btnNavMobile.on('click', function () {
      $('.nav-mobile').toggleClass('open-nav')
    })
    // Active class menu when load page
    scrollActiveClass();
    // Change color when load page
    changeColorMenu();
    // When scroll method run
    onScroll();
    // PLAY & STOP YOUTUBE
    openClosePopup('#popupVideo01','#video-project');
    openClosePopup('#popupVideo02','#video-project-02');
    openClosePopup('#popupVideo03','#video-project-03');
    openClosePopup('#popupVideo04','#video-project-04');
    // Click to scroll
    clickToScroll()
    // Click to scroll on Mobile
    clickToScrollMobile();
    // library runskroll
    runSkroll();
    // Toggle more
    loadMoreProject();
  }

  // Scroll & navigation active
  function onScroll () {
    $(document).on('scroll', function () {
      // // Scroll active class menu
      scrollActiveClass();
      // Scroll change color menu
      changeColorMenu();
    });
  }

  // Change color menu
  function changeColorMenu () {
    $('.nav-list li a').each(function () {
      var currentLinkOffset = $(this).offset().top;

      if (currentLinkOffset >= offsetMenu.workshops) {
        !$(this).hasClass('change-color') && $(this).addClass('change-color');
      } else {
        $(this).hasClass('change-color') && $(this).removeClass('change-color');
      }

      if(currentLinkOffset >= offsetMenu.imgWorkshops) {
        $(this).hasClass('change-color') && $(this).removeClass('change-color');
      }

      if(currentLinkOffset >= offsetMenu.location) {
        !$(this).hasClass('change-color') && $(this).addClass('change-color');
      }

      if(currentLinkOffset >= offsetMenu.imgWorkshops02) {
        $(this).hasClass('change-color') && $(this).removeClass('change-color');
      }

      if(currentLinkOffset >= offsetMenu.faq) {
        !$(this).hasClass('change-color') && $(this).addClass('change-color');
      }
    });
  }

  // Scroll active class menu
  function scrollActiveClass () {
    var currentOffset = $(document).scrollTop()
    $('.nav-list li a.menu').each(function () {
      var refElement = $($(this).attr('href'))
      if (refElement.offset().top <= currentOffset  && (refElement.offset().top + refElement.innerHeight()) > currentOffset ) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
    })
  }

  // Reset class active
  function resetActive () {
    $('.nav-list li a.menu').each(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      }
    })
  }

  // Click scroll menu
  function clickToScroll () {
    $('.menu').on('click', function (e) {
      e.preventDefault();

      resetActive();

      // Add class active for current navigation
      if (!$(this).hasClass('active')) {
        $(this).toggleClass('active');
      }

      var target = this.hash;
      var $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.position().top + 2,
      }, 1000, 'swing')
    });
  }

  // Click scroll menu mobile
  function clickToScrollMobile () {
    $('.menu-mb').on('click', function (e) {
      e.preventDefault();
      $('.nav-mobile').toggleClass('open-nav')
      var target = this.hash;
      var $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.position().top + 2,
      }, 1000, 'swing')
    });
  }

  // Skrollr
  function runSkroll () {
    var s = skrollr.init({
      forceHeight: false,
      mobileCheck: function() {
        return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
        return false;
      }
    });
    if($(window).width() > 1024) {

    } else {
      skrollr.init().destroy();
    }
  }

  // Open & close function
  function openClosePopup (idPopup, idIframe) {
    var $youtubeIframeClass = $(idIframe);
    var url = $youtubeIframeClass.attr('src');
    $(idPopup).on('shown.bs.modal', function (e) {
      $youtubeIframeClass.attr('src', url);
    })
    $(idPopup).on('hidden.bs.modal', function () {
      $youtubeIframeClass.attr('src', '');
    })
  }
  // Load more project
  function loadMoreProject () {
    $( ".more" ).slideUp();
    $( ".btn-more" ).click(function(e) {
      e.preventDefault();
      $( ".more" ).stop().slideDown( "slow" );
    });
  }
  // CALL METHOD
  init();
})

