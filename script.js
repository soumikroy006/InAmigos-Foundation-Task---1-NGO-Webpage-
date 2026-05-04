/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* =========================
   HEADER SHADOW ON SCROLL
========================= */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const revealElements = document.querySelectorAll('.section, .card, .impact-box');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

/* =========================
   COUNTER ANIMATION
========================= */
const counters = document.querySelectorAll('.impact-box h3');

let counterStarted = false;

function runCounter() {
    if (counterStarted) return;

    counters.forEach(counter => {
        let target = parseInt(counter.innerText.replace(/\D/g, ''));
        let count = 0;
        let speed = target / 100;

        const updateCount = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.floor(count) + "+";
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCount();
    });

    counterStarted = true;
}

window.addEventListener('scroll', () => {
    const section = document.querySelector('#impact');
    if (section) {
        const position = section.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            runCounter();
        }
    }
});

/* =========================
   ACTIVE NAV LINK
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
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

/* =========================
   BUTTON RIPPLE EFFECT
========================= */
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", function(e) {
        const circle = document.createElement("span");
        circle.classList.add("ripple");

        const rect = btn.getBoundingClientRect();
        circle.style.left = e.clientX - rect.left + "px";
        circle.style.top = e.clientY - rect.top + "px";

        btn.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 600);
    });
});