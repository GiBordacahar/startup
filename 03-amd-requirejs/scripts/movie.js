/* Create the same Movie class as in the previous practice, but inside a module; the module will be an external file. */
define(['./director'], function () {
  var Movie =  function () { };

  var atts = {};

  Movie.prototype = {
    play : function() {
      console.log("playing  "+ atts['name']);
    },
    stop : function() {
      console.log("stopped  "+ atts['name']);
    },
    set : function(atrr, value) {
      atts[atrr] = value;
    },
    get : function(what) {
      return atts[what];
    }
  };
  return Movie;
});
