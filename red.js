function toggleMenu() {
    const navItems = document.querySelector(".navItems");
    navItems.classList.toggle("show");
}


window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});


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






document.addEventListener("DOMContentLoaded", () => {
    const painpointsImg = document.querySelector(".painpointsImg");

    if (painpointsImg) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    painpointsImg.classList.add("visible"); 
                    console.log("Image is visible"); 
                }
            });
        });

        observer.observe(painpointsImg); 
    } else {
        console.error("Element with class 'painpointsImg' not found");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const personaImages = document.querySelectorAll(".persona1, .persona2, .persona3, .persona4");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); 
                observer.unobserve(entry.target); 
            }
        });
    });

    personaImages.forEach((image) => observer.observe(image)); 
});

document.addEventListener("DOMContentLoaded", () => {
    const personaImages = document.querySelectorAll(".problemstatmentImg"); // Correct variable name

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
    const userElements = document.querySelectorAll(".user1, .user2, .user3");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the visible class
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    });

    userElements.forEach((element) => observer.observe(element)); // Observe each user element
});

document.addEventListener("DOMContentLoaded", () => {
    const userElements = document.querySelectorAll(".idea");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); 
                observer.unobserve(entry.target); 
            }
        });
    });
    userElements.forEach((element) => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
    const userElements = document.querySelectorAll(".userFlowImg");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); 
                observer.unobserve(entry.target); 
            } 
        }
        );  
    });
    userElements.forEach((element) => observer.observe(element));
}
);



document.addEventListener("DOMContentLoaded", () => {
    const userElements = document.querySelectorAll(".informationArchitectureImg");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); 
                observer.unobserve(entry.target); 
            } 
        }
        );  
    });
    userElements.forEach((element) => observer.observe(element));
}
);


document.addEventListener("DOMContentLoaded", () => {
    const userElements = document.querySelectorAll(".designSystem");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); 
                observer.unobserve(entry.target); 
            } 
        }
        );  
    });
    userElements.forEach((element) => observer.observe(element));
}
);