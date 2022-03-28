$( document ).ready(function() {
  //$("#back-top-div").fadeIn("slow");
  //var elementPosition = $('#nav').offset();
  var projectIndex = 1;
  showDivs(projectIndex);

  //Clicking functionality for links
  $('#resume').click(function() {
    window.open('https://drive.google.com/open?id=1UFrtSEdfMP6Ha4_Vz7Q9A9p5uJpcf6JV', '_blank');
  });

  $('#linkedin').click(function() {
    window.open('https://www.linkedin.com/in/abilassathiyanesan', '_blank');
  });

  $('#github').click(function() {
    window.open('https://github.com/als26', '_blank');
  });

  $('#contact').click(function() {
    window.location.href = "mailto:abilas96@gmail.com?";
  });

  $('.column').click(function() {
    var title = $(this).find('.project-titles').text();
    var imageSource = $(this).find('.image-slides').attr('src');
    var imageSource2 = $(this).find('.image-slides2').length ? $(this).find('.image-slides2').attr('src') : "";
    var gitLink = $(this).find('.hidden-git-link').attr('data-link');
    var websiteLink =  $(this).find('.hidden-website-link').length ? $(this).find('.hidden-website-link').attr('data-link') : '';

    var desc = $(this).find('.project-description').html();

    $('#bigProjectTitle').text(title);
    $('#bigProjectTitle').append('<br><span class="git-link fa fa-github" data-link="'+gitLink+'" title="Github Link"><h4>Github</h4></span>')
    if (websiteLink)
      $('#bigProjectTitle').append('<span class="website-link fa fa-link" data-link="'+websiteLink+'" title="Website Link"><h4>Website</h4></span>')
    $('#bigProjectImage').attr("src",imageSource);
    $('#bigProjectImage2').attr("src",imageSource2);
    $('#bigProjectDesc').html(desc);

    $('.git-link').on('click', function(){
      window.open($(this).data('link'), '_blank');
    });
    
    $('.website-link').on('click', function(){
      window.open($(this).data('link'), '_blank');
    });

    $('#myModal').fadeIn(200, "linear");
    $('body').css("overflow-y", "hidden");
  });

  $('.close').click(function() {
    $('#myModal').fadeOut(200, "linear");
    $('body').css("overflow-y", "auto");
  });

  $(window).click(function(e) {
    if (e.target.id == 'myModal') {
        $('#myModal').fadeOut(200);
        $('body').css("overflow-y", "auto");
    }
  });

  $('.display-left').on('click', function() {
    showDivs(projectIndex -= 1);
  });

  $('.display-right').on('click', function() {
    showDivs(projectIndex += 1);
  });



  function showDivs(n) {
    var i;
    var x = $('.projectsPage');
    var chevrons = $('.display-hidden');
    if (x.length > 1) {
      chevrons[0].style.visibility="visible"
      chevrons[1].style.visibility="visible"
      if (n > x.length) {projectIndex = 1}
      if (n < 1) {projectIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      x[projectIndex-1].style.display = "flex";
    }

    else {
    }
  }

});
