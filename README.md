# 86400_pi

# The "One Day" Raspberry Pi setup ⏰️

This is the GitHUb repo that runs the [86400](https://olliepalmer.com/86400) film on a Raspberry Pi for my "One Day" viewers for the film, which I sell via my website. 86400 is a 24-hour film made of one image per second, from a Google Image search for the time (e.g. 18:24:36), and the images were scraped in 2015-16. The "One Day" viewers show the film in real-time via a special little website that is embedded on a Raspberry Pi which is put into a converted slide viewer. There are currently a limited edition of ten in Pallas CX5x5 viewers.

This code is created for me, and for the viewers I use which have a very specific setup, so it probably won't be of interest to anyone else. Nevertheless, teh Raspberry Pis look for updates every time they restart, so this repo is public.

The viewers launch a full-screen website on launch. Each viewer connects to the wifi of whomever bought it to set the system clock. The website has a little javascript function which checks the time multiple times per second, and loads the appropriate image.

Note this repo contains the drivers for the specific screens, the website, and everything else EXCEPT the images. They're too big for a repo.

The website requires NPM to run the server.

Thanks to [Jasper van Loenen](https://github.com/javl)  for all of the help with this project!

The rest of this file is just personal notes in case I fudge up something on the Pi.

There is a parallel Google Doc with all of the instructions to make each SD card (cloning seems to just mess up each time) and at some point I'll integrate those intstructions into either a script (that'd be great!) or, more likely in the short-term, a tutorial that I follow each time.

Anyway, this is all in progress. The original versions of these viewers were made in 2019, and I am finally updating them now. Such is life.
