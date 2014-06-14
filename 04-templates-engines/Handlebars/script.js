$(document).ready(function(){
  $.getJSON('./userData.json', function(data){
    var template = Handlebars.compile($("#basic-template").html());
    $(".profile").html(template(data));
  });
});