const music = new Audio('dafa.mp3');

const songs = [
    {
        id:'1',
        songName:` Tu Hai Kahan <br><div class="subtitle">AUR</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` ON MY WAY <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id:'3',
        songName:` Shiv Tandav <br>
        <div class="subtitle">ananya basu</div>`,
        poster: "img/3.jpg"
    },
    {
        id:'4',
        songName:` NeeleNeele Ambar <br>
        <div class="subtitle">Kishore Kumar</div>`,
        poster: "img/4.jpg"
    },
    {
        id:'5',
        songName:` Light Switch <br>
        <div class="subtitle">charlie puth</div>`,
        poster: "img/5.jpg"
    },
    {
        id:'6',
        songName:` Kya Khoob <br>
        <div class="subtitle">Mukesh</div>`,
        poster: "img/6.jpg"
    },
    {
        id:'7',
        songName:` GOAT <br>
        <div class="subtitle">Sidhu Moose wala</div>`,
        poster: "img/7.jpg"
    },
    {
        id:'8',
        songName:` Dil Luteya <br>
        <div class="subtitle">Jazzy B</div>`,
        poster: "img/8.jpg"
    },
    {
        id:'9',
        songName:` Aarambh He <br>
        <div class="subtitle">Piyush Mishra, Rahul Ram</div>`,
        poster: "img/9.jpg"
    },
    {
        id:'10',
        songName:` Prem Ki Naiya <br>`,
        poster: "img/10.jpg"
    },
    {
        id:'11',
        songName:` Guzarish<br>
        <div class="subtitle">javed alir</div>`,
        poster: "img/11.jpg"
    },
    {
        id:'12',
        songName:` Falak Tak <br>
        <div class="subtitle">various artist</div>`,
        poster: "img/12.jpg"
    },
    
    {
        id:'13',
        songName:` O Maahi <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/13.jpg"
    },
    {
        id:'14',
        songName:` Afreen Afreen <br>
        <div class="subtitle">Rahat Fateh Ali</div>`,
        poster: "img/14.jpg"
    },
    {
        id:'1',
        songName:` Tu Hai Kahan <br><div class="subtitle">AUR</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` ON MY WAY <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id:'3',
        songName:` Shiv Tandav <br>
        <div class="subtitle">ananya basu</div>`,
        poster: "img/3.jpg"
    },
    {
        id:'4',
        songName:` NeeleNeele Ambar <br>
        <div class="subtitle">Kishore Kumar</div>`,
        poster: "img/4.jpg"
    },
    
    {
        id:'5',
        songName:` Light Switch <br>
        <div class="subtitle">charlie puth</div>`,
        poster: "img/5.jpg"
    },
    
    
    
]

Array.from(document.getElementsByClassName('songItem')).forEach((ele, i)=>{
    ele.getElementsByTagName('img')[0].src = songs[i].poster;
    ele.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPLay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');

    }
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((ele)=>{
        ele.classList.add('bi-play-circle-fill');
        ele.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((ele)=>{
    ele.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended', () =>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2')
        })
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});