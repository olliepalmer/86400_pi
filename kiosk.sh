#!bin/bash
git pull
xset s noblank
xset s off
xset -dpms
unclutter -idle 0.5 -root &
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/oneday/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/oneday/.config/chromium/Default/Preferences
/usr/local/bin/npm start --prefix /home/oneday/86400_pi &
sleep 30
DISPLAY=:0 /usr/bin/chromium-browser --noerrdialogs --disable-infobars --incognito --kiosk http://localhost:8000 &