/* When the page has finished loading the section must fade in. */
$(document).ready(function() {

  //var twurl= "http://tweetproxy.ap01.aws.af.cm/search";
  //var data= "q=html5";
  /* $.get(twurl, function(data) {
     First log the service response in Chrome's console to analyze data 
    console.log(data.response);
    dataType: 'jsonp',
    var resp = data.response;
    /*  then display tweets inside another section in the right side of the screen 
    $('.sectionTw').append(resp);
  }); */
  
  $.ajax({
    url: "http://tweetproxy.ap01.aws.af.cm/search",
    jsonp: "callback",
    dataType: "jsonp",
    data: {
     format: "json"
    },
    // work with the response
    success: function( response ) {
     /*  First log the service response in Chrome's console to analyze data  */
     console.log( response );
     /*  then display tweets inside another section in the right side of the screen  */
     $('.sectionTw').append(data.response);
    }
   });

  $('hidden').fadeIn('slow');

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
