/* Create a Movie object */
/*var Movie = function () {
  var nameMovie;
  var yearOut;
  var subscribers;
};

Movie.prototype.play = function() {
  console.log("playing  "+Movie.nameMovie);
};

Movie.prototype.stop = function() {
  console.log("stopped  "+Movie.nameMovie);
};

Movie.prototype.set = function(attr, value) {
  Movie.nameMovie=attr;
  Movie.yearOut=value;
  console.log("Setting attributes");
};

Movie.prototype.get = function() {
  return Movie.nameMovie;
  console.log("Getting the movie name");
};

Movie.prototype.addSubscriber = function (callback) {
  this.subscribers.push(callback);
};

Movie.prototype.publish = function (what) {
  for (var i = 0; i < this.subscribers.length; i++) {
    if (typeof this.subscribers[i] === 'function') {
      this.subscribers[i](what);
    }
  }
}; */




/* Refactor Movie class as a Module keeping your previous code for reference. */
var Movie = ( function () {
  var Movie =  function () { };

  var atts = {};
  var subscribers = [];

  /* Show how you would add an array of actors to a Movie object */
  /* puedo agregar en el hash de atributos los actores con la clave actor 1: leonardo di caprio por ejemplo, y asi con todos */

  Movie.prototype = {
    play : function() {
    /* Publish "playing" event on Movie.play(). */
      console.log("playing  "+ atts['name']);
      this.publish("play");
    },
    stop : function() {
    /* Publish "stopped" event on Movie.stop() */
      console.log("stopped  "+ atts['name']);
      this.publish("Stop");
    },
    /* Log to console when each event is fired. */
    set : function(atrr, value) {
      atts[atrr] = value;
      console.log("Setting attributes");
    },
    get : function() {
      console.log("Getting the movie name");
      return atts['name'];
    },
    addSubscriber : function (callback) {
      console.log("adding subscribers");
      subscribers.push(callback);
    },
    publish : function (what) {
     for (var i = 0; i < subscribers.length; i++) {
        if (typeof subscribers[i] === 'function') {
          subscribers[i](what);
        }
      }
    },
  };
  return Movie;
})();


/* Instantiate some of your favorite movies and play with them in the console. */
var movieone = new Movie();
console.log("PROBANDO EL OBJETO MOVIE");
movieone.set("name", "Toy Story");
movieone.get();
movieone.addSubscriber("gise");
movieone.play();
movieone.stop();


/* Create a DownloadableMovie that extends from Movie */
var DownloadableMovie = function(){
  var size;
};

DownloadableMovie.prototype = new Movie();
DownloadableMovie.prototype.constructor = DownloadableMovie;

/* adding a downloadmethod. */
DownloadableMovie.prototype.download = function(){
  console.log("Downloading movie "+ this.get());
};

DownloadableMovie.prototype.setSize = function(size){
  this.size = size;
};

DownloadableMovie.prototype.getSize = function(){
  return this.size;
};

var movietwo= new DownloadableMovie();
console.log("PROBANDO OBJETO DOWNOLOADABLEMOVIE");
/* checking if the inheritance is correct */
console.log(movietwo instanceof Movie);
movietwo.set("21 jump street" , "2013");
movietwo.setSize("700");
movietwo.download();
console.log(movietwo.getSize());

/* Create an Actor class */
var Actor = function() {
  var name;
  var dateBirth;
};

Actor.prototype.getName = function() {
  return this.name;
};

Actor.prototype.getdateBirth = function() {
  return this.dateBirth;
};

Actor.prototype.set = function(nameAc, date) {
  this.name=nameAc;
  this.dateBirth=date;
};

var Actor1 = new Actor();
Actor1.set("Leonardo Di Caprio", "1974");
var Actor2 = new Actor();
Actor2.set("Jennifer Aniston", "1978");
var Actor3 = new Actor();
Actor3.set("Emma Watson", "1988");

/* checking */
console.log("PROBANDO OBJETO ACTOR");
console.log(Actor1.getName());
console.log(Actor2.getdateBirth());

/* adding actor to movie */
var example = new Movie();
example.set("principal actor", Actor2);


/* Create a mixin object called Social with the methods: share(friendName) and like(). */
var Social = {
  share : function(who) {
    console.log("sharing "+ this.get() + " with "+ who);
  },
  like : function() {
    console.log("i like it ");
  }
};


/* function extend */
function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

var movieshare = new Movie();
movieshare.set("name", "Titanic");
movieshare.set("actor", Actor1);
console.log(movieshare.get());

console.log("PROBANDO SHARE");
/* Apply the mixin to Movie object */
extend(movieshare, Social);
movieshare.like();
movieshare.share("gise");

