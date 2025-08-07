const PARAMS = new URLSearchParams(window.location.search);
const LIZARDSOUND = document.getElementById("lizardSound");
username = PARAMS.get("username");

const client = new tmi.Client({
    channels: [ username ]
});


client.connect();


client.on('message', (channel, tags, message, self) => { 
    if(message.toLowerCase().includes("lizard")){
        LIZARDSOUND.currentTime = 0;
        LIZARDSOUND.play();
    }
});
