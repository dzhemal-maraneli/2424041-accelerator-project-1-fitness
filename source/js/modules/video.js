const videoWrapper = document.querySelector('.about__video');
const playButton = videoWrapper.querySelector('.about__video-play-button');
const videoLink = videoWrapper.querySelector('.about__video-link');
const videoSrc = 'https://www.youtube.com/embed/9TZXsZItgdw?si=EIWmPhl5YhnnsCG8&autoplay=1';

function videoHandler() {
  videoLink.remove();

  playButton.addEventListener('click', () => {
    const iframe = createIframe();

    playButton.remove();
    videoWrapper.appendChild(iframe);
  });
}


function createIframe() {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('src', videoSrc);
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'autoplay', 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('allowfullscreen', 'true');

  return iframe;
}

videoHandler();
