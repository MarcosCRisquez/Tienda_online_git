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