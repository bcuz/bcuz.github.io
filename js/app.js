$(function() {

    $("header").backstretch([
     "img/forest.jpg",
     "img/river.jpg"
], {duration: 3000, fade: 750});


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

  $(".broadway-before-after").hover(function() {
    $(this).attr("src", "img/broadway.png");
  }, function() {
     $(this).attr("src", "img/before-broad.png");
   });


  $(".bestbite-before").hover(function() {
    $(this).attr("src", "img/bestbite.png");
  }, function() {
     $(this).attr("src", "img/before-bestbite.png");
   });


  var no_opacity = ["img/bestbite.png", "img/before-bestbite.png", "img/before-broad.png", "img/broadway.png"];

  $(".project img").hover(function() {
    if (no_opacity.indexOf($(this).attr("src")) === -1) {
      $(this).toggleClass("opaque");
    }
  });


});