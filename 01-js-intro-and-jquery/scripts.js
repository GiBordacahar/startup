
$(document).ready(function() {
  
  /* When the page has finished loading the section must fade in. */
  $('header').hide();
  $('header').fadeIn(3000);

  /* Add a textbox with the class "alias", and put the cursor inside it right after the fades in.  */
  $('.alias').focus();

  /* Attach an event to the created button which calls a function that gets a response from a web site */
  $('button').click( function(){
    /* Write the response to the element.  */
    var dir = "http://bootcamp.aws.af.cm/welcome/tunombre"
    $.getJSON(dir, function(data){ 
      /* highlight your name in the server response content */
      var response = data.response.replace("tunombre", "<mark>Gisela</mark>"); 
      $('.response').append(response);
    })
    /* Show content in red when a server error occurs.  */
    .fail(function() {
      $('.response').css("color", "red");
    })
  });
});
