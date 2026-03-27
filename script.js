function updateCalendar() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["january", "february", "march", "april", "may",
        "june", "july", "august", "september", "october", "november", "december"];
    
    const month = monthNames[now.getMonth()];

    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;

}

document.body.addEventListener("click", (e) => {
  for (let i = 0; i < 10; i++) {
    createFlower(e.clientX, e.clientY);
  }
});

function createFlower(x, y) {
  const flower = document.createElement("div");
  flower.className = "flower";

  const flowers = ["🌸", "🌹", "🤍"];
  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

  flower.style.left = x + "px";
  flower.style.top = y + "px";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 2000);
}

const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {
  window.location.href = "flower.html";
});

updateCalendar();