$(document).ready(function(){

  /* ---------- Smooth scroll arrow ---------- */
  $( "a.scrollLink" ).click(function( event ) {
      event.preventDefault();
      window.setTimeout(function(){$('#mainMenu').addClass('fixed');}, 00);
      $('.menu a').removeClass('active');
      $('.menu a:nth-child(2)').addClass('active');
      $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 800);
  });

  $('.ui .item').on('click', function() {
    $('.ui .item').removeClass('active');
    $(this).addClass('active');
  });

  // Menu Position
  let menuPos = $('#mainMenu').position().top;
  let lastPos = 0;

  $(window).on('scroll', function() {
    let pos = $(window).scrollTop();

    if (pos >= menuPos + $('#mainMenu').height() && lastPos < pos) {
      $('#mainMenu').addClass('fixed');
      // $('#mainMenu').css("display", "flex")
    }
    if (pos < menuPos && lastPos > pos) {
      $('#mainMenu').removeClass('fixed');
    }
    lastPos = pos;
  

   
  });

});