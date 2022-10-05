
const throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function (seconds) {
  })
  .catch(function (error) {
    console.log('error')
  });



player.on('play', playOn);


function playOn (event) {
    
    player.on('timeupdate', throttle(onTimeUpdate, 1000));
}

function onTimeUpdate (evt) {
   setLocalStorage( evt.seconds)
   

}

function setLocalStorage (currentTime) { 
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime))
}

// 1. player.setCurrentTime перед player.on, щоб спрацьовувало при перезавантаженны сторынки. при першому заходы буде помилка, так як код не зможе отримати данны з локального сходища (їх там немає), тому треба огорнути в конструкцію try...catch
// 2. player.on куди передаэмо функцію при натиску на play.
// 3. вішаємо слухач на timeupdate після натиску на play.
// 4. в функції onTimeUpdate записуємо час програвання відео в локарльне сховище.
// 5. при перезавантеженні сторінки при запуску player.setCurrentTime функція вже зможу отпримати данні з локального сховища, і запистить відео з таймінга коли зупинили минулий раз.
