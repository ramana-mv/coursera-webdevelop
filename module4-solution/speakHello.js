(function (window) {
  var helloSpeaker={};
  helloSpeaker.speak=function (name) {
    helloSpeaker.name=name;
    var speakWord = "Hello";
    console.log(speakWord + " " + helloSpeaker.name);
  }
  window.helloSpeaker=helloSpeaker;
})(window);
