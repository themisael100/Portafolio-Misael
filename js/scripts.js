const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML = texts[section][value];
  }
};

flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (toggleIcon.src.includes("moon.svg")) {
    toggleIcon.src = "assets/icons/sun.svg";
    toggleText.textContent = "Claro";
  } else {
    toggleIcon.src = "assets/icons/moon.svg";
    toggleText.textContent = "Oscuro";
  }
});

toggleColors.addEventListener("click", (e) => {
  rootStyles.setProperty("--primary-color", e.target.dataset.color);
});

function mostrarAlerta() {
  alert('De acuerdo con las políticas de confidencialidad de la empresa, no podemos compartir el código fuente del proyecto. Sin embargo, puedes obtener una visión del proyecto a través de videos que muestran su funcionamiento y características.');
}
