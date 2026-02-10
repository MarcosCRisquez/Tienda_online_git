let CART = JSON.parse(localStorage.getItem('beany_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    // Animación Loader
    const liq = document.querySelector('.liquid');
    if(liq) setTimeout(() => liq.style.height = '90%', 100);
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) loader.style.transform = 'translateY(-100%)';
    }, 1800);

    // Cursor
    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    updateCartDisplay();
});

function addToCart(name, price, img) {
    CART.push({ name, price, img });
    localStorage.setItem('beany_cart', JSON.stringify(CART));
    updateCartDisplay();
    alert("¡Añadido a la bolsa!");
}

function updateCartDisplay() {
    const container = document.getElementById('cart-items-container');
    const countEl = document.getElementById('cart-counter');
    const totalEl = document.getElementById('total-amount');
    let total = 0;

    if(container) {
        container.innerHTML = '';
        CART.forEach((item, i) => {
            total += item.price;
            const div = document.createElement('div');
            div.className = 'cart-item-ui';
            div.innerHTML = `<img src="${item.img}" width="40"><div><p>${item.name}</p><b>${item.price}€</b></div>`;
            container.appendChild(div);
        });
    }

    if(countEl) countEl.innerText = CART.length;
    if(totalEl) totalEl.innerText = total.toFixed(2) + '€';
}

/* PARTE DE DARIO */
function toggleCart() {
    document.getElementById('sidebar-cart').classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Quitar Loader
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 800);
    }, 1500);

    // 2. Animación entrada Hero
    const heroTitle = document.getElementById('hero-title');
    setTimeout(() => {
        heroTitle.style.transition = "all 1s ease";
        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0)";
    }, 2000);

    // 3. Scroll Reveal para las cartas del menú
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.coffee-card');
    cards.forEach(card => {
        observer.observe(card);
    });

    // 4. Efecto de cambio de Navbar al hacer scroll
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.style.padding = "10px 50px";
            nav.style.background = "#1a1a1a";
        } else {
            nav.style.padding = "20px 50px";
            nav.style.background = "rgba(26, 26, 26, 0.9)";
        }
    });
});
/* PARTE DE DARIO HASTA AQUI */


/* PARTE DE CHEMA */
// Menú móvil
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de scroll en el header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        header.style.backgroundColor = 'var(--white)';
    }
});

// Animación para las tarjetas de té al hacer scroll
function animateOnScroll() {
    const teaCards = document.querySelectorAll('.tea-card');
    
    teaCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if(cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar la opacidad de las tarjetas
document.querySelectorAll('.tea-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Ejecutar animación al cargar y al hacer scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Añadir funcionalidad a los botones
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Efecto de pulsación
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Si es un botón de reserva, mostrar mensaje
        if(this.textContent.includes('Reserva') || this.textContent.includes('Reservar')) {
            e.preventDefault();
            alert('¡Gracias por tu interés! Serás redirigido a nuestro sistema de reservas.');
            // En una implementación real, aquí iría el código para redirigir al formulario de reservas
        }
    });
});
/* PARTE DE DARIO HASTA AQUI */