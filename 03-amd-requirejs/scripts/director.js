/* Create a Director class inside a module and set it as a dependency on the Movie module.  */
define( function () {
  var director = function(named) {
    this.name=named;
  }
  /* Add name:string, a quotes:array properties, and a speak()methods to Director; calling speak() will return director’s quotes. */
  var quotes = [];
  
  director.prototype = {
    speak : function() {
        return this.name + " says " +quotes;
    },
    getName : function() {
      return this.name;
    },
    set : function(what, content) {
      if (what === 'name') {
        this.name = content;
      }
      else {
        quotes.push(content);
      }
    }
  };
  return director;
});
