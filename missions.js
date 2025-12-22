const points = parseInt(localStorage.getItem("points") || 0);
const level = getLevel(points);

if (level >= 2) {
  const btn2 = document.getElementById("startMission2");
  btn2.disabled = false;
  btn2.textContent = "Commencer";
}
// Initialisation des points
if (!localStorage.getItem("points")) {
  localStorage.setItem("points", "0");
}

function startTimer(buttonId, timerId) {
  const btn = document.getElementById(buttonId);
  const timerDisplay = document.getElementById(timerId);
  let time = 30;

  btn.disabled = true;
  timerDisplay.classList.add("flash");

  const interval = setInterval(() => {
    timerDisplay.textContent = time + "s";
    time--;

    if (time < 0) {
      clearInterval(interval);
      timerDisplay.classList.remove("flash");
      timerDisplay.textContent = "Mission réussie ✅";

      // ➕ Ajouter les points
      let points = parseInt(localStorage.getItem("points"));
      points += 10;

// 🎁 Bonus niveau
if (points === 50 || points === 100) {
  alert("🎉 Bonus débloqué !");
}
      localStorage.setItem("points", points);

      btn.disabled = false;
    }
  }, 1000);
}

// Boutons missions
document.getElementById("startMission1").addEventListener("click", () => {
  startTimer("startMission1", "timer1");
});

document.getElementById("startMission2").addEventListener("click", () => {
  startTimer("startMission2", "timer2");
});