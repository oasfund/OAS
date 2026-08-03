/* ==========================================
   OAS MANAGEMENT SYSTEM V2
   app.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href && href.endsWith(currentPage)) {

            link.classList.add("active");

        }

    });

    /* ==========================
       HEADER SHADOW
    ========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });

    /* ==========================
       COUNTER ANIMATION
    ========================== */

    const counters = document.querySelectorAll(".stat-card h2");

    const animateCounter = (counter) => {

        let value = counter.innerText.replace(/[^\d]/g, "");

        if (!value) return;

        value = Number(value);

        let current = 0;

        const speed = Math.max(10, Math.floor(value / 50));

        const timer = setInterval(() => {

            current += speed;

            if (current >= value) {

                current = value;

                clearInterval(timer);

            }

            if (counter.innerText.includes("₱")) {

                counter.innerText = "₱" + current;

            }

            else if (counter.innerText.includes("%")) {

                counter.innerText = current + "%";

            }

            else if (counter.innerText.includes("+")) {

                counter.innerText = current + "+";

            }

            else {

                counter.innerText = current;

            }

        },20);

    };

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    });

    counters.forEach(counter => observer.observe(counter));

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const revealItems = document.querySelectorAll(

        ".card,.step,.benefit,.faq-item,.summary-card,.stat-card"

    );

    revealItems.forEach(item => {

        item.style.opacity = "0";

        item.style.transform = "translateY(40px)";

    });

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.transition="all .6s ease";

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            }

        });

    },{

        threshold:.15

    });

    revealItems.forEach(item=>{

        revealObserver.observe(item);

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});

console.log("%cOAS MANAGEMENT SYSTEM V2","color:#2563EB;font-size:20px;font-weight:bold;");
console.log("Homepage Loaded Successfully.");
