const PARAMS = new URLSearchParams(window.location.search);
const LIZARDSOUND = document.getElementById("lizardSound");
const USERNAME = PARAMS.get("username");
const VOLUME = parseInt(PARAMS.get("volume"));

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    if(message.toLowerCase().includes("lizard")){
        let normalizedVolume = !isNaN(VOLUME) ? Math.max(0.01, Math.min(1, VOLUME / 100)) : 1;
        LIZARDSOUND.volume = normalizedVolume; 
        LIZARDSOUND.currentTime = 0;
        LIZARDSOUND.play();
    }   
}

ComfyJS.Init(USERNAME);