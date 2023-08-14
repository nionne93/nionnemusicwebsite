'use strict'

let currentMusic = 0;
const music = document.querySelector('#audio');
const playBtn = document.querySelector('.play-btn');



playBtn.addEventListener('click', () => {
   if(playBtn.className.includes('pause')){
      music.play();
   } else{
       music.pause();
   }
    playBtn.classList.toggle('pause');
})

const playMusic = () => {
    music.play();
    playBtn.classList.remove('pause');
    disk
}
const setMusic = (i)=> {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;


}

setMusic(0)