var number = 0;

var myVar = setInterval(function() {
    whatisthetime();
}, 10);

function whatisthetime() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    var number = /*(d.getHours()*60*60)+*/(d.getMinutes()*60)+d.getSeconds()+'.jpg';
    // document.body.style.backgroundImage = 'url('+number+')';
    // document.getElementById("number").innerHTML = youarel;
    
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url(img/'+number+')';

    document.getElementById("number").innerHTML = number;
}

/* fading interface */

var timedelay = 1;
var _delay = setInterval(delayCheck, 500);

function delayCheck() {
  if (timedelay == 3) {
    $('.interface').fadeOut();
    timedelay = 1;
  }
  timedelay = timedelay + 1;
}

function showAllEvent() {
  $('.interface').fadeIn();
  timedelay = 1;
  clearInterval(_delay);
  _delay = setInterval(delayCheck, 500);
}
