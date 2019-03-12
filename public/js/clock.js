var justHidden = false;
var j;
var myVar = setInterval(function() {
    whatisthetime();
}, 50);

function hide() {
  $('html').css({
    cursor: 'none'
  });
  justHidden = true;
  setTimeout(function() {
    justHidden = false;
  }, 500);
}

$(document).mousemove(function() {
  if (!justHidden) {
    justHidden = false;
    console.log('move');
    clearTimeout(j);
    $('html').css({
      cursor: 'default'
    });
    j = setTimeout(hide, 1000);
  }
})

// this part works
function whatisthetime() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    var number = (d.getHours() * 60 * 60) + (d.getMinutes() * 60) + d.getSeconds() + '.jpg';
    var img = new Image();
    document.body.style.backgroundImage = "url('img/" + number + "')";
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

$(window).mousedown(function(e) {
    clearTimeout(this.downTimer);
    this.downTimer = setTimeout(function() {
        alert('mousedown > 2 sec');   
    }, 2000);
}).mouseup(function(e) {
    clearTimeout(this.downTimer);
});
