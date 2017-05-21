$( document ).ready(function() {
  //$("#back-top-div").fadeIn("slow");
  //var elementPosition = $('#nav').offset();
  var projectIndex = 1;
  showDivs(projectIndex);


  //Clicking functionality for links
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

  $('.display-left').on('click', function() {
    showDivs(projectIndex -= 1);
  });

  $('.display-right').on('click', function() {
    showDivs(projectIndex += 1);
  });

  $('.git-link').on('click', function(){
    window.open($(this).data('link'), '_blank'); 
  });
  function showDivs(n) {
    var i;
    var x = $('.myProjects');
    if (x.length) {
      if (n > x.length) {projectIndex = 1}
      if (n < 1) {projectIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      x[projectIndex-1].style.display = "block";
    }

  }

});
