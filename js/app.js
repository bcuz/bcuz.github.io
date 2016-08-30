$(function() {

    $("header").backstretch([
     "img/forest.jpg",
     "img/tennis.jpg"
], {duration: 4000, fade: 750});


  $("nav img").click(function(event) {
    event.stopPropagation();
    $("nav ul").toggle()
  })

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
    $(this).attr("src", "img/broadway.png")
  }, function() {
     $(this).attr("src", "img/before-broad.png")
   })


  $(".bestbite-before").hover(function() {
    $(this).attr("src", "img/bestbite.png")
  }, function() {
     $(this).attr("src", "img/before-bestbite.png")
   })



});