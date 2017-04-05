$( document ).ready(function() {
  var elementPosition = $('#nav').offset();

  // $(window).scroll(function(){
  //   if($(window).scrollTop() >= elementPosition.top){
  //     $('#nav').css('position','fixed').css('top','0');
  //     $("#back-top").fadeIn();
  //   } else {
  //     $('#nav').css('position','static');
  //     $("#back-top").fadeOut();
  //   }
  // });

  $("#back-top").click(function() {
    $('html,body').animate({
        scrollTop: $("body").offset().top},
        'slow');
  });

  $('#aboutBtn').click(function() {
    console.log("working");
    $('html,body').animate({
        scrollTop: $("#aboutMe").offset().top-150},
        'slow');
  });

  $('#linksBtn').click(function() {
    console.log("working");
    $('html,body').animate({
        scrollTop: $("#links").offset().top-150},
        'slow');
  });
});
