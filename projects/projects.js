document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navItems = document.querySelector(".navItems");
  });
      function toggleMenu() {
          const navItems = document.querySelector(".navItems");
          navItems.classList.toggle("show"); // Toggle the 'show' class
      }
  
  
      document.addEventListener("DOMContentLoaded", function () {
          const navBar = document.getElementById("navBar");
  
          window.addEventListener("scroll", function () {
              if (window.scrollY > 50) { // If the user scrolls down 50px or more
                  navBar.classList.add("fixed"); // Add the 'fixed' class
              } else {
                  navBar.classList.remove("fixed"); // Remove the 'fixed' class
              }
          });
      });
  
  
  window.addEventListener('load', function() {
      document.body.classList.add('loaded');
  });