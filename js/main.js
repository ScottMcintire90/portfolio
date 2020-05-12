$(document).ready(function(){

  /* ---------- Smooth scroll arrow ---------- */
  $( "a.scrollLink" ).click(function() {
      let id = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(id).offset().top
        },
        500
      );
  });

  $('#mainMenu .item').on('click', function() {
    $('#mainMenu .active').removeClass('active');
    window.setTimeout(() => {
      $(this).addClass('active');
    }, 500)
  });

  let menuPos = $('#mainMenu').position().top;
  let lastPos = 0;

  $(window).on('scroll', function() {
    let pos = $(window).scrollTop();
    let pos2 = pos + 50;

    if (pos >= menuPos + $('#mainMenu').height() && lastPos < pos) {
      $('#mainMenu').addClass('fixed');
    }
    if (pos < menuPos && lastPos > pos) {
      $('#mainMenu').removeClass('fixed');
    }

    lastPos = pos;
  
    if (pos2 > $('#home').offset().top) {
      addClassActive('#home');
    }
    if (pos2 > $('#about').offset().top) {
      addClassActive('#about');
    }
    if (pos2 > $('#skills').offset().top) {
      addClassActive('#skills');
    }
    if (pos2 > $('#projects').offset().top) {
      addClassActive('#projects');
    }
    if (
      pos2 > $('#contact').offset().top ||
      pos + $(window).height() === $(document).height()
    ) {
      addClassActive('#contact');
    }
  });

  function addClassActive(id) {
    $('#mainMenu .active').removeClass('active');
    $('#mainMenu')
      .find('[href="' + id + '"]')
      .addClass('active');
  }

  // Project Info
  $(".project-img").hover(
    function() {
    $(this).siblings(".project-info").addClass('test12');
    },
    function() {
      $(this).siblings(".project-info").removeClass('test12');
    }
  )
  $(".project-info").hover(
    function() {
    $(this).addClass('test12');
    },
    function() {
      $(this).removeClass('test12');
    }
  )

});