// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navbar shadow
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
    } else {
        nav.style.boxShadow = "none";
    }
});

// Reveal animation on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Typing Effect
const text = "UI/UX Designer & Frontend Developer";

let i = 0;

const heading = document.querySelector(".hero-left h2");

heading.innerHTML = "";

function typeWriter(){

    if(i < text.length){

        heading.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,80);

    }

}

typeWriter();

// Active Navbar Link
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=window.scrollY;

const offset=section.offsetTop-150;

const height=section.offsetHeight;

if(top>=offset){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});