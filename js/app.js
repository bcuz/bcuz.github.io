$(function() {
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
    // bug still exists
        var viewportWidth = $(window).width();
       if (viewportWidth >= 700 ){

          $("nav ul").show();

       } else {
          $("nav ul").hide();
       }

});

  $(".broadway-before-after").hover(function() {
    $(this).attr("src", "images/broadway.png")
  }, function() {
     $(this).attr("src", "images/before-broad.png")
   })


  $(".bestbite-before").hover(function() {
    $(this).attr("src", "images/bestbite.png")
  }, function() {
     $(this).attr("src", "images/before-bestbite.png")
   })



});