# Lizard.
A simple widget designed for obs that will say "lizard" when there is a word "lizard" in twitch chat. Lizard.
inspired by : [twitch.tv/flex](https://twitch.tv/flex).  

# How to use it ?
I am hosting this on a cloudflare page at **lizard-30f.pages.dev**
Lizard.

To use it in OBS, add it as a **Browser Source** with the appropriate URL parameters.

## This app takes 3 parameters:
| Parameter       | Description                                                                 | Example                                       |
|-----------------|-----------------------------------------------------------------------------|-----------------------------------------------|
| `username`      | Twitch username for the chat to monitor                                     | `?username=nadthekitten`                      |
| `volume`        | Volume from **1 to 100** (100 = loudest). Optional, defaults to 100         | `?volume=50`                                  |
| `modpermission` | Whether moderators can toggle the app with commands. Optional, defaults to `true` | `?modpermission=false`                        |

### You use these parameters by embedding them to the end of a link when adding a browser source, valid examples when i try to track my own channel (nadthekitten):


- `https://lizard-30f.pages.dev/?username=nadthekitten&volume=50`  
  → Volume set to 50%, moderators **CAN** use commands

- `https://lizard-30f.pages.dev/?username=nadthekitten&modpermission=false`  
  → Max volume, moderators **CANNOT** use commands

- `https://lizard-30f.pages.dev/?username=nadthekitten`  
  → Max volume, moderators **CAN** use commands

- `https://lizard-30f.pages.dev/?username=nadthekitten&volume=50&modpermission=false`  
  → Volume 50%, moderators **CANNOT** use commands

## To pause the app, type "stoplizarding" in chat as a broadcaster or moderator(if permitted as shown above), same applies to "startlizarding"
## Notes

- Detects messages that **include** the word `"lizard"` (case-insensitive).
- Audio plays directly in the **browser source** – no external file needed.
- Volume is scaled: 1–100 → 0.01–1.0 internally.
- Audio is embedded using **base64**.
- If you fork or reuse this project, please credit the original creator!

##  Contact

For questions, customizations, or commissions for similar widgets:  
 Discord: **nadthekitten**  
 VGen: [https://vgen.co/nadthekitten](https://vgen.co/nadthekitten)

## Lizard.
