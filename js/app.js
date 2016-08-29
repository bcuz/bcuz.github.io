$(function() {
  $("nav img").click(function() {
    $("nav ul").toggle()
  })

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