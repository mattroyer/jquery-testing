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

  // Fade in the header
  $('.header').fadeIn(3000);

  // Prevent default click action on nav links
  // Toggles which .nav section is hidden (Home/About links)
  $('.nav a').click(function(event) {
    event.preventDefault();
    $('.nav').toggle()
  });

  // Right-clicking the About link will take you
  // to the about page
  $('.about').bind('contextmenu', function(event) {
    event.preventDefault();
    window.location = $('.about').attr("href");
  });


  // As long as the full window (document) has focus
  // You'll be able to use this next bit of code
  // I'll give you a hint:
  // It's only useful on the About.html page
  // And it's when you press a certain key (104)
  $(this).keypress(function(event) {
    if (event.which == '104') {
      window.location = $('.home').attr("href");
    };
  });

  // ********************* //
  // SUBHEADING CODE START //
  // ********************* //

  // Get the text from the subHeading class
  // Split it and turn it into an array
  // Store in the variable "letter"
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

  // Function to hide each letter one at a time when clicked
  $('.subHeading').click(function() {
    $('.subHeading span:last-child').fadeOut("fast", function() {
      $(this).prev().fadeOut(100, arguments.callee);
    });
    $(this).append('&nbsp;');
  });

  // ******************* //
  // SUBHEADING CODE END //
  // ******************* //
});