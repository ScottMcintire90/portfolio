$(document).ready(function(){

  $( "a.scrollLink" ).click(function( event ) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
  });

  $('.skills > .col-sm-3').hover(function() {
    $(this).find('.blurb').animate({opacity: 1}, 300)
    }, function() {
    $(this).find('.blurb').animate({opacity: 0}, 300)
  });

  // $('#development').hover(function () {
  //   $("#development .blurb").css("display", "block").fadeIn('slow');
  //   $("#development .blurb").fadeIn('slow');
  // },function () {
  //   $("#development .blurb").css("display", "none");
  // });

  // Experience circles
  const addExpCircles = (full, empty, selector) => {
    // Add full circles
    for(let i=0; i<full; i++) {
      $(`${selector} .exp-circles`).append('<i class="fa fa-circle" style="color:#4f9cca;"></i>')
      console.log(`${selector} .exp-circles`)
    }
    // Add empty circles
    for(let i=0; i<empty; i++) {
      $(`${selector} .exp-circles`).append('<i class="fa fa-circle" style="color:#c2d0d6;"></i>')
      console.log(`${selector} .exp-circles`)
    }
  }
  addExpCircles(9, 1, "#html5");
  addExpCircles(9, 1, "#cssSass");
  addExpCircles(8, 2, "#javascript");
  addExpCircles(8, 2, "#react");
  addExpCircles(7, 3, "#vuejs");
  addExpCircles(6, 4, "#nodejs");
  addExpCircles(5, 5, "#rubyRails");
});
