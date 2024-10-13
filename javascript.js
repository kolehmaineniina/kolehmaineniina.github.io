function toggleExpand(element) {
    element.classList.toggle('expanded');
  }

document.getElementById('hamburger-menu').addEventListener('click', function(){var navLinks = document.getElementById('nav-links');navLinks.classList.toggle('active');});



