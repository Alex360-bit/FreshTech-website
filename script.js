// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 120, // Adjusted for navbar and quick links
            behavior: 'smooth'
        });
    });
});

// Change active link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Main Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Manual slideshow navigation
function plusSlides(n) {
    showSlidesManual(slideIndex += n);
}

function showSlidesManual(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}

// 3D Model Slideshow
let modelSlideIndex = 0;
showModelSlides();

function showModelSlides() {
    let i;
    let slides = document.getElementsByClassName("model-slides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    modelSlideIndex++;
    
    if (modelSlideIndex > slides.length) {
        modelSlideIndex = 1;
    }
    
    slides[modelSlideIndex - 1].style.display = "block";
    setTimeout(showModelSlides, 6000); // Change image every 6 seconds
}

// Manual model slideshow navigation
function plusModelSlides(n) {
    showModelSlidesManual(modelSlideIndex += n);
}

function showModelSlidesManual(n) {
    let i;
    let slides = document.getElementsByClassName("model-slides");
    
    if (n > slides.length) {
        modelSlideIndex = 1;
    }
    
    if (n < 1) {
        modelSlideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[modelSlideIndex - 1].style.display = "block";
}

// PCB Slideshow
let pcbSlideIndex = 0;
showPcbSlides();

function showPcbSlides() {
    let i;
    let slides = document.getElementsByClassName("pcb-slides");
    
    if (slides.length === 0) return; // Guard clause if no slides exist
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    pcbSlideIndex++;
    
    if (pcbSlideIndex > slides.length) {
        pcbSlideIndex = 1;
    }
    
    slides[pcbSlideIndex - 1].style.display = "block";
    setTimeout(showPcbSlides, 5500); // Change image every 5.5 seconds
}

// Manual PCB slideshow navigation
function plusPcbSlides(n) {
    showPcbSlidesManual(pcbSlideIndex += n);
}

function showPcbSlidesManual(n) {
    let i;
    let slides = document.getElementsByClassName("pcb-slides");
    
    if (slides.length === 0) return; // Guard clause if no slides exist
    
    if (n > slides.length) {
        pcbSlideIndex = 1;
    }
    
    if (n < 1) {
        pcbSlideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[pcbSlideIndex - 1].style.display = "block";
}

// CEO Slideshow
let ceoSlideIndex = 0;
showCeoSlides();

function showCeoSlides() {
    let i;
    let slides = document.getElementsByClassName("ceo-slides");
    
    if (slides.length === 0) return; // Guard clause if no slides exist
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    ceoSlideIndex++;
    
    if (ceoSlideIndex > slides.length) {
        ceoSlideIndex = 1;
    }
    
    slides[ceoSlideIndex - 1].style.display = "block";
    setTimeout(showCeoSlides, 4500); // Change image every 4.5 seconds
}

// Manual CEO slideshow navigation
function plusCeoSlides(n) {
    showCeoSlidesManual(ceoSlideIndex += n);
}

function showCeoSlidesManual(n) {
    let i;
    let slides = document.getElementsByClassName("ceo-slides");
    
    if (slides.length === 0) return; // Guard clause if no slides exist
    
    if (n > slides.length) {
        ceoSlideIndex = 1;
    }
    
    if (n < 1) {
        ceoSlideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[ceoSlideIndex - 1].style.display = "block";
}

// Navbar scroll effect
window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "10px 0";
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
        document.getElementById("navbar").style.padding = "15px 0";
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }
};

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Form submission
document.getElementById('innovationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // You would typically use AJAX to submit the form data
    // For this example, we'll just show a success message
    alert('Thank you for submitting your innovation idea! We will review it shortly.');
    this.reset();
});