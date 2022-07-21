
# 86400_pi 

# The "One Day" setup ⏰️

This is the implementation of 86400 on a Raspberry Pi. It runs the clock via an HTML file, updating the background image every second.

It requires NPM to run the server. At some point this will be flashed to RPi SD cards, which will require a whole load more commands and things.

The `.gitignore` ignores the `public/img/` folder, as this is ~13gb and too big to host on GitHub.

Thanks to Jasper van Loenen for all of the help with this project!

The rest of this file is just personal notes in case I fudge up something on the Pi.

## RPi setup

I used the following guides to make this:
[ssh access](https://www.losant.com/blog/getting-started-with-the-raspberry-pi-zero-w-without-a-monitor)

3 guides to boot a Pi in Kiosk mode  
[1 (the most-used)](https://pimylifeup.com/raspberry-pi-kiosk/) [2](https://blog.gordonturner.com/2017/07/22/raspberry-pi-full-screen-browser-raspbian-july-2017/) [3](https://raspberrypi.stackexchange.com/questions/59310/remove-boot-messages-all-text-in-jessie)

The kiosk.sh file is included in the root of this folder. Follow guide in link 1 to put this in the right place and activate it.

For some unknown reason, the Pi's wifi no longer works. ??

## Backup

Backup file for the Pi is at `Desktop` / `oneday_backup.dmg`. I will back this up to a server at some point too, and list where it is here. The backup file was created using [this tutorial](https://computers.tutsplus.com/articles/how-to-clone-raspberry-pi-sd-cards-using-the-command-line-in-os-x--mac-59911).


## Loading RPi SD cards on Mac

[see this article](https://www.jeffgeerling.com/blog/2017/mount-raspberry-pi-sd-card-on-mac-read-only-osxfuse-and-ext4fuse)
