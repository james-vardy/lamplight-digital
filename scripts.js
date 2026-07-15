// Theme toggle. The initial theme is set inline in <head> to avoid a flash.
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});

// Follow the system preference until the user picks a theme themselves.
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      root.dataset.theme = e.matches ? "dark" : "light";
    }
  });

// Keep the copyright year current.
document.getElementById("year").textContent = new Date().getFullYear();
