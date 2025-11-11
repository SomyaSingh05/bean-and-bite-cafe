document.addEventListener('DOMContentLoaded', () => {
  const navbarCollapse = document.getElementById('navBar');
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

  // Toggle the menu on button click
  document.querySelector('.navbar-toggler').addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    } else {
      bsCollapse.show();
    }
  });

  // Close menu when clicking outside the navbar and toggle button
  document.addEventListener('click', (event) => {
    const target = event.target;
    const isInsideMenu = navbarCollapse.contains(target);
    const isToggleButton = target.closest('.navbar-toggler');

    if (!isInsideMenu && !isToggleButton && navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    }
  });
  // Close menu when clicking any nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    }
  });
});
     //  VIDEO PLAY/PAUSE CONTROL
    const video = document.getElementById("heroVideo");
    const controlBtn = document.getElementById("videoControlBtn");
    const icon = document.getElementById("videoIcon");
    let isPlaying = false;

    if (controlBtn && video && icon) {
      controlBtn.addEventListener("click", () => {
        if (isPlaying) {
          video.pause();
          icon.classList.remove("bi-pause-fill");
          icon.classList.add("bi-play-fill");
        } else {
          video.play();
          icon.classList.remove("bi-play-fill");
          icon.classList.add("bi-pause-fill");
        }
        isPlaying = !isPlaying;
      });
    }
    
  });
