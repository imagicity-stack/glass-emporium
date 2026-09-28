const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

// Close the mobile menu after picking a link
links.addEventListener("click", (event) => {
  if (event.target.closest("a") && links.classList.contains("open")) {
    toggle.click();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
