// ==========================================
// VANTA - LUXURY STREETWEAR
// Premium JavaScript
// ==========================================

// Particle Generation
function createParticles() {
    const container = document.querySelector('.particles-container');
    if (!container) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 5 + 8;
        const delay = Math.random() * 2;

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = left + '%';
        particle.style.top = top + '%';
        particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;
        
        container.appendChild(particle);
    }
}

// Smooth Scrolling
function scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Email Form Handler
function handleEmailSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // Visual feedback
    const button = form.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = '✓ WELCOME TO THE INNER CIRCLE';
    button.style.background = '#4CAF50';
    
    // Log email (in production, send to backend)
    console.log('Email captured:', email);
    
    // Reset after 2 seconds
    setTimeout(() => {
        form.reset();
        button.textContent = originalText;
        button.style.background = '';
    }, 2000);
}

// Contact Handler
function handleContact() {
    alert('Contact: hello@vanta.com\nFollow us on Instagram, TikTok, and X for updates!');
}

// Scroll Animation - Fade in elements as they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements on page load
document.addEventListener('DOMContentLoaded', () => {
    // Create particles
    createParticles();
    
    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });

    // Observe philosophy cards
    document.querySelectorAll('.philosophy-card').forEach(card => {
        observer.observe(card);
    });

    // Observe about pillars
    document.querySelectorAll('.pillar').forEach(pillar => {
        observer.observe(pillar);
    });

    // Observe stats
    document.querySelectorAll('.stat').forEach(stat => {
        observer.observe(stat);
    });
});

// Smooth active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary-purple)';
        }
    });

    // Subtle navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(123, 46, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '';
    }
});

// Product card click event
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
        const productName = this.querySelector('.product-info h3').textContent;
        const productPrice = this.querySelector('.product-price').textContent;
        console.log(`Added to cart: ${productName} - ${productPrice}`);
        
        // Visual feedback
        const originalBorder = this.style.borderColor;
        this.style.borderColor = '#7B2EFF';
        this.style.boxShadow = '0 0 30px rgba(123, 46, 255, 0.8)';
        
        setTimeout(() => {
            this.style.borderColor = originalBorder;
            this.style.boxShadow = '';
        }, 500);
    });
});

// Mobile menu (future enhancement)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    }
}

// Cart functionality (placeholder)
document.querySelector('.cart-icon')?.addEventListener('click', () => {
    console.log('Cart opened');
    alert('Shopping cart feature coming soon');
});

// Console message
console.log('%c🚀 VANTA - Wear The Mindset', 'font-size: 20px; font-weight: bold; color: #7B2EFF;');
console.log('%cPremium Luxury Streetwear Brand', 'font-size: 14px; color: #CCCCCC;');
console.log('%cWelcome to the movement.', 'font-size: 12px; color: #7B2EFF; font-style: italic;');
