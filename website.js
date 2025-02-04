// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a, .sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic effects: highlight active section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a, .sidebar a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animation for elements on scroll
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

document.querySelectorAll('section, header').forEach(section => {
    scrollObserver.observe(section);
});

// Sidebar toggle functionality
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.createElement('button');
toggleButton.classList.add('sidebar-toggle');
toggleButton.textContent = '☰';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
