
# 86400_pi

This is the implementation of 86400 on a Raspberry Pi. It runs the clock via an HTML file, updating the background image every second.

It requires NPM to run the server. At some point this will be flashed to RPi SD cards, which will require a whole load more commands and things.

The `.gitignore` ignores the `public/img/` folder, as this is ~13gb and too big to host on GitHub.

Thanks to Jasper van Loenen for getting this implementation started!



## RPi setup

[ssh access](https://www.losant.com/blog/getting-started-with-the-raspberry-pi-zero-w-without-a-monitor)

pi as kiosk
[1](https://pimylifeup.com/raspberry-pi-kiosk/)
[2 - recommended by Jasper](https://blog.gordonturner.com/2017/07/22/raspberry-pi-full-screen-browser-raspbian-july-2017/)

[3 - hide boot screens!](https://raspberrypi.stackexchange.com/questions/59310/remove-boot-messages-all-text-in-jessie)