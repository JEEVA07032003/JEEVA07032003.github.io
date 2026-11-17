
/* Mobile Navigation */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


/* Close Mobile Menu After Clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });

});


/* Scroll Reveal Animation */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* Active Navbar Link While Scrolling */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const currentId = entry.target.getAttribute("id");

            navItems.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + currentId) {
                    link.classList.add("active");
                }

            });

        }

    });

}, {
    threshold: 0.4
});

sections.forEach(section => {
    sectionObserver.observe(section);
});
