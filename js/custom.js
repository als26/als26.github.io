$( document ).ready(function() {
  //$("#back-top-div").fadeIn("slow");
  //var elementPosition = $('#nav').offset();
  
  $("#back-top-div").click(function(){
     $('html,body').animate({
        scrollTop: $("#aboutPage").offset().top},
        'slow');
  });
  
  $('#resume').click(function(){
    window.open('https://drive.google.com/open?id=0B8qsA4dGzxs0RXU3NkJXZjZPMDA', '_blank');
  });
  
  $('#linkedin').click(function(){
    window.open('https://www.linkedin.com/in/abilassathiyanesan', '_blank');
  });
  
  $('#github').click(function(){
    window.open('https://github.com/als26', '_blank');
  });
  
  $('#contact').click(function(){
    window.location.href = "mailto:a6sathiy@uwaterloo.ca?";
  });
  
  
});