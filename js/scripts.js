$(document).ready(function() {

    // Smooth scrolling
    var scrollTab = $('.scroll');

    scrollTab.click(function(e){
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000);
    });

    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();

      scrollTab.each(function() {

        var sectionOffset = $(this.hash).offset().top - 20;

        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      }
    });


    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

});
