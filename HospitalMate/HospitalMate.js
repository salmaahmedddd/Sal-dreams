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




document.addEventListener("DOMContentLoaded", () => {
    const personaImages = document.querySelectorAll(".challengesImage"); // Correct variable name

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the visible class
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    });

    personaImages.forEach((image) => observer.observe(image)); // Use the correct variable
});



document.addEventListener("DOMContentLoaded", () => {
    const personaImages = document.querySelectorAll(".persona1 , .persona2"); // Correct variable name

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the visible class
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    });

    personaImages.forEach((image) => observer.observe(image)); // Use the correct variable
});


document.addEventListener("DOMContentLoaded", () => {
    const personaImages = document.querySelectorAll(".problemImage"); // Correct variable name

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the visible class
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    });

    personaImages.forEach((image) => observer.observe(image)); // Use the correct variable
});


document.addEventListener("DOMContentLoaded", () => {
    const personaImages = document.querySelectorAll(
      ".userJourneyImage1, .userJourneyImage2"
    ); // Correct variable name

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the visible class
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    });

    personaImages.forEach((image) => observer.observe(image)); // Use the correct variable
});

document.addEventListener("DOMContentLoaded", () => {
    const personaImages = document.querySelectorAll(
      ".ideationImage"
    ); // Correct variable name

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the visible class
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    });

    personaImages.forEach((image) => observer.observe(image)); // Use the correct variable
});

document.addEventListener("DOMContentLoaded", () => {
    const personaImages = document.querySelectorAll(
      ".informationImage"
    ); // Correct variable name

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the visible class
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    });

    personaImages.forEach((image) => observer.observe(image)); // Use the correct variable
});

document.addEventListener("DOMContentLoaded", () => {
    const personaImages = document.querySelectorAll(
      ".insightImage"
    ); // Correct variable name

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the visible class
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    });

    personaImages.forEach((image) => observer.observe(image)); // Use the correct variable
});

document.addEventListener("DOMContentLoaded", () => {
    const personaImages = document.querySelectorAll(
      ".designSystem"
    ); // Correct variable name

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the visible class
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    });

    personaImages.forEach((image) => observer.observe(image)); // Use the correct variable
});