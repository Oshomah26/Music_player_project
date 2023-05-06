const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const replay = document.getElementById('loop');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');


// Song titles
const songs = ['Asake', 'hey', 'summer', 'ukulele', 'Wande']

// keep track of song 

let songIndex = 0; 

// Initially load song details 
loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
    
}

function playSong() {
    musicContainer.classList.add('play'); 
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}


function pauseSong() {
    musicContainer.classList.remove('play'); 
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause();

}

function prevSong(){
    songIndex--;

    if(songIndex < 0) {
        songIndex = songs.length -  1; 
    }

    loadSong(songs[songIndex]);
    playSong();
}

function nextSong(){
    songIndex++;

    if(songIndex > songs.length - 1 ) {
        songIndex = 0; 
    }

    loadSong(songs[songIndex]);
    playSong();
}

function replaySong(){
     if (audio.loop) {
        audio.loop = false;
        document.querySelector('#loop').style.color = '#dfdbdf';
     } else {
        audio.loop = true;
        document.querySelector('#loop').style.color = '#ed851d';

     }
  
    // playSong();
}

function updateProgress(e){
    const {duration, currentTime} = e.target;
    const progressPercent = (currentTime/duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const  duration = audio.duration;

    audio.currentTime = (clickX / width) * duration; 
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if  (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

replay.addEventListener('click', replaySong);

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);

progressContainer.addEventListener('click', setProgress);

