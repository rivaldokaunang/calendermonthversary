const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    title: "My little calendar",
    width: 214,
    height: 228,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: true,
    background: "#aa1de600",
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});


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