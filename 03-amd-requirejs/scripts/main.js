require.config({
  shim: {
    jquery: 'jquery'
  }
});

require(
  ['./movie', './director','./jquery'],
  function(Movie,director, $){
    var direc = new director("Steven Spielberg");
    direc.set("quotes", "Cast is everything");
    console.log(direc.speak());
    direc.set("quotes", "Thanks for the Oscar");
    console.log(direc.speak()); 

    var mov = new Movie();
    mov.set("name", "ET");
    mov.set("director", direc);
    console.log(mov.get("name"));
    mov.get("director").speak(); 
    mov.play();
    
    $(document).ready(function (){
      $('div').append(direc.speak());
    });
  }


);