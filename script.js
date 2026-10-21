
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  // Close the mobile menu after selecting a section
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
    });
  });

  // Update the footer year automatically
  const footer = document.querySelector("footer p");

  if (footer) {
    footer.textContent =
      `© ${new Date().getFullYear()} Gaurav Ahirwar. All rights reserved.`;
  }

  // Highlight the current navigation section
  const sections = document.querySelectorAll("main section");
  const links = document.querySelectorAll(".nav-links a");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((link) => {
              const isActive =
                link.getAttribute("href") === `#${entry.target.id}`;

              if (isActive) {
                link.setAttribute("aria-current", "location");
              } else {
                link.removeAttribute("aria-current");
              }
            });
          }
        });
      },
      { rootMargin: "-25% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  }
});
