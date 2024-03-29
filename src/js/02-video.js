// 02-video.js
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  throttledUpdateTime(currentTime);
});

const throttledUpdateTime = throttle(function (currentTime) {
  localStorage.setItem('STORAGE_KEY', currentTime);
}, 1000);

window.addEventListener('load', function () {
  const savedTime = this.localStorage.getItem('STORAGE_KEY');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
});

// import Player from '@vimeo/player';
// const iframe = document.querySelector('iframe');
// const player = new Player('vimeo-player');

// player.on('timeupdate', function (event) {
//   const currentTime = event.seconds;

//   console.log('Поточний час відтворення:', currentTime);
//   // Зберігаємо значення "Hello, World!" за ключем "greeting" у локальному сховищі
//   localStorage.setItem('videoplayer-current-time', 'currentTime');
// });
// console.log(localStorage);

// 02-video.js
// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// const storage = window.localStorage;

// const throttleUpdateTime = throttle(function (currentTime) {
//   storage.setItem('videoplayer-current-time', currentTime);
// }, 1000);

// player.on('timeupdate', function (data) {
//   const currentTime = data.seconds;
//   throttleUpdateTime(currentTime);
// });

// window.addEventListener('beforeunload', function () {
//   player.getCurrentTime().then(function (currentTime) {
//     storage.setItem('videoplayer-current-time', currentTime);
//   });
// });
