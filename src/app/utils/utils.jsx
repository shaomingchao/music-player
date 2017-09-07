export function toolsPlayMusic(item) {
    $("#player").jPlayer("setMedia", {
        mp3: item.file
    }).jPlayer('play');
}