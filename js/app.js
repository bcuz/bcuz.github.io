$(function() {
  // scroll to top on refresh.
  // effect workflow
  // $(this).scrollTop(0);

  $("nav ul li:nth-child(4) a").click(function(event) {
    event.preventDefault();
    $.scrollTo(".projects", {offset:-55, duration: 1000});
});
  $("nav ul li:nth-child(3) a").click(function(event) {
    event.preventDefault();
    $.scrollTo(".intro", {offset:-55, duration: 1000});
});

  $(".extension").click(function(event) {
    event.preventDefault();

    var quotes = ['"ooooh I like the ctrl+shift+x" - Chris',
                  '"yo that Ctrl+Shift+X is the love of my life" - Ananth',
                  '"shift ctrl x made me SO HAPPY today" - Elise'];

    var random_quote_index = Math.floor(Math.random() * 3);
    alert(quotes[random_quote_index]);

  });

//     $("header").backstretch([
//      "img/forest.jpg",
//      "img/river.jpg"
// ], {duration: 3000, fade: 750});


  $("nav img").click(function(event) {
    event.stopPropagation();
    $("nav ul").toggle();
  });

  $(document).click( function(){
    var viewportWidth = $(window).width();
       if (viewportWidth < 700 ){

          $('nav ul').hide();
       }
});

  $(window).resize(function(){
        var viewportWidth = $(window).width();
       if (viewportWidth >= 700 ){

          $("nav ul").show();

       } else {
          $("nav ul").hide();
       }

});

  var no_opacity = [];

  $(".project img").hover(function() {
    if (no_opacity.indexOf($(this).attr("src")) === -1) {
      $(this).addClass("opaque");
    }
  }, function() {
    if (no_opacity.indexOf($(this).attr("src")) === -1) {
      $(this).removeClass("opaque");
  }
});


});