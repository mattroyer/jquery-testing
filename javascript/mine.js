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

  var letter = $('.subHeading').text().split('');
  var letterLength = letter.length;
  $(letter).each(function(i) {
    $('.change').append('<span class="' + letter[i] + '">' + letter[i] + '</span>');
  });
  $(:contains('Where the awesome is'));
  // Prevent default click action on nav links
  // Toggles which .nav section is hidden (Home/About links)
  $('.nav a').click(function(event) {
    event.preventDefault();
    $('.nav').toggle()
  });
});