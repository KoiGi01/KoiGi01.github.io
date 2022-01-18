let currentMusic = 0;

var music = document.getElementById("audio");
var music2 = document.getElementById("audio2");
var currentSong = music;
const disk = document.querySelector('.disk');
const button = document.querySelector('.play-button');
const skip = document.querySelector('.change');
var order = music;

button.addEventListener("click", playMusic);
skip.addEventListener("click", changeSong);
button.addEventListener("keydown", event => {
    if (event.code === 'Space') {
      playMusic();
    }
  })

function playMusic() {
    //play-pause music --- cd animation
    currentSong = order;
    button.classList.toggle('pause');
    disk.classList.toggle('play');

    if(button.className.includes('pause')){
        currentSong.play();
    } else { currentSong.pause();
    }
}
function changeSong() {

  button.classList.toggle('pause');
  disk.classList.toggle('play');
  currentSong.pause();
  
  if(currentSong == music){
      order = music2;
      console.log(currentSong);
  } else {
      order = music;
  }
  
}
