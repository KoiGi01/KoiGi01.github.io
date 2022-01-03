let currentMusic = 0;

const music = document.getElementById("audio");
const disk = document.querySelector('.disk');
const button = document.querySelector('.play-button');

button.addEventListener("click", playMusic);
button.addEventListener("keydown", event => {
    if (event.code === 'Space') {
      playMusic();
    }
  })

function playMusic() {
    //play-pause music --- cd animation
    button.classList.toggle('pause');
    disk.classList.toggle('play');

    if(button.className.includes('pause')){
        music.play();
    } else { music.pause();
    }
}