
// Initialize the variables
let songIndex = 0;

let audioElement = new Audio ("Songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let conButtons = Array.from(document.getElementsByClassName("PlayButton"));
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById('CurrentSong');
let headingSongName = document.getElementById('Heading');

let songs = [
    
    {songName: "Gaddi ich", filePath: "/Songs/Song1.mp3" , coverPath: "Covers/cover1.jpg"},
    {songName: "Main agr kahoon", filePath: "/Songs/Song2.mp3" , coverPath: "Covers/cover2.jpg"},
    {songName: "Elevated", filePath: "/Songs/Song3.mp3" , coverPath: "Covers/cover3.jpg"},
    {songName: "Kali Kali Zulfu Kay Phandy", filePath: "/Songs/Song4.mp3" , coverPath: "Covers/cover4.jpg"},
    {songName: "Afsany", filePath: "/Songs/Song5.mp3" , coverPath: "Covers/cover5.jpg"},
    {songName: "Yeh jo halka halka suroor hy", filePath: "/Songs/Song6.mp3" , coverPath: "Covers/cover6.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
});

// Handle play/pause click

masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
    headingSongName.innerHTML = `Now Playing - ${songs[songIndex].songName}`;
});

// Buttons In container
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('PlayButton')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('PlayButton')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML = `Now Playing - ${songs[songIndex].songName}`;
        headingSongName.innerHTML = `Now Playing - ${songs[songIndex].songName}`;
        
        if (audioElement.paused || audioElement.currentTime<=0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add("fa-pause");
            conButtons.target.classList.add("fa-pause");
            gif.style.opacity = 1;
        }else{
            audioElement.pause();
            masterPlay.classList.remove("fa-pause");
            masterPlay.classList.add("fa-play");
            gif.style.opacity = 0;
        }
    });
});



// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    
    // Update Seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});


document.getElementById("next").addEventListener('click', ()=>{
    if (songIndex>=5) {
        songIndex = 0
    }else{
        songIndex +=1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerHTML = `Now Playing - ${songs[songIndex].songName}`;
    headingSongName.innerHTML = `Now Playing - ${songs[songIndex].songName}`;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
});

document.getElementById("previous").addEventListener('click', ()=>{
    if (songIndex<=0) {
        songIndex = 5;
    }else{
        songIndex -=1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerHTML = `Now Playing - ${songs[songIndex].songName}`;
    headingSongName.innerHTML = `Now Playing - ${songs[songIndex].songName}`;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
});


conButtons.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
} );

