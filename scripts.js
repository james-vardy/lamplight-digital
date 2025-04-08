document.addEventListener("DOMContentLoaded", function () {
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const storedTheme = localStorage.getItem("theme");
  const themeIcon = document.getElementById("theme-icon");

  if (storedTheme === "dark" || (!storedTheme && prefersDarkScheme)) {
    document.body.classList.add("dark-theme");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    if (!storedTheme) localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    if (!storedTheme) localStorage.setItem("theme", "light");
  }
});

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark-theme");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  }
}
