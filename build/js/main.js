document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a"); // Ambil semua link navbar
    const mobileMenu = document.getElementById("mobile-menu");
  
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);
  
        if (mobileMenu.classList.contains("flex")) {
          mobileMenu.classList.add("hidden");
          mobileMenu.classList.remove("flex");
        }
  
        if (targetElement) {
          // Scroll ke elemen yang dituju
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  
  const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const navLinks = document.querySelectorAll('#mobile-menu a');

    const toggleMenu = () => {
        // Toggle menu visibility
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');

        // Toggle hamburger and close icons
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    };

    // Open/close menu when hamburger button is clicked
    hamburgerBtn.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
};

document.addEventListener('DOMContentLoaded', initApp);