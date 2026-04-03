/* ============================================================
   DOUBLE FOCUS — main.js
============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      submitForm();
    });
});

/* --- NAVBAR : fond solide au scroll --- */
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 60) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

/* --- FORMULAIRE MULTI-ÉTAPES --- */
let currentStep = 0;

// Champs obligatoires par étape
const requiredFields = {
  0: ["prenom_mariee", "prenom_marie", "email", "telephone", "date_mariage"],
  1: ["lieu_ceremonie", "lieu_reception", "ville", "nombre_invites"],
  2: ["formule"],
};

function validateStep(step) {
  const fields = requiredFields[step];
  if (!fields) return true;
  let valid = true;
  fields.forEach((name) => {
    const el = document.querySelector(`[name="${name}"]`);
    if (!el) return;
    const empty = !el.value.trim();
    el.style.borderColor = empty ? "#c0392b" : "";
    if (empty) valid = false;
  });
  return valid;
}

function goStep(n) {
  // Valider avant d'avancer
  if (n > currentStep && !validateStep(currentStep)) return;

  // Cacher l'étape actuelle
  document.getElementById("step-" + currentStep).classList.remove("active");
  document.getElementById("dot-" + currentStep).classList.remove("active");

  // Marquer comme "done" si on avance
  if (n > currentStep) {
    document.getElementById("dot-" + currentStep).classList.add("done");
    if (currentStep < 3)
      document.getElementById("line-" + currentStep).classList.add("done");
  }
  // Enlever "done" si on recule
  if (n < currentStep) {
    for (let i = n; i <= currentStep; i++) {
      document.getElementById("dot-" + i).classList.remove("done");
    }
    for (let i = n; i < currentStep; i++) {
      const line = document.getElementById("line-" + i);
      if (line) line.classList.remove("done");
    }
  }

  // Activer la nouvelle étape
  currentStep = n;
  document.getElementById("step-" + currentStep).classList.add("active");
  document.getElementById("dot-" + currentStep).classList.add("active");

  // Scroll vers le formulaire
  document
    .getElementById("contact")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

async function submitForm() {
  const form = document.getElementById("contact-form");
  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xaqpaznp", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      document.getElementById("step-3").classList.remove("active");
      document.getElementById("dot-3").classList.add("done");
      document.getElementById("line-2").classList.add("done");
      document.getElementById("formSuccess").classList.add("show");
    } else {
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  } catch (error) {
    alert("Une erreur est survenue, veuillez réessayer.");
  }
}

/* --- MODAL VIDÉO --- */
function openVideo(url) {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");
  frame.src = url + "?autoplay=1";
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");
  frame.src = "";
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// Fermer la modale avec Échap
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeVideo();
});
