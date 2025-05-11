
function toggleMenu() {
    const navItems = document.querySelector(".navItems");
    navItems.classList.toggle("show");
}


window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});




    document.addEventListener("DOMContentLoaded", () => {
        const images = document.querySelectorAll(".projectImage1, .projectImage2, .projectImage3");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        });

        images.forEach((image) => observer.observe(image));
    });


  


   
   
