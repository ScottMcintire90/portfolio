$(document).ready(function(){

  /* ---------- Smooth scroll arrow ---------- */
  $( "a.scrollLink" ).click(function( event ) {
      event.preventDefault();
      window.setTimeout(function(){$('#mainMenu').addClass('fixed');}, 75);
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

  /* ---------- SVG Animation ---------- */
  // var objectElem = document.querySelector("object");
  // var svg;

  // objectElem.addEventListener("load", function () {
  //   contentDoc = objectElem.contentDocument;
  //   svg = contentDoc.documentElement
  //   let welcomeMsg = [
  //     ["W", "E", "L", "C", "O", "M", "E"],
  //     ["B", "I", "E", "N", "V", "E", "N", "I", "D", "O"],
  //     ["B", "E", "M", "-", "V", "I", "N", "D", "O"],
  //     ["V", "E", "L", "K", "O", "M", "M", "E", "N"],
  //     ["こ", "ん", "に", "ち", "は"],
  //     ["W", "I", "L", "L", "K", "O", "M", "M", "E", "N"],
  //     ["B", "O", "N", "J", "O", "U", "R"]
  //   ];  

  //   (function updateWelcomeMsg (n) {
  //     document.getElementById("welcome").innerHTML = ""

  //     var greeting = welcomeMsg[n]

  //     for (let i=0; i<12; i++) { 
  //       updateWelcome(i);
  //     } 

  //     function updateWelcome(i) { 
  //       setTimeout(function() { 
  //         $("#welcome").append(greeting[i])
  //       }, 40 * i); 
  //     } 

  //     n++
      
  //     if (n === welcomeMsg.length) {
  //       n=0;
  //     }

  //     setTimeout(updateWelcomeMsg, 4000, n);
  //   }(0));
  // });

  // /* ---------- Skills ---------- */
  // $('.skills > .col-sm-3').hover(function() {
  //   $(this).find('.blurb').animate({opacity: 1}, 300)
  //   }, function() {
  //   $(this).find('.blurb').animate({opacity: 0}, 300)
  // });


  /* ---------- Experience circles ---------- */
  const addExpCircles = (full, empty, selector) => {
    // Add full circles
    for(let i=0; i<full; i++) {
      $(`${selector} .exp-circles`).append('<i class="fa fa-circle full-circle"></i>')
    }
    // Add empty circles
    for(let i=0; i<empty; i++) {
      $(`${selector} .exp-circles`).append('<i class="fa fa-circle empty-circle"></i>')
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