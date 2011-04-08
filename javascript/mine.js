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

  // Get the text from the subHeading class
  // Split it and turn it into an array store as "letter"
  var letter = $('.subHeading').text().split('');

  // Get each letter element and attach a span class to it
  $(letter).each(function(i) {
    $('.subHeading').append('<span class="' + letter[i] + '">' + letter[i] + '</span>')
  });

  // Remove the initial phrase that was split into an array
  $('.change').remove();

  // Function to show each letter one at a time
  $('.subHeading span:first-child').show("fast", function() {
    $(this).next().show("fast", arguments.callee);
  });

  // Prevent default click action on nav links
  // Toggles which .nav section is hidden (Home/About links)
  $('.nav a').click(function(event) {
    event.preventDefault();
    $('.nav').toggle()
  });
});