$(function() {
  $("nav img").click(function(event) {
    event.stopPropagation();
    $("nav ul").toggle()
  })

  $(document).click( function(){
    $('nav ul').hide();
});

//   $(window).resize(function(){

//        if ($('header').width() == 700 ){

//               $("nav ul").show();

//        }

// });

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