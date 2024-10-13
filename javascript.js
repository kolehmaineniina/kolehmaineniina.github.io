function toggleExpand(element) {
    element.classList.toggle('expanded');
  }

document.getElementById('hamburger').addEventListener('click', function(){var navLinks = document.getElementById('nav-links');navLinks.classList.toggle('active');});



