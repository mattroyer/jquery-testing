$(document).ready(function() {

  /* When "Powered" is clicked, it fades out and back in
     Writes "Animation complete!" in the .second class */
  $('#power').click(function() {
    $('#power').fadeOut(500, function() {
      $(this).fadeIn('slow', function() {
        $('p.second').replaceWith('<p class="second"><b class="highlight">Animation complete!</b></p>');
        $('p.second').fadeOut(1500);
      });
    });
    return false;
  });

  /* Hide the header first, then fade it in
     This way there are no issues if javascipt
     is turned off. Header still displays */
  $('#header').css("display", "none").fadeIn(3000);

  /* Prevent default click action on nav links
     Toggles which .nav section is hidden (Home/About links) */
  $('.nav a').click(function(event) {
    event.preventDefault();
    $('.nav').toggle();
    return false;
  });

  /* Right-clicking the About link will bring in
     the about page content */
  $('.about').bind('contextmenu', function(event) {
    event.preventDefault();
    $('#indexContent').load('about.html #aboutContent1, #aboutContent2');
  });


  /* As long as the full window (document) has focus
     You'll be able to use this next bit of code
     I'll give you a hint:
     It's when you press a certain key (104) */

  $(this).keypress(function(event) {
    if (!$(event.target).is('input', 'textarea')) {
      if(event.which == '104') {
        window.location = $('.home').attr("href");
      }
    }
  });

  // ******************* //
  // YOURNAME CODE START //
  // ******************* //

  /* Click on the YourName link at the bottom
     of the page and it will bring up a text box
     Enter your name and upon submit (enter key)
     all yourName classes in the document will be
     changed to your value you input */

  var popupStatus = 0;

  function loadPopup() {
    if(popupStatus === 0) {
      $("#popupBackground").css({"opacity": "0.7"});
      $("#popupBackground").fadeIn("slow");
      $("#popupForm").fadeIn("slow");
      $("#name").focus();
      popupStatus = 1;
    }
  }

  function disablePopup() {
    if(popupStatus === 1) {
      $("#popupBackground").fadeOut("slow");
      $("#popupForm").fadeOut("slow");
      popupStatus = 0;
    }
  }

  function centerPopup() {
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    var popupHeight = $("#popupForm").height();
    var popupWidth = $("#popupForm").width();

    $("#popupForm").css({"position": "absolute", "top": windowHeight/2-popupHeight/2, "left": windowWidth/2-popupWidth/2 });
    $("#popupBackground").css({"height": windowHeight });
  }

  // The click function to bring up a text box
  $('#yourNameLink').click(function(nameEvent) {
    nameEvent.preventDefault();
    $('#nameForm').show();
    centerPopup();
    loadPopup();
    $('#name').val('');
  });

  // The ajax submit function
  $('#nameForm').submit(function(e) {
    e.preventDefault();
   
    var name = $('#name').val();

    $.ajax({
      data: name,
      success: function() {
        $('#nameForm').hide();
        $('.yourName').text(name);
        $('#yourNameLink').show();
        disablePopup();
      }
    });
    return false;
  });

  $("#popupFormClose").click(function() {
    disablePopup();
  });
  $("#popupBackground").click(function() {
    disablePopup();
  });
  $(document).keypress(function(escKey) {
    if(escKey.keyCode === 27 && popupStatus === 1) {
      disablePopup();
    }
  });

  // ***************** //
  // YOURNAME CODE END //
  // ***************** //

  // ***************** //
  // TYPEIT CODE START //
  // ***************** //

  var letter = 0;
  var phrase = "";
  var line = "";
  var running = false;

  function showPhrase(obj) {
    phrase = obj.text();
    if(phrase) {
      typeIt();
    }
  }

  function typeIt() {
    $(line).text(phrase.substr(0, letter++));
    if(letter <= phrase.length) {
      setTimeout(typeIt, 75);
    } else {
      letter = 0;
      phrase = "";
      running = false;
    }
  }

  $('#indexContent p').click(function(clickedLine) {
    if(!running) {
      running = true;
      line = $(clickedLine.currentTarget);
      $(line).height($(line).height());
      showPhrase(line);
    }
    return false;
  });

  // *************** //
  // TYPEIT CODE END //
  // *************** //
});