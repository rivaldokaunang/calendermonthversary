
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE YOU').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 250); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

 function goHome() {
    window.location.href = "index.html";
  }


  function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicControl");

  if (music.paused) {
    music.play();
    btn.innerHTML = "🔊";
  } else {
    music.pause();
    btn.innerHTML = "🔇";
  }
}

window.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  music.play();
}, { once: true });