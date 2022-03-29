$( document ).ready(function() {

  // clicking functionality for links
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

  // open project modal and hydrate fields with hidden information
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

    $('#modal').fadeIn(200, "linear");
    $('body').css("overflow-y", "hidden");
  });


  // close methods for the modal
  $('.close').click(function() {
    $('#modal').fadeOut(200, "linear");
    $('body').css("overflow-y", "auto");
  });

  $(window).click(function(e) {
    if (e.target.id == 'modal') {
        $('#modal').fadeOut(200);
        $('body').css("overflow-y", "auto");
    }
  });
  
});
