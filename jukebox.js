
var jukebox = null;
var playing = false;

function loadJukebox(){
    var trackPath = 'tunes/Ben Briggs - Dont Force It.mp3';

    jukebox = document.createElement('audio');
    jukebox.setAttribute('src', trackPath);
    // jukebox.setAttribute('preload', true);
    jukebox.setAttribute('loop', true);
}

function petKitty(){
    playing = !playing;
    if (playing){
        jukebox.play();
    } else {
        jukebox.pause();
    }
}
