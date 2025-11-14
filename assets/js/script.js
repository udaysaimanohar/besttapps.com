document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const dropdown = document.querySelector(".dropdown");
  const dropBtn = document.querySelector(".dropbtn");

  if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  }

  // Dropdown open/close on click for better touch support
  if (dropdown && dropBtn) {
    dropBtn.addEventListener("click", (e) => {
      e.preventDefault();
      dropdown.classList.toggle("open");
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") dropdown.classList.remove("open");
    });
  }
});
