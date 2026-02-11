// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// FAQ Accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        
        // Close other open items
        document.querySelectorAll('.faq-item.active').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
        
        // Toggle current item
        faqItem.classList.toggle('active');
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `${entry.target.dataset.animation || 'fadeInUp'} 0.8s ease-out forwards`;
            entry.target.style.animationDelay = entry.target.dataset.delay || '0s';
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up, .feature-card, .info-card, .faq-item').forEach(element => {
    observer.observe(element);
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            nome: this.querySelector('input[type="text"]').value,
            email: this.querySelector('input[type="email"]').value,
            telefone: this.querySelector('input[type="tel"]').value,
            mensagem: this.querySelector('textarea').value
        };
        
        // Here you would send the data to your server
        console.log('Formulário enviado:', formData);
        
        // Show success message
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        this.reset();
    });
}

// Add shake animation to letters on page load (only once)
window.addEventListener('load', () => {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        // Add shake class to trigger animation only once
        letter.classList.add('shake');
        letter.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Remove shake class after animation completes
    setTimeout(() => {
        letters.forEach(letter => {
            letter.classList.remove('shake');
        });
    }, 1500); // Animation duration + delay
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.borderBottom = '2px solid rgba(255, 207, 7, 0.3)';
    } else {
        navbar.style.borderBottom = '2px solid rgba(255, 207, 7, 0.1)';
    }
});