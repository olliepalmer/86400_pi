'use strict';

process.env.TZ = 'Europe/Amsterdam';

const { exec }     = require('child_process');
const express      = require('express');
var app            = express();
app.use(express.static('public'));
var nunjucks       = require('nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('index.html', {
        // name: 'something'
    });
});

app.get('/shutdown', function(req, res) {
    res.send('ok');
    console.log('shutting down!');
    res.redirect('/');
    // exec('shutdown -h now', (err, stdout, stderr) => {
    //   if (err) {
    //     // node couldn't execute the command
    //     console.log('some error!');
    //     return;
    //   }
    // });
});


app.get('/h_plus', function(req, res) {
    // res.send('ok');
    console.log('h+');
    exec('date --set="+1 hour"', (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        console.log('some error!');
        return;
      }
    });
    res.redirect('/');
});

app.get('/h_minus', function(req, res) {
    // res.send('ok');
    console.log('h-');
    // do fancy time up stuff
    exec('date --set="-1 hour"', (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        console.log('some error!');
        return;
      }
    });
    res.redirect('/');
});

app.get('/m_plus', function(req, res) {
    // res.send('ok');
    console.log('m+');
    // do fancy time up stuff
    exec('date --set="+1 minute"', (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        console.log('some error!');
        return;
      }
    });
    res.redirect('/');
});

app.get('/m_minus', function(req, res) {
    // res.send('ok');
    console.log('m-');
    // do fancy time up stuff
    exec('date --set="-1 minute"', (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        console.log('some error!');
        return;
      }
    });
    res.redirect('/');
});

app.get('/s_plus', function(req, res) {
    // res.send('ok');
    console.log('s+');
    // do fancy time up stuff
    exec('date --set="+1 second"', (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        console.log('some error!');
        return;
      }
    });
    res.redirect('/');
});

app.get('/s_minus', function(req, res) {
    // res.send('ok');
    console.log('s-');
    // do fancy time up stuff
    exec('date --set="-1 second"', (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        console.log('some error!');
        return;
      }
    });
    res.redirect('/');
});


app.listen(8000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("App started at port 8000");
    }
});