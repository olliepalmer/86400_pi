# first run these commands:
# sudo apt-get install git
# git clone https://github.com/olliepalmer/86400_pi.git
# cd ~/86400_pi
# chmod +x initial_install_86400.sh
# sh initial_install_86400.sh

# download the images in case they aren't in github
# wget https://www.dropbox.com/sh/1273ba9hgocqv8n/AAAm_Ve9oqNT4HwBmZKc6Foma?dl=1

sudo cp screen_driver/to_boot/* /boot/.
sudo cp screen_driver/to_boot_overlays/* /boot/overlays/.
sudo cp ~/86400_pi/screen_driver/desktop-items-0.conf /etc/xdg/pcmanfm/LXDE-pi/desktop-items-0.conf

sudo apt purge wolfram-engine scratch scratch2 nuscratch sonic-pi idle3 -y
sudo apt purge smartsim java-common minecraft-pi libreoffice* -y
sudo apt clean; sudo apt autoremove -y; sudo apt update; sudo apt upgrade; sudo apt install xdotool unclutter sed

cd ~
  # Install nodejs
  if [ "$(uname -m)" != "armv6l" ]; then
    curl -sL https://deb.nodesource.com/setup_16.x | bash -
  else
    wget -O - https://raw.githubusercontent.com/sdesalas/node-pi-zero/master/install-node-v16.3.0.sh | bash
  fi
  sudo apt-get -y install nodejs

npm install -g npm@8.15.0

cd 86400_pi
npm install
npm audit fix

sudo chmod a+x kiosk.sh

# finally, run
# sudo crontab -e
# and add 
# @reboot ~/86400_pi/kiosk.sh
# to a new line at the bottom! Voila, you're done!