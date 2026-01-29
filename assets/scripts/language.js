const buttons = document.querySelectorAll(".lang-btn");

async function setLanguage(lang) {
  const response = await fetch(`../assets/json/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = translations[key] || el.innerHTML;
  });

  localStorage.setItem("lang", lang);
  setActiveButton(lang);
}

function setActiveButton(lang) {
  buttons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

const savedLang = localStorage.getItem("lang") || "lan_ptbr";
setLanguage(savedLang);