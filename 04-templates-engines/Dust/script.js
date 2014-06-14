$(document).ready(function(){
  $.getJSON('userData.json', function(data){
    var source = $("#basic-template").html();
    var compiled = dust.compile(source,"dat");
    dust.loadSource(compiled);
    dust.render("dat",data, function(err,out) {
      $("#content").html(out);
    });
  });
});
