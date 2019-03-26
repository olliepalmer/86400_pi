var psec = 0;
var sec = 0;
var d;
var images = true;

// check the time every 50ms
var myVar = setInterval(function() {
    whatisthetime();
}, 20);

function whatisthetime() {
  d = new Date();
  sec = d.getSeconds();
  if (sec != psec){
      psec = sec;
      update();
  }
}

function update() {
  var number = (d.getHours() * 60 * 60) + (d.getMinutes() * 60) + d.getSeconds() + '.jpg';
  document.getElementById("hh").innerHTML = (d.getHours() < 10? '0' : '') + d.getHours();
  document.getElementById("mm").innerHTML = (d.getMinutes() < 10? '0' : '') + d.getMinutes();
  document.getElementById("ss").innerHTML = (d.getSeconds() < 10? '0' : '') + d.getSeconds();
  // $('body').css('background-image', "url('img/" + number + "')");
  if (images){
    document.body.style.backgroundImage = "url('img/" + number + "')";
  } else {
    document.body.style.backgroundImage = 'none';
  }
}


/* fading interface */

var timedelay = 1;
var _delay = setInterval(delayCheck, 500);

function delayCheck() {
    if (timedelay == 3) {
        $('.interface').hide(); /* change to $('.interface').fadeOut(); on a fast computer */
        timedelay = 1;
    }
    timedelay = timedelay + 1;
    images = true;
}

function showAllEvent() {
    $('.interface').show();/* change to $('.interface').fadeIn(); on a fast computer */
    timedelay = 1;
    clearInterval(_delay);
    _delay = setInterval(delayCheck, 500);
    images = false;

}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function on2() {
  document.getElementById("overlay2").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("overlay2").style.display = "none";
}

$(window).mousedown(function(e) {
    clearTimeout(this.downTimer);
    this.downTimer = setTimeout(function() {
        alert('mousedown > 2 sec');   
    }, 2000);
}).mouseup(function(e) {
    clearTimeout(this.downTimer);
    update();
});

function hide() {
  document.getElementById("clock").classList.toggle('interface');
  if ( document.getElementById("clock").classList.contains('interface') ) {
    document.getElementById("hide").innerHTML = "show clock";
  } else {
    document.getElementById("hide").innerHTML = "hide clock";
  }
}