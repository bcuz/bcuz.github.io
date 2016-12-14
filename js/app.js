$(function() {
  // scroll to top on refresh.
  // effects workflow
  // $(this).scrollTop(0);

  $("nav ul li:nth-child(3) a").click(function(event) {
    event.preventDefault();
    $.scrollTo(".projects", {offset:-55, duration: 1000});
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