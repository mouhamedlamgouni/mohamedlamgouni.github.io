/* ===========================
   PORTFOLIO SCRIPT
=========================== */

// ===========================
// Sticky Navbar
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ===========================
// Active Navigation
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===========================
// Scroll Reveal Animation
// ===========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ===========================
// Button Animation
// ===========================

document.querySelectorAll("a").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = ".3s";

    });

});


// ===========================
// Page Loading Animation
// ===========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// ===========================
// Console Message
// ===========================

console.log("%cPortfolio Ready 🚀", "color:#3B82F6;font-size:18px;font-weight:bold;");
