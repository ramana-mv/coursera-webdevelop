(function (window) {
  var byeSpeaker={};
  byeSpeaker.speak=function (name) {
    byeSpeaker.name=name;
    var speakWord = "Good Bye";
    console.log(speakWord + " " + byeSpeaker.name);
  }
  window.byeSpeaker=byeSpeaker;
})(window);