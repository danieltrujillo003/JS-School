/* eslint-env browser */
/* eslint no-param-reassign: "error" */
/* eslint no-return-assign: "error" */
/* eslint no-restricted-globals: ["error", "event"] */
const notes = {
  do: '65',
  doHash: '87',
  re: '83',
  reHash: '69',
  mi: '68',
  fa: '72',
  faHash: '85',
  sol: '74',
  solHash: '73',
  la: '75',
  laHash: '79',
  si: '76',
};
const pianoKeys = document.querySelectorAll('.piano-key');
const countSong = document.getElementById('count-song');
const pianomanSong = document.getElementById('pianoman-song');
const countSongNotes = (
  [notes.fa, notes.fa, notes.re, notes.fa, notes.la, notes.re, notes.do, notes.fa, notes.la]
);
const pianomanSongNotes = (
  [notes.sol, notes.sol, notes.sol, notes.sol, notes.fa, notes.mi, notes.fa, notes.mi, notes.do]
);
const keyCodes = [65, 68, 69, 72, 73, 74, 75, 76, 79, 83, 85, 87];

const path = window.location.pathname;
const page = path.split('/').pop(); // It is assigned the HTML file name to a variable

let lyricNumber = 0;

screen.orientation.lock('landscape'); // A test for only landscape app functionality

// playClick function is defined to trigger the sound when clicking a key
function playClick(sound) {
  if (sound.paused) {
    sound.play();
  } else {
    sound.currentTime = 0;
  }
  const lyrics = Array.from(document.querySelector('.lyrics').children);
  if (page === 'pianoman.html') {
    if (lyricNumber < pianomanSongNotes.length && sound.id === pianomanSongNotes[lyricNumber]) {
      lyrics[lyricNumber].style.display = 'block';
      lyricNumber += 1;
    } else if (lyricNumber === pianomanSongNotes.length) {
      pianomanSong.volume = 0.7;
      pianomanSong.play();
    } else {
      lyrics.map((lyric, index) => ((index <= lyricNumber) && (lyric.style.display = 'none')));
      lyricNumber = 0;
    }
  } else if (page === 'count.html') {
    if (lyricNumber < countSongNotes.length && sound.id === countSongNotes[lyricNumber]) {
      lyrics[lyricNumber].style.display = 'block';
      lyricNumber += 1;
    } else if (lyricNumber === countSongNotes.length) {
      countSong.volume = 0.5;
      countSong.play();
    } else {
      lyrics.map((lyric, index) => (index <= lyricNumber && (lyric.style.display = 'none')));
      lyricNumber = 0;
    }
  }
}
// coloredKey is defined to change the key color when clicking
function coloredKey(key) {
  const keyId = document.getElementById(key);
  keyId.classList.add('tomato');
}
// decoloredKey is defined to return the original key color when not clicking
function decoloredKey(key) {
  const keyId2 = document.getElementById(key);
  keyId2.classList.remove('tomato');
}
// playKey function is defined to trigger the sound when pressing the matching letter key
function playKey(key) {
  if (keyCodes.includes(key.keyCode)) {
    const audio = document.getElementById(key.keyCode);
    playClick(audio);
  }
}
// playKeyColor is defined to return the original key color when not pressing a key
function playKeyColor(key) {
  if (keyCodes.includes(key.keyCode)) {
    document.getElementById(key.keyCode).parentElement.classList.add('tomato');
  }
}
// playKeyDecolor is defined to return the original key color when not pressing a key
function playKeyDecolor(key) {
  if (keyCodes.includes(key.keyCode)) {
    document.getElementById(key.keyCode).parentElement.classList.remove('tomato');
  }
}
// runFunc is defined to run the click functionality of the app
function runFunc(id, note) {
  if (screen.width < 1024) {
    document.getElementById(id).addEventListener('touchstart', () => { playClick(note); });
  } else {
    document.getElementById(id).addEventListener('mousedown', () => { playClick(note); });
  }
  document.getElementById(id).addEventListener('mousedown', () => { coloredKey(id); });
  document.getElementById(id).addEventListener('mouseup', () => { decoloredKey(id); });
  document.getElementById(id).addEventListener('touchstart', () => { coloredKey(id); });
  document.getElementById(id).addEventListener('touchend', () => { decoloredKey(id); });
  document.getElementById(id).addEventListener('mouseout', () => { decoloredKey(id); });
}
// The way it catches the clicked piano key to play an color the proper note
Array.from(pianoKeys, (key) => {
  runFunc(key.id, key.children[0]);
  return true;
});
// The way it recognizes the key pressed to play and color the propper note
window.addEventListener('keydown', playKey, false);
window.addEventListener('keydown', playKeyColor, false);
window.addEventListener('keyup', playKeyDecolor, false);
