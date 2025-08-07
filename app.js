const PARAMS = new URLSearchParams(window.location.search);
const LIZARDSOUND = document.getElementById("lizardSound");
const username = PARAMS.get("username");


ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    console.log("works");
    if(message.toLowerCase().includes("lizard")){
        LIZARDSOUND.currentTime = 0;
        LIZARDSOUND.play();
    }
}

ComfyJS.Init(username);