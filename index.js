'use strict';

process.env.TZ = 'Europe/Amsterdam';

const { exec } = require('child_process');
const express = require('express');
var app = express();
app.use(express.static('public'));
var nunjucks = require('nunjucks');

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
    // res.send('ok');
    console.log('shutting down!');
    res.redirect('/');
    exec('sudo shutdown -h now', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log('some error!');
            return;
        }
    });
});

app.get('/h_plus_ten', function(req, res) {
    // res.send('ok');
    console.log('h+10');
    exec('sudo date --set="+10 hour"', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log('some error!');
            return;
        }
    });
    res.redirect('/');
});

app.get('/h_plus', function(req, res) {
    // res.send('ok');
    console.log('h+1');
    exec('sudo date --set="+1 hour"', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log('some error!');
            return;
        }
    });
    res.redirect('/');
});

app.get('/m_plus_ten', function(req, res) {
    // res.send('ok');
    console.log('m+10');
    // do fancy time up stuff
    exec('sudo date --set="+10 minute"', (err, stdout, stderr) => {
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
    console.log('m+1');
    // do fancy time up stuff
    exec('sudo date --set="+1 minute"', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log('some error!');
            return;
        }
    });
    res.redirect('/');
});

app.get('/s_plus_ten', function(req, res) {
    // res.send('ok');
    console.log('s+10');
    // do fancy time up stuff
    exec('sudo date --set="+10 second"', (err, stdout, stderr) => {
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
    console.log('s+1');
    // do fancy time up stuff
    exec('sudo date --set="+1 second"', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log('some error!');
            return;
        }
    });
    res.redirect('/');
});


app.get('/h_minus_ten', function(req, res) {
    // res.send('ok');
    console.log('h-10');
    // do fancy time up stuff
    exec('sudo date --set="-10 hour"', (err, stdout, stderr) => {
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
    console.log('h-1');
    // do fancy time up stuff
    exec('sudo date --set="-1 hour"', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log('some error!');
            return;
        }
    });
    res.redirect('/');
});

app.get('/m_minus_ten', function(req, res) {
    // res.send('ok');
    console.log('m-10');
    // do fancy time up stuff
    exec('sudo date --set="-10 minute"', (err, stdout, stderr) => {
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
    console.log('m-1');
    // do fancy time up stuff
    exec('sudo date --set="-1 minute"', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log('some error!');
            return;
        }
    });
    res.redirect('/');
});

app.get('/m_minus_ten', function(req, res) {
    // res.send('ok');
    console.log('m-10');
    // do fancy time up stuff
    exec('sudo date --set="-10 minute"', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log('some error!');
            return;
        }
    });
    res.redirect('/');
});

app.get('/s_minus_ten', function(req, res) {
    // res.send('ok');
    console.log('s-10');
    // do fancy time up stuff
    exec('sudo date --set="-10 second"', (err, stdout, stderr) => {
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
    console.log('s-1');
    // do fancy time up stuff
    exec('sudo date --set="-1 second"', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log('some error!');
            return;
        }
    });
    res.redirect('/');
});

app.get('/killbrowser', function(req, res) {
    // res.send('ok');
    console.log('killing chromium-browser');
    // do fancy time up stuff
    exec('sudo pkill chromium; sudo pkill chromium-browser; sudo killall chromium-browser; sudo killall chromium', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log('some error!');
            return;
        }
    });
    res.redirect('/');
});

app.listen(8000, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("App started at port 8000");
    }
});