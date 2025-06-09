/*document.addEventListener("DOMContentLoaded", function(event) {
   
      - Code to execute when only the HTML document is loaded.
      - This doesn't wait for stylesheets, 
        images, and subframes to finish loading. 
    
});*/

// Desplazamiento suave para enlaces de navegación
/* original modificada
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
});*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight - 10; // -10 para un pequeño margen visual

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// Añadir efecto de desplazamiento a la barra de navegación
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.classList.add('shadow');
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.classList.remove('shadow');
    }
});

// rutina para que cuando el elemento entra en pantalla, se vuelva visible suavemente y se desliza hacia arriba.
// observador 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Si el elemento esta en pantalla (entry.isIntersecting === true) agrega la clase visible
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// busca todos los elementos del DOM con la clase fade-in-up.
document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
});

// Cerrar el menú móvil al hacer clic en un enlace
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

