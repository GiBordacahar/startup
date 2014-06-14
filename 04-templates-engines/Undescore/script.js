$(document).ready(function(){
  $.getJSON('./userData.json', function(data){
    var content = _.template($("#basic-template").html(), data);
    $("#prof").html(content);
  });
});

