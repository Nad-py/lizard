# Lizard.
A simple widget designed for obs that will say "lizard" when there is a word "lizard" in twitch chat. Lizard.
inspired by : twitch.tv/flex

# How to use it ?
I am hosting this on a cloudflare page at lizard-30f.pages.dev
Lizard.

## This app takes 3 parameters:
### username = twitch username for the chat we are monitoring for the word "lizard". (for example ?username=nadthekitten)
### volume = volume on a scale from 1 to 100, 100 being the loudest. (for example ?volume=100) 
### modpermission = whether we allow moderators to turn the app on or off. (for example ?modpermission=false to disallow them. Lizard.)

You use these parameters to add to the end of a link when adding a browser source, valid examples:
lizard-30f.pages.dev/?username=nadthekitten&volume=50
lizard-30f.pages.dev/?username=nadthekitten&modpermission=false
^ in this case, the volume will be set to max by default. moderators wont be able to use "stoplizarding" and "startlizarding" ^
lizard-30f.pages.dev/?username=nadthekitten&volume=5
^ in this case, the volume will be set to max by default. moderators CAN use "stoplizarding" and "startlizarding" ^
