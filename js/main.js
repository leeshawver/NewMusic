function startExperience() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('story').style.display = 'block';

  const randomStory = stories[Math.floor(Math.random() * stories.length)];
  renderStep(randomStory.id, 0);
}

function renderStep(storyId, stepIndex) {
  const container = document.getElementById('story-container');
  const story = stories.find(s => s.id === storyId);
  const step = story.steps[stepIndex];

  container.innerHTML = `<p>${step.prompt}</p>`;

  step.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt.text;

    btn.onclick = () => {
      if (opt.reveal) {
        showReveal(opt.reveal);
      } else {
        renderStep(storyId, opt.next);
      }
    };

    container.appendChild(btn);
  });
}

function showReveal(albumId) {
  const album = albums.find(a => a.id === albumId);

  document.getElementById('story').style.display = 'none';
  document.getElementById('reveal').style.display = 'block';
  document.getElementById('album-title').textContent = album.title;
  document.getElementById('album-description').textContent = album.description;
  document.getElementById('album-link').href = album.link;
  document.getElementById('album-art').src = album.image;
  document.getElementById('album-artist').textContent = album.artist;
}

window.onload = function () {
  if (window.particlesJS) {
    particlesJS.load('particles-js', 'js/particles-config.json');
  }
};
