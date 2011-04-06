$(document).ready(function() {
  // When "Powered" is clicked, it fades out and back in
  // Writes "Animation complete!" in the .second class
  $('.power').click(function() {
    $('.power').fadeOut(500, function() {
      $(this).show('slow');
      $('p.second').replaceWith('<p class="second"><b>Animation complete!</b></p>');
      $('p.second').fadeOut(1800);
    });
  });

  // Fade in with the header
  $('.header').fadeIn(3000);

  // Prevent default click action on links
  // Toggles which .nav section is hidden (Home/About links)
  $('.nav a').click(function(event) {
    event.preventDefault();
    $('.nav').toggle();
  });
});