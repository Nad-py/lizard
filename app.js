const PARAMS = new URLSearchParams(window.location.search);
const LIZARDSOUND = document.getElementById("lizardSound");
const USERNAME = PARAMS.get("username");
const VOLUME = parseInt(PARAMS.get("volume"));
const MODPERMISSION = (PARAMS.get("modpermission") ?? "true").toLowerCase() === "true";
let appIsOn = true;

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    const isAllowedToChange = flags["broadcaster"] || (MODPERMISSION == true && flags["mod"]);
    const msgLower = message.toLowerCase();

    if(isAllowedToChange && msgLower == "stoplizarding"){
        appIsOn = false;
    }
    if(isAllowedToChange && msgLower == "startlizarding"){
        appIsOn = true;
    }

    if(appIsOn && msgLower.includes("lizard") ){
        let normalizedVolume = !isNaN(VOLUME) ? Math.max(0.01, Math.min(1, VOLUME / 100)) : 1;
        LIZARDSOUND.volume = normalizedVolume; 
        LIZARDSOUND.currentTime = 0;    
        LIZARDSOUND.play();
    }

    // keeping this here so that i dont rewrite it 10 times :3
    // console.log("app is on: ", appIsOn);
    // console.log("allowed?: ", isAllowedToChange);
    // console.log("message: ", message);
    // console.log("flags: ", flags);
}

ComfyJS.Init(USERNAME);