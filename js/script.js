$(function() {
  $("nav img").click(function() {
    $("nav ul").toggle()
  })

  $(".before-after").hover(function() {
    $(this).attr("src", "images/broadway.png")
  }, function() {
     $(this).attr("src", "images/before.png")
   })

});