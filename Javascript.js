// align center with JS
document.addEventListener("DOMContentLoaded", function () {
  function getEle (id) {
    return document.getElementById(id);
  }
  function centerBox () {
    var divBox = getEle('box');
    var widthDivBox = divBox.offsetWidth;
    var heightDivBox = divBox.offsetHeight;
    var positionX = (window.innerWidth - widthDivBox) / 2;
    var positionY = (window.innerHeight - heightDivBox) / 2;
    divBox.style.cssText = `left:${positionX}px; top:${positionY}px`;
  }
  centerBox();
  window.addEventListener("resize", centerBox)
})

$(document).ready(function () {

  // set variable
  window.$btn = {
    btnOpenMenu: $('.nav_button'),
    btnOpenMenuMobile: $('.nav_button_mobile'),
    btnCloseMenu: $('.nav_button_close'),
    popupMenu: $('.navbar_popup'),
  }

  function init () {
    /* Create event click for... */
    $btn.btnOpenMenu.on('click', function () {
      $btn.popupMenu.addClass('openMenu')
    })

    $btn.btnOpenMenuMobile.on('click', function () {
      $btn.popupMenu.addClass('openMenu')
    })

    $btn.btnCloseMenu.on('click', function () {
      $btn.popupMenu.removeClass('openMenu')
    })

    /* */
  }

  function stuffleText (nameStuffle) {
    var stuffleText = $(nameStuffle)
    for (var i = 0; i < stuffleText.length; i++) {
      stuffleText.shuffleLetters()
    }
  }

  function bindEvent () {
    window.count = 0
    window.btnNavigation = {
      btnMessage: $('.btn-message'),
      btnManikin: $('.btn-manikin'),
      btnOnTheTrack: $('.btn-onthetrack'),
      btnSakana: $('.btn-sakana'),
      btnBodAi: $('.btn-bodai'),
      btnAnomado: $('.btn-anomado'),
    }
    window.divOffset = {
      sectionManikin: $('.section-manikin').offset().top,
      sectionOnthetrack: $('.section-onthetrack').offset().top,
      sectionSakana: $('.section-sakana').offset().top,
      sectionBodai: $('.section-bodai').offset().top,
      sectionAnomado: $('.section-anomado').offset().top,
    }
    init()

    $(window).scroll(function () {

      this.currentOffset = $('html,body').scrollTop() + 1;

      if (currentOffset > divOffset.sectionManikin && count < 1) {
        stuffleText('.stuffle-text-01')
        self.count++
      } else if (currentOffset > divOffset.sectionOnthetrack && count < 2) {
        stuffleText('.stuffle-text-02')
        self.count++
      } else if (currentOffset > divOffset.sectionSakana && count < 3) {
        stuffleText('.stuffle-text-03')
        self.count++
      } else if (currentOffset > divOffset.sectionBodai && count < 4) {
        stuffleText('.stuffle-text-04')
        self.count++
      } else if (currentOffset > divOffset.sectionAnomado && count < 5) {
        stuffleText('.stuffle-text-05')
        self.count++
      }
    })

    // Smooth scroll jquery
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
  }

  bindEvent()

})
