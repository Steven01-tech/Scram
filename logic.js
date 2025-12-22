// Initialisation des points si absent
if (!localStorage.getItem("points")) {
  localStorage.setItem("points", "0");
}

// Fonction pour calculer le niveau
function getLevel(points) {
  if (points >= 200) return 4;
  if (points >= 100) return 3;
  if (points >= 50) return 2;
  return 1;
}

// Fonction pour le pourcentage de progression
function getProgress(points) {
  let base = 0;
  let max = 50;

  if (points >= 200) {
    base = 200; max = 100;
  } else if (points >= 100) {
    base = 100; max = 100;
  } else if (points >= 50) {
    base = 50; max = 50;
  }

  return Math.min(100, Math.floor(((points - base) / max) * 100));
}

