$(document).ready(function(){

  $( "a.scrollLink" ).click(function( event ) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
  });

  var objectElem = document.querySelector("object");
  var svg;

  objectElem.addEventListener("load", function () {
    contentDoc = objectElem.contentDocument;
    svg = contentDoc.documentElement;
    let countries = ["US", "MX", "CR", "BR", "NO", "CN", "JP"];
    
    (function colorCountry (n) {

      $(svg.children[countries[n]]).toggleClass('black').delay(4000).queue(function(next){
            $(this).toggleClass('normal-background');
            next();
      });
      n++
      if (n <= 20) {
        setTimeout(colorCountry, 4000, n);
      }
    }(0));
    
  });

  $('.skills > .col-sm-3').hover(function() {
    $(this).find('.blurb').animate({opacity: 1}, 300)
    }, function() {
    $(this).find('.blurb').animate({opacity: 0}, 300)
  });

 let welcomeMsg = ["Welcome", "Bienvenido", "Pura Vida", "Bem-vindo", "Velkommen", "Ni Hao", "Irasshaimase"]

  var counter = 0;
  var elem = document.getElementById("welcome");
  var inst = setInterval(change, 2500);

  function change() {
    elem.innerHTML = welcomeMsg[counter];
    counter++;
    if (counter >= welcomeMsg.length) {
      counter = 0;
      // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
  }

  // Experience circles
  const addExpCircles = (full, empty, selector) => {
    // Add full circles
    for(let i=0; i<full; i++) {
      $(`${selector} .exp-circles`).append('<i class="fa fa-circle" style="color:#4f9cca;"></i>')
    }
    // Add empty circles
    for(let i=0; i<empty; i++) {
      $(`${selector} .exp-circles`).append('<i class="fa fa-circle" style="color:#c2d0d6;"></i>')
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